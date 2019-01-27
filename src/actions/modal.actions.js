
export const SHOW_MODAL = 'SHOW_MODAL'
export const showModal = (data) => ({
    type: SHOW_MODAL,
    data
})


export const HIDE_MODAL = 'HIDE_MODAL'
export const hideModal = () => ({
    type: HIDE_MODAL
})

export const SHOW_INFO_MODAL = 'SHOW_INFO_MODAL'
export const showInfoModal = (data) => ({
    type: SHOW_INFO_MODAL,
    data
})
