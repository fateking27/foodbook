<template>
	<view style="background-color: #e6e6e7;">
		<view class="head">
			<view class="back" @click="goto">
				<u-icon name="arrow-left" size="24px" color="#fff"></u-icon>
			</view>
			<view class="title">
				{{Detail[0].name}}
			</view>
			<view class="sf">
				<view class="s">
					<image @click="user_collect" v-show="isShow" src="../../static/聚收藏.png" mode=""></image>
					<image @click="user_collect" v-show="!isShow" src="../../static/聚收藏gift.png" mode=""></image>
				</view>
				<view class="f">
					<image src="../../static/分享.png" mode=""></image>
				</view>
			</view>
		</view>

		<view class="show_img">
			<image style="width: 100%;
			height: 200px;
			display: block;" :src="Detail[0].coverpic"></image>
		</view>

		<view style="width: 100%;background-color: #fff;padding: 15px 0;">
			<view class="to_vip">
				会员低至2元/月，免广告、看10000+名厨视频
			</view>

			<view class="title" style="text-align: center;
			padding-top: 20px;
			font-size: 20px;
			font-weight: bolder;">
				{{Detail[0].name}}
			</view>

			<view class="vip_use">
				<span>{{Detail[0].pageview}}浏览</span>
				<image src="http://localhost:4000/public/images/liulam @2x.png">
				</image>
				<span>{{Detail[0].collections}}收藏</span>
				<image src="http://localhost:4000/public/images/soucang@2x.png">
				</image>
			</view>
		</view>

		<view class="xd" style="background-color: #fff;">
			<view class="title" style="padding: 15px;">
				{{Detail[0].tips[0].tipname}}
			</view>
			<view class="text" style="padding: 0 15px;color: #999;">
				{{Detail[0].tips[0].tipdescribe[0]}}
			</view>
			<view class="title" style="padding: 15px;">
				养生必读
			</view>
			<view class="text" style="padding: 0 15px;color: #999;padding-bottom: 15px;">
				<span v-for="(item,index) in Detail[0].classtips" :key="index">{{item}}、</span>
			</view>
		</view>

		<view class="recipe" style="background-color: #fff;margin-top: 15px;">
			<view class="yl">
				<view class="time">
					<image src="http://localhost:4000/public/images/shijian@2x.png" mode=""></image>
					<span>{{Detail[0].needtime}}分钟以上</span>
				</view>
				<view class="level">
					<image src="http://localhost:4000/public/images/xing @2x.png" mode=""></image>
					<span>切墩（初级）</span>
				</view>
			</view>

			<view style="width: 90%;margin: 0 auto;padding-bottom: 15px;white-space: nowrap;">
				<span style="font-weight: bolder;">用料</span>
				<span style="color: #999;margin-left: 210px;">移出采购清单</span>
			</view>

			<view class="list_items">
				<view class="item" v-for="(item,index) in Detail[0].ingredient" :key="index">
					<span>{{item.name}}</span>
					<span style="padding-right: 100px;">{{item.number}}</span>
				</view>
			</view>

			<view class="steps" style="background-color: #fff;width: 90%;margin: 0 auto;margin-top: 10px;">
				<view class="step_" v-for="(item,index) in Detail[0].method" :key="index">
					<view class="title" style="padding: 15px 0;">
						步骤{{index + 1}}
					</view>
					<view class="img">
						<image style="width: 100%;" :src="item.img" mode=""></image>
					</view>
					<view class="text" style="color: #888;">
						{{item.describe}}
					</view>
				</view>
			</view>

			<view class="xts"
				style="width: 90%;margin: 25px auto;background-color: #eaeaea;border-radius: 10px;line-height: 22px;">
				<view class="title_" style="font-size: 17px;font-weight: bold;padding: 20px 0px 10px 15px;color: #777;">
					小贴士
				</view>
				<view class="title xz">
					<view style="font-size: 13px;padding: 0px 25px 20px 15px;color: #888;">
						{{Detail[0].tips[0].tipdescribe[0]}}
					</view>
				</view>
			</view>

			<h1 class="title" style="margin-left: 20px;margin-top: 20px;">
				相关菜谱
			</h1>
			<view class="container">
				<view class="item">
					<image src="http://localhost:4000/public/images/tupian@3x.png"></image>
					<view class="title" style="width: 100%;">
						<h3>大白兔奶茶</h3>
					</view>

					<view class="watch" style="display: flex;align-items: center;">
						<text style="font-size: 14px;color: #999;">66.3万</text>
						<image src="http://localhost:4000/public/images/liulam @2x.png"
							style="width: 20px;height: 15px;">
						</image>
					</view>
					<view class="collection" style="display: flex;align-items: center;">
						<text style="font-size: 14px;color: #999;">2495</text>
						<image src="http://localhost:4000/public/images/soucang@2x.png"
							style="width: 20px;height: 20px;">
						</image>
					</view>
				</view>
				<view class="item">
					<image src="http://localhost:4000/public/images/tupian@3x.png"></image>
					<view class="title" style="width: 100%;">
						<h3>大白兔奶茶</h3>
					</view>

					<view class="watch" style="display: flex;align-items: center;">
						<text style="font-size: 14px;color: #999;">66.3万</text>
						<image src="http://localhost:4000/public/images/liulam @2x.png"
							style="width: 20px;height: 15px;">
						</image>
					</view>
					<view class="collection" style="display: flex;align-items: center;">
						<text style="font-size: 14px;color: #999;">2495</text>
						<image src="http://localhost:4000/public/images/soucang@2x(4).png"
							style="width: 20px;height: 20px;">
						</image>
					</view>
				</view>
				<view class="item">
					<image src="http://localhost:4000/public/images/tupian@3x.png"></image>
					<view class="title" style="width: 100%;">
						<h3>大白兔奶茶</h3>
					</view>

					<view class="watch" style="display: flex;align-items: center;">
						<text style="font-size: 14px;color: #999;">66.3万</text>
						<image src="http://localhost:4000/public/images/liulam @2x.png"
							style="width: 20px;height: 15px;">
						</image>
					</view>
					<view class="collection" style="display: flex;align-items: center;">
						<text style="font-size: 14px;color: #999;">2495</text>
						<image src="http://localhost:4000/public/images/soucang@2x(4).png"
							style="width: 20px;height: 20px;">
						</image>
					</view>
				</view>
				<view class="item">
					<image src="http://localhost:4000/public/images/tupian@3x.png"></image>
					<view class="title" style="width: 100%;">
						<h3>大白兔奶茶</h3>
					</view>

					<view class="watch" style="display: flex;align-items: center;">
						<text style="font-size: 14px;color: #999;">66.3万</text>
						<image src="http://localhost:4000/public/images/liulam @2x.png"
							style="width: 20px;height: 15px;">
						</image>
					</view>
					<view class="collection" style="display: flex;align-items: center;">
						<text style="font-size: 14px;color: #999;">2495</text>
						<image src="http://localhost:4000/public/images/soucang@2x(4).png"
							style="width: 20px;height: 20px;">
						</image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import common from "@/utils/common.js"
	import {
		URLSearchParams
	} from "url";
	export default {
		data() {
			return {
				Detail: [],
				isShow: true,
				params: {}
			};
		},
		onLoad() {
			this.get_collect();
			this.menuDetail();
		},
		mounted() {},
		methods: {
			goto() {
				uni.navigateBack({})
			},
			menuDetail() {
				let url_id = getCurrentPages()[1].options
				// let url_id = urlString.split("=");
				// console.log(url_id)
				common.getMmenuDetail(url_id).then(res => {
					this.Detail = res.data.message
					// console.log(111, this.Detail)
				})
			},
			user_collect() {
				let loginUser = JSON.parse(uni.getStorageSync("LoginUser"));
				let menu_id = getCurrentPages()[1].options._id
				let user_id = loginUser._id

				this.params.user_id = user_id
				this.params.menu_id = menu_id

				common.getUserCollect(this.params).then(res => {
					console.log(res)
					// uni.setStorageSync("code", new Date().getTime())
				})
				this.isShow = !this.isShow
			},
			get_collect() {
				let user_id = JSON.parse(uni.getStorageSync("LoginUser"))._id
				// console.log(222, user_id)
				common.getUserGetCollect({
					_id: user_id
				}).then(res => {
					console.log(res)
				})
			}
		}
	}
</script>

<style lang="scss">
	.head {
		width: 100%;
		height: 72pt;
		color: #fff;
		background-image: url("http://localhost:4000/public/images/ditu@2x.png");
		display: flex;
		justify-content: space-between;
		position: relative;

		.title {
			padding-top: 30px;
			padding-left: 35px;
			// padding-left: 160px;
			font-size: 20px;
			// margin: 0 auto;
			// margin-left: 110px;
			// background-color: black;
			// position: absolute;
			// left: 40%;
		}

		.back {
			margin-top: 35px;
			margin-left: 20px;
			// position: absolute;
		}

		.sf {
			display: flex;
			margin-top: 70px;

			// background-color: aqua;
			image {
				width: 20px;
				height: 20px;
				padding-right: 20px;
			}

		}
	}

	.to_vip {
		width: 93%;
		height: 50px;
		margin: 0 auto;
		border-radius: 10px;
		background-color: #eec176;
		color: #fff;
		font-size: 15px;
		text-align: center;
		line-height: 50px;
	}

	.vip_use {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 20px;

		image {
			width: 17px;
			height: 13px;
			padding: 0 7px;
		}

		span {
			font-size: 13px;
			color: #999;
		}
	}

	.list_items {
		width: 92%;
		margin: 0 auto;
		border-bottom: 1px solid #bdbdbd;

		.item {
			width: 100%;
			display: flex;
			justify-content: space-between;
			margin: 0 auto;
			border-top: 1px solid #bdbdbd;
			padding: 10px 0;
		}
	}

	.yl {
		display: flex;
		// background-color: #eec176;
		justify-content: center;

		// height: 40px;
		image {
			width: 25px;
			height: 25px;
		}

		.time,
		.level {
			// height: 100%;
			// background-color: aqua;
			display: flex;
			align-items: center;
			padding: 20px 10px;
		}
	}

	.container {
		width: 90%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		border-radius: 10px;

		// margin-top: 10px;
		// background-color: #909399;
		.item {
			// background-color: aqua;
			width: 48.5%;
			height: 150pt;
			border-radius: 10px;
			margin-top: 10px;
			display: flex;
			flex-wrap: wrap;

			.watch {
				padding-right: 30px;
			}

			image {
				width: 100%;
				height: 60%;
			}
		}
	}
</style>