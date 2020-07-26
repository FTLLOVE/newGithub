import actionTypes from '../actions/actionTypes'

const defaultState = {
	articleList: [], // 首页文章列表
	homeBannerList: [], // 首页banner列表
	page: 0, // 页码
	isFullData: false, // 是否加载全部数据
	isRenderFooter: false, // 是否渲染底部组件
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.GET_ARTICLE_LIST:
			return {
				...state,
				articleList: action.data.datas,
				page: 1,
				isFullData: action.data.curPage === action.data.pageCount
			}
		case actionTypes.GET_HOME_BANNER:
			return {
				...state,
				homeBannerList: action.data
			}
		case actionTypes.GET_ARTICLE_LIST_MORE:
			let newArticleList = state.articleList.concat(action.data.datas);
			return {
				...state,
				page: ++state.page,
				articleList: newArticleList,
				isFullData: action.data.datas.length === 0
			}
		case actionTypes.HANDLE_FAILURE:
			return state
		default:
			return state
	}
}
