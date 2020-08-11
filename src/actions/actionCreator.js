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

export function getSystemList(data) {
	return {
		type: actionTypes.GET_SYSTEM_LIST,
		data
	}
}

export function getSystemOfArticleList(data) {
	return {
		type: actionTypes.GET_SYSTEM_OF_ARTICLE_LIST,
		data
	}
}

export function getSystemOfArticleListMore(data) {
	return {
		type: actionTypes.GET_SYSTEM_OF_ARTICLE_LIST_MORE,
		data
	}
}

export function getWxArticleList(data) {
	return {
		type: actionTypes.GET_WX_ARTICLE_LIST,
		data
	}
}

export function fetchArticleLoading(data) {
	return {
		type: actionTypes.ARTICLE_LOADING,
		data
	}
}

export function fetchProjectTree(data) {
	return {
		type: actionTypes.GET_PROJECT_TREE,
		data
	}
}

export function fetchGuideTree(data) {
	return {
		type: actionTypes.GET_GUIDE_TREE,
		data
	}
}

export function updateSelectIndex(data) {
	return {
		type: actionTypes.UPDATE_SELECT_INDEX,
		data
	}
}

export function getHotKeyJson(data) {
	return {
		type: actionTypes.GET_HOT_KEY,
		data
	}
}