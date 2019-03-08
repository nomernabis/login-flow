import {
    SHOW_LOADER,
    HIDE_LOADER
} from "../actions"

export const loader = (state={isVisible: false}, action) => {
    switch(action.type){
        case SHOW_LOADER:
            return {
                ...state,
                isVisible: true
            }
        case HIDE_LOADER:
            return {
                ...state,
                isVisible: false
            }
        default:
            return state
    }
}
