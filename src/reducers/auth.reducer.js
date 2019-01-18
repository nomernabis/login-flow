import { 
    LOGIN_REQUESTED, 
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SET_TOKEN} from "../actions"


export const auth = (state={ isFetching: false }, action) => {
    switch(action.type){
        case LOGIN_REQUESTED:
            return {...state, isFetching: true}
        case LOGIN_SUCCESS:
            return {...state, isFetching: false, token: action.token}
        case LOGIN_ERROR:
            return {...state, isFetching: false, error: action.error}
        case SET_TOKEN:
            return {...state, token: action.token}
        default:
            return state
    }
}