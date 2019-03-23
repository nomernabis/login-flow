import {
    FETCH_USERS_REQUESTED,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR,
    POST_USER_REQUESTED,
    POST_USER_SUCCESS,
    POST_USER_ERROR,
    CLEAR_USER_FORM
} from "../actions"

export const users = (state={response: {}, error: {}, isFetching: false, form: {}}, action) => {
    switch(action.type){
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                response: action.response
            }
        case FETCH_USERS_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        case POST_USER_REQUESTED:
            return {
                ...state,
                isFetching: true
            }
        case POST_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                form: {
                    ...state.form,
                    response: action.response
                }
            }
        case POST_USER_ERROR:
            return {
                ...state,
                isFetching: false,
                form: {
                    ...state,
                    error: action.error
                }
            }
        case CLEAR_USER_FORM:
            return {
                response: {}, error: {}, isFetching: false, form: {}
            }
        default:
            return state
    }
}