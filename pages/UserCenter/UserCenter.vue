<template>
	<view class="content">
		<view class="" style="background-color: #fff;width: 100%;">
			<!-- <view class="user_head" @wxlogin="login3">
				<view class="head_img">
					<image src="http://localhost:4000/public/images/zu428@2x.png" mode=""></image>
				</view>
				<view class="user_name">
					<text>立即登录</text> <br>
					<text style="color: darkgray;">登陆后可收藏喜欢的菜谱</text>
				</view>
			</view> -->
			<userinfo @wxlogin="login3"></userinfo>
			<view class="to_vip" @click="becomeVipHandler">
				<span
					style="font-size: 13px;padding-left: 50px;padding-top: 10px;font-weight: bolder;color: #d4b583;">升级为VIP</span>
				<span
					style="font-size: 16px;padding-right: 30px;padding-top: 10px;font-weight: bolde;color: #d4b583;">〉</span>
			</view>
		</view>

		<view class="my_pr">
			<view class="pr_">
				<view class="pr">
					<image src="http://localhost:4000/public/images/soucang@2x.png" mode=""></image>
					<view class="">
						我的收藏
					</view>
				</view>
				<view class="pr">
					<image src="http://localhost:4000/public/images/mengbanzu 281@2x.png" mode=""></image>
					<view class="">
						浏览记录
					</view>
				</view>
				<view class="pr">
					<image src="http://localhost:4000/public/images/mengbanzu282@2x.png" mode=""></image>
					<view style="padding: 0 10px;" class="">
						点赞
					</view>
				</view>
			</view>
		</view>

		<view class="foodbooks">
			<u-tabs :list="mycollect" :activeStyle="{
			color: '#f6be7a',
            fontWeight: 'bold',
            transform: 'scale(1.05)'}" lineWidth="0" @click="menuDetail"></u-tabs>

			<view class="show_more" :class="[isShow ? 'show-more-click' : '']">

				<view class="list_items">
					<view class="item" v-for="(item,index) in menu.ingredient" :key="index"
						v-if="isShowText || index < max">
						<span>{{item.name}}</span>
						<span style="padding-right: 100px;">{{item.number}}</span>
					</view>
				</view>

			</view>

			<view @click="showMore">
				<view class=""
					style="text-align: center;padding-top: 10px;font-size: 13px;color: chocolate;padding-bottom: 10px;">
					{{isShow ? '🔻收起':'🔺展开全部'}}
				</view>
			</view>
		</view>

		<view class="recommend">
			<h1 class="title" style="background-color: #fff;padding-left: 10px;padding-top: 5px;">
				我的菜谱
			</h1>
			<scroll-view scroll-x="true" class="_abbr">

				<view class="item" v-for="item in mycollect" :key="item._id">
					<image style="border-radius: 10px;" :src="item.coverpic"></image>
					<view class="title" style="width: 100%;">
						<h3 style="">{{item.name}}</h3>
					</view>
				</view>
			</scroll-view>
		</view>

		<view class="group" style="">
			<u-cell-group customStyle="background-color: #fff;">
				<u-cell icon="thumb-up-fill" title="去App Store给菜谱大全评分" :isLink="true" border="true"></u-cell>
				<u-cell icon="chat-fill" title="问题反馈" :isLink="true"></u-cell>
			</u-cell-group>
		</view>

	</view>
</template>

<script>
	import common from "@/utils/common.js"
	import {
		createNamespacedHelpers
	} from "vuex";
	const {
		mapActions
	} = createNamespacedHelpers("user")
	export default {
		data() {
			return {
				isShow: false,
				isClick: false,
				isShowText: false,
				max: 5,
				mycollect: [],
				menu: []
			}
		},
		onLoad() {
			this.get_collect(),
				this.menuDetail
		},
		methods: {
			showMore() {
				this.isShow = !this.isShow
				this.isClick = !this.isClick

				// 先展开500毫秒后再显示文字,收缩200毫秒后再隐藏文字
				if (this.isShowText) {
					setTimeout(() => {
						this.isShowText = !this.isShowText
					}, 200)
				} else {
					setTimeout(() => {
						this.isShowText = !this.isShowText
					}, 200)
				}

			},
			...mapActions(["wxlogin"]),
			login3() {
				//1、获取微信用户信息
				let userPromise = new Promise((resolve, reject) => {
					uni.getUserProfile({
						desc: "登录",
						success: (userRes) => {
							resolve(userRes)
						}
					})
				})


				//2、获取微信登录用的code
				let codePromise = new Promise((resolve, reject) => {
					uni.login({
						success: (codeRes) => {
							resolve(codeRes)
						}
					})
				})


				userPromise.then(userRes => {
					codePromise.then(async codeRes => {

						this.wxlogin({
							code: codeRes.code,
							...userRes.userInfo
						})
					})
				})

			},
			get_collect() {
				let user_id = JSON.parse(uni.getStorageSync("LoginUser"))._id
				// console.log(222, user_id)
				common.getUserGetCollect({
					_id: user_id
				}).then(res => {

					this.mycollect = res.data.mycollect
					console.log(this.mycollect)
				})
			},
			menuDetail(item) {
				this.menu = item
				// console.log(this.menu)
			},
			becomeVipHandler() {
				uni.navigateTo({
					url: '/pages/buyVIP/buyVIP'
				})
			},
		},
	}
</script>

<style lang="scss">
	.content {
		background-color: #e8e8e8;

		.user_head {
			width: 90%;
			margin: 0 auto;
			margin-top: 10px;
			display: flex;
			align-items: flex-end;


			.head_img {
				background-color: #fff;

				image {
					width: 80px;
					height: 80px;
				}
			}

			.user_name {
				padding-left: 20px;
				padding-bottom: 15px;
			}
		}

		.to_vip {
			width: 95%;
			height: 70px;
			// background-color: chocolate;
			margin: 0 auto;
			margin-top: 20px;
			background-image: url("http://localhost:4000/public/images/mengbanzu87@2x.png");
			background-repeat: no-repeat;
			background-size: 100% 100%;
			display: flex;
			justify-content: space-between;
		}

		.my_pr {
			width: 100%;
			height: 95px;
			background-color: #e8e8e8;
			display: flex;
			align-items: center;

			.pr_ {
				width: 100%;
				height: 70px;
				background-color: #fff;
				display: flex;
				justify-content: space-around;

				image {
					width: 30px;
					height: 30px;
					display: block;
					margin-top: 5px;
				}

				.pr {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-evenly;
					// align-items: center;
					// background-color: aqua;
					width: 65px;

				}
			}
		}

		.foodbooks {
			width: 100%;
			background-color: #fff;

			.show_more {
				width: 100%;
				// height: 2px;
				// // background-color: #4CD964;
				// transition: height 1s;
				// -moz-transition: height 1s;
				// /* Firefox 4 */
				// -webkit-transition: height 1s;
				// /* Safari and Chrome */
				// -o-transition: height 1s;
				// /* Opera */
			}

			.show-more-click {
				height: 100%;
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
		}

		.recommend {
			width: 100%;
			margin: 0 auto;
			margin-top: 10px;

			// margin-left: 10px;
			// background-color: #e8e8e8;
			// padding-top: 15px;
			._abbr {
				width: 100%;
				// display: flex;
				white-space: nowrap;
				background-color: #fff;
				padding-bottom: 10px;

				.item {
					// background-color: aqua;
					width: 40%;
					height: 110pt;
					border-radius: 10px;
					margin-top: 10px;
					// display: flex;
					// flex-wrap: wrap;
					padding-right: 0px;
					display: inline-block;
					text-align: center;

					image {
						width: 85%;
						height: 95%;
					}
				}
			}
		}

		.group {
			margin-top: 10px;
			padding-bottom: 10px;
		}
	}
</style>