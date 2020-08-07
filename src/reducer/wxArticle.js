import actionTypes from '../actions/actionTypes'

const defaultState = {
	articleTabs: [],
	isLoading: false
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.GET_WX_ARTICLE_LIST:
			return {
				...state,
				articleTabs: action.data
			}
		case actionTypes.ARTICLE_LOADING:
			return {
				...state,
				isLoading: action.data
			}
	}
	return state
}