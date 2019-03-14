export const SHOW_MODAL = 'SHOW_MODAL'
export const showModal = (modalType, text, onYes, onNo) => ({
    type: SHOW_MODAL,
    modalType,
    text,
    onYes,
    onNo
})


export const HIDE_MODAL = 'HIDE_MODAL'
export const hideModal = () => ({
    type: HIDE_MODAL
})
