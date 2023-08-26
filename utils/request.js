const BASE_URL = "http://localhost:4000";

export default {
	post(url, params) {
		uni.showLoading({
			title: '请求中'
		})

		let promise = new Promise((resolve, reject) => {
			let token = "";
			let loginUser = uni.getStorageSync("LoginUser");
			if (loginUser) {
				loginUser = JSON.parse(loginUser);
				token = loginUser.token;
			}
			console.log(777, url, loginUser)
			uni.request({
				url: BASE_URL + url, //仅为示例，并非真实接口地址。
				method: "POST",
				data: params,
				header: {
					'Content-Type': 'application/json', //自定义请求头信息
					"Authorization": token
				},
				success: (res) => {
					console.log(res, 444);
					if (200 == res.statusCode) {
						resolve(res)
					} else {
						reject('您的网络出问题了')
					}
				},
				fail: (err) => {
					reject('请求出错',err)
				},
				complete: () => {
					uni.hideLoading()
				}
			});
		});
		return promise;

	},
	get(url, params) {
		let promise = new Promise((resolve, reject) => {
			let token = "";
			let loginUser = uni.getStorageSync("LoginUser");
			if (loginUser) {
				loginUser = JSON.parse(loginUser);
				token = loginUser.token;
			}
			console.log(666,url)
			uni.request({
				url: BASE_URL + url, //仅为示例，并非真实接口地址。
				method: "GET",
				data: params,
				header: {
					'Content-Type': 'application/json', //自定义请求头信息
					"Authorization": token
				},
				success: (res) => {
					// console.log(555,res)
					if (200 == res.statusCode) {
						resolve(res)
					} else {
						reject('您的网络出问题了')
					}
				},
				fail: () => {
					reject('请求出错')
				},
				complete: () => {

				}
			});
		});
		return promise;
	}
}