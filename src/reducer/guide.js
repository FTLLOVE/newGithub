import actionTypes from '../actions/actionTypes'
const defaultState = {
	guideData: [],
	selectIndex: 0,
	isLoading: false
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.GET_GUIDE_TREE:
			return {
				...state,
				guideData: action.data
			}
		case actionTypes.UPDATE_SELECT_INDEX:
			return {
				...state,
				selectIndex: action.data
			}
		case actionTypes.ARTICLE_LOADING:
			return {
				...state,
				isLoading: action.data
			}
		default:
			return state;
	}
}