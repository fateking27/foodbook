<template>
	<view class="content">
		<view class="head">
			<view class="title">
				香哈菜谱大全
			</view>
			<view class="title_">
				小白学做菜必备烹饪助手
			</view>
			<view class="search">
				<!-- <u-search inputAlign="center" placeholder="搜你想搜的~" :showAction="false" shape="round" height="35"
						bgColor="#fff"></u-search> -->
				<button type="default" @click="goto"
					style="background-color: #fff;width: 100%;border-radius: 25px;font-size: 16px;color: #999;">
					<icon type="search" color="#df9040" size="15px"></icon>
					<span style="padding-left: 7px;">搜你想搜的~</span>
				</button>
			</view>
		</view>

		<swiper class="swiper" circular indicator-dots="true" autoplay="true" :interval="2000" :duration="500">
			<swiper-item style="border-radius: 10px;" v-for=" item in swiper_list" :key="item.id">
				<image style="border-radius: 10px;" :src="item.image_src"></image>
			</swiper-item>
		</swiper>

		<view class="grid" style="margin-top: 15px;">
			<u-grid :border="false" col="5">
				<u-grid-item v-for="(listItem,listIndex) in catitems" :key="listItem.id">
					<img style="width: 30px;height: 30px;" :customStyle="{paddingTop:20+'rpx'}"
						:src="listItem.image_src" />
					<text class="grid-text">{{listItem.name}}</text>
				</u-grid-item>
			</u-grid>
		</view>

		<view class="show_img">
			<view class="bg_img" style="width: 48.5%;border-radius: 10px;">
				<view class="title" style="">
					{{floorsdata[0].floor_title}}
				</view>
				<swiper class="" style="width: 100%;height: 100%;" circular indicator-dots="true" autoplay="true"
					:interval="2500" :duration="800">
					<swiper-item style="border-radius: 10px;" v-for=" (item,index) in floorsdata[0].floor_imgs"
						:key="index">
						<img :src="item" alt="" style="width: 100%;height: 100%;">
					</swiper-item>
				</swiper>
			</view>
			<view class="img_siz" style="width: 48.5%;border-radius: 10px;display: flex;flex-wrap: wrap;">
				<view class="img s1" style="width: 100%;height: 49%;border-radius: 10px;">
					<view class="title" style="">
						{{floorsdata[1].floor_title}}
					</view>
					<img :src="floorsdata[1].floor_imgs[0]" alt="" style="width: 100%;height: 100%;">
				</view>
				<view class="img s2" style="width: 100%;height: 49%;border-radius: 10px;margin-bottom: -5px;">
					<view class="title" style="">
						{{floorsdata[2].floor_title}}
					</view>
					<img :src="floorsdata[2].floor_imgs[0]" alt="" style="width: 100%;height: 100%;">
				</view>
			</view>
		</view>

		<view class="container">
			<view class="item" v-for="(item,index) in recommend" :key="item._id" @click="to_food">
				<image :src="item.coverpic" style="border-radius: 10px;"></image>
				<view class="title" style="width: 100%;">
					<h3>{{item.name}}</h3>
				</view>
				<view class="watch" style="display: flex;align-items: center;">
					<text style="font-size: 14px;color: #999;">{{item.pageview}}</text>
					<image src="http://localhost:4000/public/images/liulam @2x.png"
						style="width: 20px;height: 15px;padding: 0 5px;">
					</image>
				</view>
				<view class="collection" style="display: flex;align-items: center;">
					<text style="font-size: 14px;color: #999;">{{item.collections}}</text>
					<image src="http://localhost:4000/public/images/soucang@2x.png"
						style="width: 20px;height: 20px;padding: 0 5px;">
					</image>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import common from "@/utils/common.js"
	export default {
		data() {
			return {
				swiper_list: [],
				catitems: [],
				floorsdata: [],
				recommend: []
			}
		},
		onLoad() {
			this.init()
		},
		methods: {
			init() {
				common.getAllMtSwiper({}).then((res) => {
						this.swiper_list = res.data.message
						// console.log(res)
					}),
					common.getAllCatitems({}).then((res) => {
						// console.log(res)
						this.catitems = res.data.message
					}),
					common.getAllFloorsdata({}).then((res) => {
						this.floorsdata = res.data.message
						// console.log(this.floorsdata)
					}),
					common.getAllRecommend({}).then((res) => {
						console.log(res)
						this.recommend = res.data.message
					})
			},
			goto() {
				uni.navigateTo({
					url: "/pages/searchPage/searchPage"
				})
			},
			to_food(){
				uni.navigateTo({
					url:"/pages/foodPage/foodPage"
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		.head {
			width: 100%;
			height: 110pt;
			color: #fff;
			background-image: url("http://localhost:4000/public/images/ditu@2x.png");
			background-color: #fff;
			background-repeat: no-repeat;
			background-size: 100% 80%;
			position: fixed;
			z-index: 999;
			top: 0;

			.title {
				font-size: 24px;
				font-weight: bold;
				padding-top: 25pt;
				padding-left: 15pt;
			}

			.title_ {
				font-size: 13px;
				padding-top: 7pt;
				padding-left: 15pt;

			}

			.search {
				width: 343px;
				margin: 0 auto;
				margin-top: 5px;
				box-shadow: 1px 1px 5px #c7c7c7;
				border-radius: 20px;
			}
		}

		.swiper {
			width: 90%;
			margin: 0 auto;
			margin-top: 150px;

			image {
				width: 100%;
				display: block;
			}
		}

		.grid-text {
			font-size: 14px;
			color: #909399;
			padding: 10rpx 0 20rpx 0rpx;
			/* #ifndef APP-PLUS */
			box-sizing: border-box;
			/* #endif */
		}

		.show_img {
			height: 150pt;
			width: 90%;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			border-radius: 10px;

			img {
				border-radius: 7px;
			}

			// background-color: #909399;
			.title {
				position: absolute;
				padding: 7px;
				background-color: #df9040;
				border-radius: 7px;
				margin-top: 7px;
				margin-left: 5px;
				opacity: 0.7;
				color: #fff;
				z-index: 9;
			}
		}

		.container {
			width: 90%;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			border-radius: 10px;
			margin-top: 10px;

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
					height: 70%;
				}
			}
		}
	}
</style>