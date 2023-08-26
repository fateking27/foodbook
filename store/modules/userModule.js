import ecom from "@/utils/common.js"

let loginUser = uni.getStorageSync("LoginUser");
if (loginUser) {
	let now = new Date().getTime();
	let expriseTime = uni.getStorageSync("expriseTime");
	if (now - Number(expriseTime) > 1000 * 60 * 30) {
		loginUser = {
			nickName: '未登录',
			avatarUrl: ""
		}
	} else {
		loginUser = JSON.parse(loginUser);
	}
	
} else {
	loginUser = {
		nickName: '未登录',
		avatarUrl: ""
	}
}


export default {
	namespaced: true,
	//存储数据
	state: {
		loginUser: loginUser
	},
	//获取数据
	getters: {
		getNickName(state) {
			return state.loginUser.nickName;
		},
		getAvatar(state) {
			return state.loginUser.avatarUrl;
		},
		isLogin(state) {
			let expriseTime = uni.getStorageSync("expriseTime");
			if (now - Number(expriseTime) > 1000 * 60 * 30) {
				return false;
			} else {
				return true;
			}
		}
	},
	
	//设置数据-同步方法
	mutations: {
		SET_LOGINUSER(state, obj) {
			//保存登录用户和token到storage中
			uni.setStorageSync("LoginUser", JSON.stringify(obj))
			uni.setStorageSync("expriseTime", new Date().getTime())
			state.loginUser = obj;
		}
	},
	//设置数据-异步方法
	actions: {
		async wxlogin(context, wxuser) {
			//3、调用微信登录接口
			let authRes = await ecom.wxLogin({
				code: wxuser.code,
				appId: "wx32975f2f83d837f2",
				appSecret: "2211d7a6b078ee9dffca87f6d9efc09f"
			})
			
			//保存登录用户和token到storage中
			uni.setStorageSync("LoginUser", JSON.stringify({
				token: authRes.data.token,
				...authRes.data.userInfo
			}))
			
			//4、更新用户信息接口
			await ecom.auth({
				token: authRes.data.token,
				avatarUrl: wxuser.avatarUrl,
				nickName: wxuser.nickName,
				gender: wxuser.gender,
				province: wxuser.province,
			})
			
			//5、获取用户信息接口
			let loginUserRes = await ecom.getUserInfo({
				token: authRes.data.token
			});
			
			context.commit("SET_LOGINUSER", {
				token: authRes.data.token,
				...loginUserRes[0]
			})
		}
	}
}