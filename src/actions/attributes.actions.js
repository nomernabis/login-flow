import { Api } from "../utils"

export const ATTRIBUTES_REQUESTED = 'ATTRIBUTES_REQUESTED'
export const attributesRequested = () => ({
    type: ATTRIBUTES_REQUESTED
})

export const ATTRIBUTES_SUCCESS = 'ATTRIBUTES_SUCCESS'
export const attributesSuccess = items => ({
    type: ATTRIBUTES_SUCCESS,
    items
})

export const ATTRIBUTES_ERROR = 'ATTRIBUTES_ERROR'
export const attributesError = error => ({
    type: ATTRIBUTES_ERROR,
    error
})

export const fetchAttributes = () => dispatch => {
    dispatch(attributesRequested())
    return Api.get('attributes/')
        .then(items => dispatch(attributesSuccess(items)))
        .catch(error => dispatch(attributesError(error)))
}

export const ATTRIBUTES_NEXT_STEP = 'NEXT_STEP'
export const attributesNextStep = () => ({
    type: ATTRIBUTES_NEXT_STEP
})

export const ATTRIBUTES_PREV_STEP = 'PREV_STEP'
export const attributesPrevStep = () => ({
    type: ATTRIBUTES_PREV_STEP
})