import {
    ATTRIBUTES_REQUESTED,
    ATTRIBUTES_SUCCESS,
    ATTRIBUTES_ERROR,
    ATTRIBUTES_PREV_STEP,
    ATTRIBUTES_NEXT_STEP,
    ATTRIBUTES_ADD_VALUE,
    ATTRIBUTES_FORM_SET_NAME,
    ATTRIBUTES_FORM_SET_DISPLAYED_NAME
} from '../actions'

const MAX_STEP_INDEX = 1

export const attributes = (state={items: [], isFetching: false, form: {step: 0, name:'', displayed_name: '', values: []}}, action) => {
    switch(action.type){
        case ATTRIBUTES_REQUESTED:
            return {...state, isFetching: true}
        case ATTRIBUTES_SUCCESS:
            return {...state, isFetching: false, items: action.items}
        case ATTRIBUTES_ERROR:
            return {...state, isFetching: false, error: action.error}
        case ATTRIBUTES_NEXT_STEP:
            if(state.form.step < MAX_STEP_INDEX){
                return {...state, form: {...state.form, step: state.form.step + 1}}
            }
            return state
        case ATTRIBUTES_PREV_STEP:
            if(state.form.step > 0){
                return {...state, form: {...state.form, step: state.form.step - 1}}
            }
            return state
        case ATTRIBUTES_ADD_VALUE:
            return {
                ...state, form: {...state.form, values: [...state.form.values, {name : action.value}]}
            }
        case ATTRIBUTES_FORM_SET_NAME:
            return {
                ...state, form: {...state.form, name: action.name }
            }
        case ATTRIBUTES_FORM_SET_DISPLAYED_NAME:
            return {
                ...state, form: {...state.form, displayed_name: action.displayed_name}
            }
        default:
            return state
    }
}