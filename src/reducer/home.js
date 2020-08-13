import actionTypes from '../actions/actionTypes'

const defaultState = {
	articleList: [], // 首页文章列表
	homeBannerList: [], // 首页banner列表
	page: 0, // 页码
	isFullData: false, // 是否加载全部数据
	isRenderFooter: false, // 是否渲染底部组件
	isLoading: false
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.GET_HOME_BANNER:
			return {
				...state,
				homeBannerList: action.data
			}
		case actionTypes.GET_ARTICLE_LIST:
			return {
				...state,
				articleList: action.data.datas,
				page: 1,
				isFullData: action.data.curPage === action.data.pageCount, // 只有当前页码=总页数，显示加载全部
				isRenderFooter: !!action.data.total, // 只有total=0的时候不渲染底部
			}
		case actionTypes.GET_ARTICLE_LIST_MORE:
			let newArticleList = state.articleList.concat(action.data.datas);
			return {
				...state,
				page: ++state.page,
				articleList: newArticleList,
				isFullData: action.data.datas.length === 0,
				isRenderFooter: !!action.data.total, // 只有total=0的时候不渲染底部
			}
		case actionTypes.ARTICLE_LOADING:
			return {
				...state,
				isLoading: action.data
			}
		case actionTypes.HANDLE_FAILURE:
			return state
		default:
			return state
	}
}
