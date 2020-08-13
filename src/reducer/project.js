import actionTypes from '../actions/actionTypes'

const defaultState = {
	projectTabs: [],
	isLoading: false
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.GET_PROJECT_TREE:
			return {
				...state,
				projectTabs: action.data
			}
		case actionTypes.ARTICLE_LOADING:
			return {
				...state,
				isLoading: action.data
			}
		default:
			return state
	}
}