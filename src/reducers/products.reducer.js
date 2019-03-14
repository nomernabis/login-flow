import {
    PRODUCTS_REQUESTED,
    PRODUCTS_SUCCESS,
    PRODUCTS_ERROR,
    ADD_PRODUCT_NEXT_STEP,
    ADD_PRODUCT_PREV_STEP,
    ADD_PRODUCT_TOGGLE_CATEGORY,
    ADD_PRODUCT_SELECT_ATTRIBUTE,
    ADD_PRODUCT_SELECT_ATTRIBUTE_VALUE,
    ADD_PRODUCT_SET_IMAGES,
    ADD_PRODUCT_ADD_IMAGE,
    ADD_PRODUCT_DELETE_IMAGE,
    ADD_PRODUCT_SWAP_IMAGES,
    ADD_PRODUCT_NAME_CHANGED,
    ADD_PRODUCT_QUANTITY_CHANGED,
    ADD_PRODUCT_DESCRIPTION_CHANGED,
    ADD_PRODUCT_SET_ERROR,
    ADD_PRODUCT_TO_STEP,
    ADD_PRODUCT_CLEAR_ERROR,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_REQUESTED,
    CLEAR_PRODUCT_DATA
} from "../actions"

import { EditorState } from "draft-js"


const MAX_STEP_INDEX = 4

export const products = (state={items: [], isFetching: false,  form: { step: 0, lastStep: 0, name: '', quantity: 0, description: EditorState.createEmpty(), selected: { categories: {}, images: [], attributes: { current: {} }} }}, action) => {
    switch(action.type){ 
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                form: {
                    ...state.form,
                    isFetching: false,
                    response: action.response
                }
            }
        case ADD_PRODUCT_REQUESTED:
            return {
                ...state,
                form: {
                    ...state.form,
                    isFetching: true
                }
            }
        case PRODUCTS_REQUESTED:
            return {...state, isFetching: true}
        case PRODUCTS_SUCCESS:
            return {...state, isFetching: false, items: action.items}
        case PRODUCTS_ERROR:
            return {...state, isFetching: false, error: action.error}
        case ADD_PRODUCT_NEXT_STEP:
            if(state.form.step >= MAX_STEP_INDEX){
                return state
            } 
            return {...state, form: {...state.form, step: state.form.step + 1, lastStep: state.form.step + 1 }}
        case ADD_PRODUCT_PREV_STEP:
            if(state.form.step <= 0){
                return state
            } 
            return {...state, form: {...state.form, step: state.form.step - 1 }}
        case ADD_PRODUCT_TOGGLE_CATEGORY:
            if(state.form.selected.categories[action.category.id]){
                return {...state, form: {...state.form, selected:{...state.form.selected, categories: Object.keys(state.form.selected.categories)
                    .filter(id => id != action.category.id)
                    .reduce((result, id) => {
                        result[id] = state.form.selected.categories[id]
                        return result
                    },{})}}} 
            }
            return {...state, form: {...state.form, selected: {...state.form.selected, categories: {...state.form.selected.categories, [action.category.id]: action.category}}}}
        case ADD_PRODUCT_SELECT_ATTRIBUTE:
            return {
                ...state, form: {
                    ...state.form,
                    selected: {
                        ...state.form.selected,
                        attributes: {
                            ...state.form.selected.attributes,
                            current: action.attribute
                        }
                    }
                }
            }
        case ADD_PRODUCT_SELECT_ATTRIBUTE_VALUE:
            if(state.form.selected.attributes[action.attributeId]){
                if(state.form.selected.attributes[action.attributeId][action.value.id]){
                    return {
                        ...state, form: {
                            ...state.form, selected: {
                                ...state.form.selected,
                                attributes: {
                                    ...state.form.selected.attributes,
                                    [action.attributeId]: Object.keys(state.form.selected.attributes[action.attributeId])
                                        .filter(id => id != action.value.id)
                                        .reduce((result, id) => {
                                            result[id] = state.form.selected.attributes[action.attributeId][id]
                                            return result
                                    }, {})
                                }
                            }
                        }
                    }
                } else {
                    return {
                        ...state, form: {
                            ...state.form,
                            selected: {
                                ...state.form.selected,
                                attributes: {
                                    ...state.form.selected.attributes,
                                    [action.attributeId]: {
                                        ...state.form.selected.attributes[action.attributeId],
                                        [action.value.id] : action.value
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                return {
                    ...state, form: {
                        ...state.form,
                        selected: {
                            ...state.form.selected,
                            attributes: {
                                ...state.form.selected.attributes,
                                [action.attributeId]: {
                                    [action.value.id] : action.value
                                }
                            }
                        }
                    }
                }
            }
        case ADD_PRODUCT_SET_IMAGES:
            return {
                ...state, form: {
                    ...state.form, 
                    selected: {
                        ...state.form.selected,
                        images: action.images
                    }
                }
            }
        case ADD_PRODUCT_ADD_IMAGE:
            return {
                ...state, form: {
                    ...state.form,
                    selected: {
                        ...state.form.selected,
                        images: [...state.form.selected.images, action.image]
                    }
                }
            }
        case ADD_PRODUCT_DELETE_IMAGE:
            return {
                ...state, form: {
                    ...state.form, 
                    selected: {
                        ...state.form.selected,
                        images: state.form.selected.images.filter((image, index) => index != action.index)
                    }
                }
            }

        case ADD_PRODUCT_SWAP_IMAGES:
            return {
                ...state, form: {
                    ...state.form, 
                    selected: {
                        ...state.form.selected,
                        images: state.form.selected.images.map((image, index) => {
                            if(index == action.from){
                                return state.form.selected.images[action.to]
                            } else
                            if(index == action.to){
                                return state.form.selected.images[action.from]
                            }
                            return image
                        })
                    }
                }
            }
        case ADD_PRODUCT_NAME_CHANGED:
            return {
                ...state, form:{
                    ...state.form, 
                    name: action.name
                }
            }
        case ADD_PRODUCT_QUANTITY_CHANGED:
            return {
                ...state, form: {
                    ...state.form,
                    quantity: action.quantity
                }
            }

        case ADD_PRODUCT_DESCRIPTION_CHANGED:
            return {
                ...state, form: {
                    ...state.form,
                    description: action.description
                }
            }
        case ADD_PRODUCT_SET_ERROR:
            return {
                ...state,  form: {
                    ...state.form,
                    error: action.error,
                    isFetching: false,
                }
            }

        case ADD_PRODUCT_TO_STEP:
            if(action.step < 0 || action.step > MAX_STEP_INDEX || action.step > state.form.lastStep){
                return state
            }
            return {
                ...state, form: {
                    ...state.form,
                    step: action.step
                }
            }
        case ADD_PRODUCT_CLEAR_ERROR:
            return {
                ...state, form: {
                    ...state.form,
                    error: Object.keys(state.form.error).filter(key => key != action.errorName)
                    .reduce((result, key) => {
                        result[key] = state.form.error[key]
                        return result
                    }, {})
                }
            }
        case CLEAR_PRODUCT_DATA:
            return {
                ...state,
                form: { step: 0, 
                    lastStep: 0, 
                    name: '', 
                    quantity: 0, 
                    description: EditorState.createEmpty(), 
                    selected: { categories: {}, images: [], attributes: { current: {} }} }
            }
        default:
            return state
    }
}