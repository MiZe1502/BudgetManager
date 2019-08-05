import { UPDATE_CURRENT_SECTION } from '../actionTypes'

export function updateCurrentSection(section) {
	return {
		type: UPDATE_CURRENT_SECTION,
		current: section
	}
}