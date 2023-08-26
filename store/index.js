import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

import userModule from "./modules/userModule"


export default new Vuex.Store({
	//存储数据
	state: {
		
	},
	//获取数据
	getters: {
		
	},
	
	//设置数据-同步方法
	mutations: {
		
	},
	//设置数据-异步方法
	actions: {
		
	},
	
	//模块化
	modules: {
		user: userModule
	}
})