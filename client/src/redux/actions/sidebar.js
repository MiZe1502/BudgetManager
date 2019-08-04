import { UPDATE_SIDEBAR_STATE } from '../actionTypes'

export function updateSidebarState(open) {
    return {
        type: UPDATE_SIDEBAR_STATE,
        open
    }
}
