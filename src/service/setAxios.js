/**
 * 初始化axios
 */
import axios from 'axios'
const BASE_URL = "https://www.wanandroid.com/"
const headers = {
	Accept: 'application/json;charset=utf-8',
	'Content-Type': 'multipart/form-data;charset=utf-8'
}

function handleResponseLog(data) {
	//TODO 响应日志
	// console.warn("log: ", data)
}

export function setAxios() {
	axios.defaults.headers = headers
	axios.defaults.baseURL = BASE_URL
	axios.defaults.timeout = 10000

	axios.interceptors.request.use(

		async config => {
			if (config.method == 'post') {
				let data = new FormData()
				for (let i in config.data) {
					data.append(i, config.data[i])
				}
				config.data = data
			}
			//TODO 请求头需要添加token验证
			return config;
		},
		function (error) {
			return Promise.reject(error)
		}
	)

	axios.interceptors.response.use(
		response => {
			handleResponseLog(response.data)
			if (response.data.errorCode === 0) {
				return Promise.resolve(response.data)
			} else {
				return Promise.reject(response.data.errorMsg || "请求error")
			}
		},
		err => {
			if (err && err.response) {
				switch (err.response.status) {
					case 400:
						err.message = '请求错误(400)';
						break;
					case 401:
						err.message = '未授权，请重新登录(401)';
						break;
					case 403:
						err.message = '拒绝访问(403)';
						break;
					case 404:
						err.message = '请求出错(404)';
						break;
					case 408:
						err.message = '请求超时(408)';
						break;
					case 500:
						err.message = '服务器错误(500)';
						break;
					case 501:
						err.message = '服务未实现(501)';
						break;
					case 502:
						err.message = '网络错误(502)';
						break;
					case 503:
						err.message = '服务不可用(503)';
						break;
					case 504:
						err.message = '网络超时(504)';
						break;
					case 505:
						err.message = 'HTTP版本不受支持(505)';
						break;
					default:
						err.message = `连接出错(${err.response.status})!`;
				}
			} else {
				err.message = "server link error"
			}
			return Promise.reject(err.message)
		}
	)
}
