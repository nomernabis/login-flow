import { CATEGORIES_REQUESTED, CATEGORIES_SUCCESS, CATEGORIES_ERROR } from "../actions"

export const categories = (state={response: {}, isFetching: false}, action) => {
    switch(action.type){
        case CATEGORIES_REQUESTED:
            return {...state, isFetching: true}
        case CATEGORIES_SUCCESS:
            return {...state, isFetching: false, response: action.response}
        case CATEGORIES_ERROR:
            return {...state, isFetching: false, error: action.error}
        default:
            return state
    }
}