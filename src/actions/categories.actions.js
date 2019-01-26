import { Api } from "../utils"


export const CATEGORIES_REQUESTED = 'CATEGORIES_REQUESTED'
export const categoriesRequested = () => ({
    type: CATEGORIES_REQUESTED,
})

export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS'
export const categoriesSuccess = (items) => ({
    type: CATEGORIES_SUCCESS,
    items
})

export const CATEGORIES_ERROR = 'CATEGORIES_ERROR'
export const categoriesError = (error) => ({
    type: CATEGORIES_ERROR,
    error
})

export const fetchCategories = () => dispatch => {
    dispatch(categoriesRequested())
    return Api.get('categories/')
        .then(data => dispatch(categoriesSuccess(data)))
        .catch(error => dispatch(categoriesError(error)))
}

