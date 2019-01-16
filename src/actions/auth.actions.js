import fetch from "cross-fetch"

export const API_URL = "http://localhost:8000/"

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

export const fetchLogin = ({ username, password }) => {
    return dispatch => {
        dispatch(loginRequested())
        return fetch(API_URL + 'auth/', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password })
        }).then(response => response.json())
        .then(json => dispatch(loginSuccess(json.token)))
    }
}