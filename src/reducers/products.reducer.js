import {
    PRODUCTS_REQUESTED,
    PRODUCTS_SUCCESS,
    PRODUCTS_ERROR
} from "../actions"


export const products = (state={items: [], isFetching: false}, action) => {
    switch(action.type){
        case PRODUCTS_REQUESTED:
            return {...state, isFetching: true}
        case PRODUCTS_SUCCESS:
            return {...state, isFetching: false, items: action.items}
        case PRODUCTS_ERROR:
            return {...state, isFetching: false, error: action.error}
        default:
            return state
    }
}