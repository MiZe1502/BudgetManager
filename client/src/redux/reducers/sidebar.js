import { UPDATE_SIDEBAR_STATE, CLOSE_SIDEBAR, OPEN_SIDEBAR } from '../actionTypes'

const initialState = {
    open: false
}

export default function sidebarState(state=initialState, action) {
    switch (action.type) {
        case UPDATE_SIDEBAR_STATE:
            return {
                open: action.open
            }
        default:
            return state
    }
}