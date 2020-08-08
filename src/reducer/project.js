import actionTypes from '../actions/actionTypes'

const defaultState = {
	projectTabs: []
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.GET_PROJECT_TREE:
			return {
				...state,
				projectTabs: action.data
			}
		default:
			return state
	}
}