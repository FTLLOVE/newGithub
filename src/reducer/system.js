import actionTypes from '../actions/actionTypes'

const defaultState = {
	isLoading: false,
	dataSource: [],
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.GET_SYSTEM_LIST:
			return {
				...state,
				isLoading: false,
				dataSource: action.data
			}
		case actionTypes.ARTICLE_LOADING:
			debugger
			return {
				...state,
				isLoading: action.data
			}
		default:
			return state;
	}
}

