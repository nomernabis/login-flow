import {
    SHOW_MODAL,
    HIDE_MODAL,
} from "../actions"


export const modal = (state={show: false}, action) => {
    switch(action.type){
        case SHOW_MODAL:
            return {...state, show: true, modalType: action.modalType, text: action.text, onYes: action.onYes, onNo: action.onNo}
        case HIDE_MODAL:
            return {...state, show: false, text: ''}
        default:
            return state
    }
}
