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
		const navigation = NavigationUtil.navigation
		console.log(navigation)
		if (!navigation) {
			return null;
		}
		navigation.navigate(
			page,
			{
				...params
			}
		)
	}

	/**
	 * 返回上一页
	 * @param {*} navigation 
	 */
	static goBack(navigation) {

	}
}