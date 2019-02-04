import { Api } from "../utils"

export const PRODUCTS_REQUESTED = 'PRODUCTS_REQUESTED'
export const productsRequested = () => ({
    type: PRODUCTS_REQUESTED,
})

export const PRODUCTS_SUCCESS = 'PRODUCTS_SUCCESS'
export const productsSuccess = (items) => ({
    type: PRODUCTS_SUCCESS,
    items
})

export const PRODUCTS_ERROR = 'PRODUCTS_ERROR'
export const productsError = (error) => ({
    type: PRODUCTS_ERROR,
    error
})

export const fetchProducts = () => dispatch => {
    return Api.get('products/')
    .then(items => dispatch(productsSuccess(items)))
    .catch(error => dispatch(productsError(error)))
}

export const ADD_PRODUCT_NEXT_STEP = 'ADD_PRODUCT_NEXT_STEP'
export const nextStep = () => ({
    type: ADD_PRODUCT_NEXT_STEP
})

export const ADD_PRODUCT_PREV_STEP = 'ADD_PRODUCT_PREV_STEP'
export const prevStep = () => ({
    type: ADD_PRODUCT_PREV_STEP
})


export const ADD_PRODUCT_TOGGLE_CATEGORY = 'ADD_PRODUCT_TOGGLE_CATEGORY'
export const addProductToggleCategory = (category) => ({
    type: ADD_PRODUCT_TOGGLE_CATEGORY,
    category
})