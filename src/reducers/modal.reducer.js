import {
    SHOW_MODAL,
    HIDE_MODAL,
    SHOW_INFO_MODAL
} from "../actions"


export const modal = (state={show: false}, action) => {
    switch(action.type){
        case SHOW_MODAL:
            return {...state, show: true, data: {...action.data}, modal_type: action.modal_type, onClick: action.onClick}
        case HIDE_MODAL:
            return {...state, show: false}
        case SHOW_INFO_MODAL:
            return {...state, show: true, modal_type: 'INFO_MODAL', data: action.data}
        default:
            return state
    }
}
