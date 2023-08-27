import request from './request.js'

export default {
	getAllMtSwiper(params) {
		return request.get("/home/swiperdata", params);
	},
	getAllCatitems: (params) => request.get("/home/catitems", params),
	getAllFloorsdata: (params) => request.get("/home/floorsdata", params),
	getAllRecommend: (params) => request.get("/home/recommend", params),
	getAllGategories: (params) => request.get("/categories", params),
	getAllMemberRecommend: (params) => request.get("/search/memberRecommend", params),
	getMmenuDetail: (params) => request.post("/search/menuDetail", params),
	getUserCollect: (params) => request.post("/user/collect", params),
	getUserGetCollect: (params) => request.get("/user/getcollect", params),
	getsearchMenu: (params) => request.post("/search/searchMenu", params),
	
	wxLogin: (params) => request.post("/user/wxLogin", params),
	getUserInfo: (params) => request.get("/user/getUserInfo", params),
	auth: (params) => request.post("/user/auth", params),
}