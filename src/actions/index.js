/**
 * Created by sprouts
 */
import * as actionCreator from './actionCreator';
import store from '../store';
import * as API from '../api';
/**
 * 获取首页文章列表
 * @returns {Promise<void>}
 */
export async function fetchArticleList() {
	await API.getArticleList()
		.then(res => {
			const action = actionCreator.getArticleList(res.data);
			store.dispatch(action);
		})
		.catch(err => {
			store.dispatch(actionCreator.handleFailure());
		});
}

/**
 * 加载更多首页文章列表
 * @param page
 * @returns {Promise<void>}
 */
export async function fetchArticleListMore(page) {
	await API.getArticleList(page)
		.then(res => {
			const action = actionCreator.getArticleListMore(res.data);
			store.dispatch(action);
		})
		.catch(err => {
			store.dispatch(actionCreator.handleFailure());
		});
}

/**
 * 获取首页banner列表
 * @returns {Promise<void>}
 */
export async function fetchHomeBannerList() {
	await API.getHomeBannerList()
		.then(res => {
			const action = actionCreator.getHomeBannerList(res.data);
			store.dispatch(action);

		})
		.catch(err => {
			store.dispatch(actionCreator.handleFailure());
		});
}

/**
 * 获取系统列表
 */
export function fetchSystemList() {
	return new Promise(async (resolve, reject) => {
		await API.getSystemList()
			.then(res => {
				resolve(res.data)
			})
			.catch(err => {
				reject(err)
			})
	})
}

/**
 * 获取当前系统知识体系下面的文章列表
 * @param {*} page 
 * @param {*} cid 
 */
export function fetchSystemOfArticleList(cid, page = 0) {
	return new Promise(async (resolve, reject) => {
		await API.getSystemOfArticleList(page, cid)
			.then(res => {
				resolve(res.data)
			})
			.catch(err => {
				reject(err)
			})
	})
}

/**
 * 获取公众号列表
 */
export async function fetchWxArticleList() {
	await API.getWxArticleList()
		.then(res => {
			const action = actionCreator.getWxArticleList(res.data)
			store.dispatch(action)
		})
}

/**
 * 获取公众号文章列表
 * @param {*} authorId 
 * @param {*} page 
 */
export function fetchWxArticleListOfAuthor(authorId, page = 0) {
	return new Promise(async (resolve, reject) => {
		await API.getWxArticleListOfAuthor(page, authorId)
			.then(res => {
				resolve(res.data)
			})
			.catch(err => {
				reject(err)
			})
	})
}

/**
 * 处理Loading
 * @param {*} isLoading 
 */
export function fetchArticleLoading(isLoading) {
	const action = actionCreator.fetchArticleLoading(isLoading)
	store.dispatch(action)
}
