import httpUtil from '../utils/HttpUtil';

export function getArticleList(page = 0) {
	return httpUtil.get(`article/list/${page}/json`);
}

export function getHomeBannerList() {
	return httpUtil.get('banner/json');
}

export function getSystemList() {
	return httpUtil.get("tree/json");
}

export function getSystemOfArticleList(page, cid) {
	return httpUtil.get(`article/list/${page}/json?cid=${cid}`)
}

