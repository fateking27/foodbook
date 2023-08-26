import ecom from "@/apis/ecom";
export default {
	//子仓库
	namespaced: true,
	
	//1、保存数据用的
	state: {
		//购物车中的商品数据
		listGoods: []
	},
	
	//2、获取状态机数据用的
	getters: {
		getListGoods(state) {
			return state.listGoods;
		}
	},
	
	//3、同步的方法设置状态机中的数据
	mutations: {
		ADD_CART(state, objGoods) {
			let {listGoods} = state;
			
			//先检查购物车中是否有该商品
			let existGoods = listGoods.find(item => item.id == objGoods.id);
			if (existGoods) {
				existGoods.count++;
			} else {
				//不存在
				listGoods.push(objGoods);
			}
		},
		DEL_CART(state, id) {
			let {listGoods} = state;
			
			//先检查购物车中是否有该商品
			let existIndex = listGoods.findIndex(item => item.id == id);
			if (-1 != existIndex) {
				//找到商品
				listGoods.splice(existIndex, 1);
			}
		},
		CHANGE_NUM(state, op) {
			let {id, num} = op;
			
			let {listGoods} = state;
			
			let existGoods = listGoods.find(item => item.id == id);
			if (existGoods.count + num <= 0) {
				return;
			}
			
			if (existGoods) {
				
				existGoods.count = existGoods.count + num;
			}
		}
	},
	
	//4、异步的方法设置状态机中的数据
	actions: {
		addGoods(context, id) {
			ecom.getEcomProductById({
				id: id
			}).then(res => {
				let goods = res.data;
				goods.count = 1;
				context.commit("ADD_CART", goods);
			})
		}
	}
}