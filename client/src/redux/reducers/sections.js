import { UPDATE_CURRENT_SECTION } from '../actionTypes'

export default function updateCurrentSection(state = 'Покупки', action) {
	switch (action.type) {
		case UPDATE_CURRENT_SECTION:
			return action.current
		default:
			return state
	}
}