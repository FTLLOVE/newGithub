/**
 * actionCreator Created by sprouts
 */
import actionTypes from './actionTypes'

export function getArticleList(data) {
	return {
		type: actionTypes.GET_ARTICLE_LIST,
		data
	}
}

export function getHomeBannerList(data) {
	return {
		type: actionTypes.GET_HOME_BANNER,
		data
	}
}

export function handleFailure() {
	return {
		type: actionTypes.HANDLE_FAILURE
	}
}

export function getArticleListMore(data) {
	return {
		type: actionTypes.GET_ARTICLE_LIST_MORE,
		data
	}
}
