
import { Api } from "../utils"

export const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
export const fetchUsersRequested = () => ({
    type: FETCH_USERS_REQUESTED
})

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const fetchUsersSuccess = response => ({
    type: FETCH_USERS_SUCCESS,
    response
})

export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
export const fetchUsersError = error => ({
    type: FETCH_USERS_ERROR,
    error
})

export const fetchUsers = (limit, offset) => dispatch => {
    return Api.get('users/?limit=' + limit + '&offset='+offset)
        .then(response => dispatch(fetchUsersSuccess(response)))
        .catch(error => dispatch(fetchUsersError(error)))
}

export const POST_USER_REQUESTED = 'POST_USER_REQUESTED'
export const postUserRequested = () => ({
    type: POST_USER_REQUESTED
})

export const POST_USER_SUCCESS = 'POST_USER_SUCCESS'
export const postUserSuccess = response => ({
    type: POST_USER_SUCCESS,
    response
})

export const POST_USER_ERROR = 'POST_USER_ERROR'
export const postUserError = error => ({
    type: POST_USER_ERROR,
    error
})

export const fetchPostUser = user => dispatch => {
    return Api.post('users/', user)
        .then(response => dispatch(postUserSuccess(response)))
        .catch(error => dispatch(postUserError(error)))
}

export const CLEAR_USER_FORM = 'CLEAR_USER_FORM'
export const clearUserForm = () => ({
    type: CLEAR_USER_FORM
})