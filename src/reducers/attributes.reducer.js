import {
    ATTRIBUTES_REQUESTED,
    ATTRIBUTES_SUCCESS,
    ATTRIBUTES_ERROR,
    ATTRIBUTES_PREV_STEP,
    ATTRIBUTES_NEXT_STEP
} from '../actions'

const MAX_STEP_INDEX = 1

export const attributes = (state={items: [], isFetching: false, form: {step: 0, }}, action) => {
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
        default:
            return state
    }
}