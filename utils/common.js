import request from './request.js'

export default {
	getAllMtSwiper(params) {
		return request.get("/home/swiperdata", params);
	},
	getAllCatitems: (params) => request.get("/home/catitems", params),
	getAllFloorsdata: (params) => request.get("/home/floorsdata", params),
	getAllRecommend: (params) => request.get("/home/recommend", params),
}