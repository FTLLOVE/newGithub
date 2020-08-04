/**
 * actionCreator Created by sprouts
 */
import actionTypes from './actionTypes'
import { func } from 'prop-types'

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