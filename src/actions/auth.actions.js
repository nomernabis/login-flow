import { Api } from "../utils"

export const LOGIN_REQUESTED = 'LOGIN_REQUESTED'
export const loginRequested = () => ({
    type: LOGIN_REQUESTED
})

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const loginSuccess = (token) => ({
    type: LOGIN_SUCCESS,
    token
})

export const LOGIN_ERROR = 'LOGIN_ERROR'
export const loginError = (error) => ({
    type: LOGIN_ERROR,
    error
})

export const fetchLogin = ({ username, password }) => dispatch => {
    dispatch(loginRequested())
    return Api.post('auth/', { username, password })
        .then(response => dispatch(loginSuccess(response.token)))
        .catch(error => dispatch(loginError(error)))
}

export const SET_TOKEN = 'SET_TOKEN'
export const setToken = (token) => ({
    type: SET_TOKEN,
    token
})
