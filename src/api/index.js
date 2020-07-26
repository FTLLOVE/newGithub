import httpUtil from '../utils/HttpUtil';

export function getArticleList(page = 0) {
	return httpUtil.get(`article/list/${page}/json`);
}

export function getHomeBannerList() {
	return httpUtil.get('banner/json');
}
