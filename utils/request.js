import {
	resolve
} from "url";

const base_url = "http://localhost:4000";

export default {
	post(url, params) {
		let promise = new Promise((resolve, reject) => {
			uni.request({
				url: base_url + url,
				method: "POST",
				data: params,
				header: {
					'Content-Type': 'application/json'
				},
				success: (res) => {
					if (200 == res.data.meta.status) {
						resolve(res)
					} else {
						reject("您的网络出问题了")
					}
				},
				fail: () => {
					reject('请求出错')
				},
				complete: () => {

				}
			})
		})
		return promise;
	},
	get(url, params) {
		let promise = new Promise((resolve, reject) => {
			uni.request({
				url: base_url + url,
				method: "GET",
				data: params,
				header: {
					'Content-Type': 'application/json'
				},
				success: (res) => {
					if (200 == res.data.meta.status) {
						resolve(res)
					} else {
						reject("您的网络出问题了")
					}
				},
				fail: () => {
					reject('请求出错')
				},
				complete: () => {

				}
			})
		})
		return promise;
	},
}