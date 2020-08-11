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

export function getWxArticleList() {
	return httpUtil.get(`wxarticle/chapters/json`)
}

export function getWxArticleListOfAuthor(page = 0, authorId) {
	return httpUtil.get(`wxarticle/list/${authorId}/${page}/json`)
}

export function getProjectTree() {
	return httpUtil.get(`project/tree/json`)
}

export function getGuideTree() {
	return httpUtil.get(`navi/json`)
}

export function hotkeyJson() {
	return httpUtil.get("hotkey/json")
}

export function articleQuery(k, page = 0) {
	return httpUtil.post(`article/query/${page}/json`, { k })
}