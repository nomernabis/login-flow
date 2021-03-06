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

export const fetchProducts = (limit, offset) => dispatch => {
    return Api.get('products/?limit=' + limit + '&offset='+offset)
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

export const ADD_PRODUCT_TO_STEP = 'ADD_PRODUCT_TO_STEP'
export const addProductToStep = step => ({
    type: ADD_PRODUCT_TO_STEP,
    step
})


export const ADD_PRODUCT_TOGGLE_CATEGORY = 'ADD_PRODUCT_TOGGLE_CATEGORY'
export const addProductToggleCategory = (category) => ({
    type: ADD_PRODUCT_TOGGLE_CATEGORY,
    category
})

export const ADD_PRODUCT_SELECT_ATTRIBUTE = 'ADD_PRODUCT_SELECT_ATTRIBUTE'
export const addProductSelectAttribute = attribute => ({
    type: ADD_PRODUCT_SELECT_ATTRIBUTE,
    attribute
})

export const ADD_PRODUCT_SELECT_ATTRIBUTE_VALUE = 'ADD_PRODUCT_SELECT_ATTRIBUTE_VALUE'
export const addProductSelectAttributeValue = (value, attributeId) => ({
    type: ADD_PRODUCT_SELECT_ATTRIBUTE_VALUE,
    value,
    attributeId
})

export const ADD_PRODUCT_SET_IMAGES = 'ADD_PRODUCT_SET_IMAGES'
export const addProductSetImages = images => ({
    type: ADD_PRODUCT_SET_IMAGES,
    images
})

export const ADD_PRODUCT_ADD_IMAGE = 'ADD_PRODUCT_ADD_IMAGE'
export const addProductAddImage = image => ({
    type: ADD_PRODUCT_ADD_IMAGE,
    image
})

export const ADD_PRODUCT_DELETE_IMAGE = 'ADD_PRODUCT_DELETE_IMAGE'
export const addProductDeleteImage = index => ({
    type: ADD_PRODUCT_DELETE_IMAGE,
    index
})

export const ADD_PRODUCT_SWAP_IMAGES = 'ADD_PRODUCT_SWAP_IMAGES'
export const addProductSwapImages = (from, to) => ({
    type: ADD_PRODUCT_SWAP_IMAGES,
    from,
    to
})

export const ADD_PRODUCT_NAME_CHANGED = 'ADD_PRODUCT_NAME_CHANGED'
export const ADD_PRODUCT_QUANTITY_CHANGED = 'ADD_PRODUCT_QUANTITY_CHANGED'
export const ADD_PRODUCT_DESCRIPTION_CHANGED = 'ADD_PRODUCT_DESCRIPTION_CHANGED'

export const addProductNameChanged = name => ({
    type: ADD_PRODUCT_NAME_CHANGED,
    name
})

export const addProductDescriptionChanged = description => ({
    type: ADD_PRODUCT_DESCRIPTION_CHANGED,
    description
})

export const addProductQuantityChanged = quantity => ({
    type: ADD_PRODUCT_QUANTITY_CHANGED,
    quantity
})

export const ADD_PRODUCT_SET_ERROR = 'ADD_PRODUCT_SET_ERROR'
export const addProductSetError = error => ({
    type: ADD_PRODUCT_SET_ERROR,
    error
})

export const ADD_PRODUCT_REQUESTED = 'ADD_PRODUCT_REQUESTED'
export const addProductRequested = () => ({
    type: ADD_PRODUCT_REQUESTED,
})

export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS'
export const addProductSuccess = response => ({
    type: ADD_PRODUCT_SUCCESS,
    response
})

export const ADD_PRODUCT_ERROR = 'ADD_PRODUCT_ERROR'
export const addProductError = error => ({
    type: ADD_PRODUCT_ERROR,
    error
})

export const ADD_PRODUCT_CLEAR_ERROR = 'ADD_PRODUCT_CLEAR_ERROR'
export const addProductClearError = errorName => ({
    type: ADD_PRODUCT_CLEAR_ERROR,
    errorName
})

export const fetchAddProduct = data => dispatch => {
    dispatch(addProductRequested())
    return Api.post('products/', data, true, true)
        .then(response => dispatch(addProductSuccess(response)))
        .catch(error => dispatch(addProductSetError(error)))
}

export const CLEAR_PRODUCT_DATA = 'CLEAR_PRODUCT_DATA'
export const clearProductData = () => ({
    type: CLEAR_PRODUCT_DATA
})