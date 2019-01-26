import {
    SHOW_MODAL,
    HIDE_MODAL
} from "../actions"


export const modal = (state={show: false}, action) => {
    switch(action.type){
        case SHOW_MODAL:
            return {...state, show: true, data: {...action.data}}
        case HIDE_MODAL:
            return {...state, show: false}
        default:
            return state
    }
}
