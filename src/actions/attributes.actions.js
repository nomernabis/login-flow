import { Api } from "../utils"

export const ATTRIBUTES_REQUESTED = 'ATTRIBUTES_REQUESTED'
export const attributesRequested = () => ({
    type: ATTRIBUTES_REQUESTED
})

export const ATTRIBUTES_SUCCESS = 'ATTRIBUTES_SUCCESS'
export const attributesSuccess = response => ({
    type: ATTRIBUTES_SUCCESS,
    response
})

export const ATTRIBUTES_ERROR = 'ATTRIBUTES_ERROR'
export const attributesError = error => ({
    type: ATTRIBUTES_ERROR,
    error
})

export const fetchAttributes = (limit, offset) => dispatch => {
    dispatch(attributesRequested())
    return Api.get('attributes/?limit='+limit+'&offset='+offset)
        .then(response => dispatch(attributesSuccess(response)))
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

export const ATTRIBUTES_ADD_VALUE = 'ATTRIBUTES_ADD_VALUE'
export const attributesAddValue = value => ({
    type: ATTRIBUTES_ADD_VALUE,
    value
})

export const ATTRIBUTES_FORM_SET_NAME = 'ATTRIBUTES_FORM_SET_NAME'
export const attributesFormSetName = name => ({
    type: ATTRIBUTES_FORM_SET_NAME,
    name,
})

export const ATTRIBUTES_FORM_SET_DISPLAYED_NAME = 'ATTRIBUTES_FORM_SET_DISPLAYED_NAME'
export const attributesFormSetDisplayedName = displayed_name => ({
    type: ATTRIBUTES_FORM_SET_DISPLAYED_NAME,
    displayed_name
})

export const ATTRIBUTE_CREATE_REQUESTED = 'ATTRIBUTE_CREATE_REQUESTED'
export const attributeCreateRequested = () => ({
    type: ATTRIBUTE_CREATE_REQUESTED
})

export const ATTRIBUTE_CREATE_SUCCESS = 'ATTRIBUTE_CREATE_SUCCESS'
export const attributeCreateSuccess = response => ({
    type: ATTRIBUTE_CREATE_SUCCESS,
    response
})

export const ATTRIBUTE_CREATE_ERROR = 'ATTRIBUTE_CREATE_ERROR'
export const attributeCreateError = error => ({
    type: ATTRIBUTE_CREATE_ERROR,
    error
})

export const fetchAttributeCreate = data => dispatch => {
    dispatch(attributeCreateRequested())
    return Api.post('attributes/', data)
        .then(response => dispatch(attributeCreateSuccess(response)))
        .catch(error => dispatch(attributeCreateError(error)))
}
