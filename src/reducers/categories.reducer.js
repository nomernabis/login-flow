import { CATEGEORIES_REQUESTED, CATEGORIES_SUCCESS, CATEGORIES_ERROR, CATEGORIES_REQUESTED } from "../actions"

export const categories = (state={items: [], isFetching: false}, action) => {
    switch(action.type){
        case CATEGORIES_REQUESTED:
            return {...state, isFetching: true}
        case CATEGORIES_SUCCESS:
            return {...state, isFetching: false, items: action.items}
        case CATEGORIES_ERROR:
            return {...state, isFetching: false, items: action.items}
        default:
            return state
    }
}