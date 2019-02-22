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
    ADD_PRODUCT_SET_ERROR
} from "../actions"

import { EditorState } from "draft-js"


const MAX_STEP_INDEX = 4

export const products = (state={items: [], isFetching: false, form: { step: 0, name: '', quantity: 0, description: EditorState.createEmpty(), selected: { categories: {}, images: [], attributes: { current: {}, values: {}}} }}, action) => {
    switch(action.type){
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
            return {...state, form: {...state.form, step: state.form.step + 1 }}
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
            if(state.form.selected.attributes.values[action.value.id]){
                return {
                    ...state, form: {
                        ...state.form, selected: {
                            ...state.form.selected,
                            attributes: {
                                ...state.form.selected.attributes,
                                values: Object.keys(state.form.selected.attributes.values)
                                    .filter(id => id != action.value.id)
                                    .reduce((result, id) => {
                                        result[id] = state.form.selected.attributes.values[id]
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
                                values: {
                                    ...state.form.selected.attributes.values,
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
                ...state, form: {
                    ...state.form,
                    error: action.error
                }
            }
        default:
            return state
    }
}