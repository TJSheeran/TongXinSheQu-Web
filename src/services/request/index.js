import { BASE_URL, TIMEOUT } from "./config";

import axios from "axios";

class Request {
	constructor(baseURL, timeout) {
		this.instance = axios.create({
			baseURL,
			timeout,
		});
		// TODO:请求拦截器

		// 响应拦截器
		this.instance.interceptors.response.use(
			(res) => {
				//  请求成功判断
				if (res.data.code === 200) return res.data.data;
				else {
					console.log("request error");
					throw new Error(res.message);
				}
			},
			(err) => {
				//error todo
				console.log("network error");
				throw new Error(err);
			}
		);
	}

	request(config) {
		return this.instance.request(config);
	}

	get(config) {
		return this.request({
			...config,
			method: "get",
		});
	}

	post(config) {
		return this.request({
			...config,
			method: "post",
		});
	}
}

const request = new Request(BASE_URL, TIMEOUT);

export default request;
