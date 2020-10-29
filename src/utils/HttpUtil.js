/**
 * http请求工具类
 */
import axios from 'axios';
import qs from 'querystring';


export default class httpUtil {

	/**
	 * GET请求
	 * @param url
	 * @param params
	 * @returns {Promise<R>}
	 */
	static get(url, params) {
		return new Promise(async (resolve, reject) => {
			try {
				let query = await qs.stringify(params);
				let res = null;
				if (!params) {
					res = await axios.get(url);
				} else {
					res = await axios.get(url + '?' + query);
				}
				resolve(res);
			} catch (error) {
				let errorMsg = `请求报错路径： ${url} \n 请求错误信息: ${error}`;
				reject(error);
			}
		});
	}

	/**
	 * POST请求
	 * @param url
	 * @param params
	 * @returns {Promise<R>}
	 */
	static post(url, params) {
		return new Promise(async (resolve, reject) => {
			try {
				let res = await axios.post(url, params);
				resolve(res);
			} catch (error) {
				let errorMsg = `请求报错路径：${url} \n 请求错误信息: ${error}`;
				reject(error);
			}
		});
	}
}
