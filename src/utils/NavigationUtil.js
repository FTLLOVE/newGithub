/**
 * 路由
 */
export default class NavigationUtil {

	/**
	 * 跳转到指定页面
	 * @param {*} page
	 * @param {*} params
	 */
	static goPage(page, params) {
		const navigation = NavigationUtil.navigation;
		if (!navigation) {
			return null;
		}
		navigation.navigate(
			page,
			{
				...params,
			},
		);
	}

	/**
	 *  返回上一页
	 */
	static goBack() {
		const navigation = NavigationUtil.navigation;
		navigation.pop();
	}
}
