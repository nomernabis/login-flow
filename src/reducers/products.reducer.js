import {
    PRODUCTS_REQUESTED,
    PRODUCTS_SUCCESS,
    PRODUCTS_ERROR,
    ADD_PRODUCT_NEXT_STEP,
    ADD_PRODUCT_PREV_STEP,
    ADD_PRODUCT_TOGGLE_CATEGORY
} from "../actions"

const MAX_STEP_INDEX = 4

export const products = (state={items: [], isFetching: false, form: { step: 0, selected: { categories: {}, attributes: {}} }}, action) => {
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
        default:
            return state
    }
}