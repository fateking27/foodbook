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
				<u-search inputAlign="center" placeholder="搜你想搜的~" :showAction="false" shape="round" height="35"
					bgColor="#fff"></u-search>
			</view>
		</view>

		<swiper class="swiper" circular indicator-dots="true" autoplay="true" :interval="2000" :duration="500">
			<swiper-item style="border-radius: 10px;" v-for=" item in swiper_list">
				<image style="border-radius: 10px;" :src="item"></image>
			</swiper-item>
		</swiper>
		
		<view class="grid" style="margin-top: 15px;">
			<u-grid :border="false" col="5">
				<u-grid-item v-for="(listItem,listIndex) in list" :key="listIndex">
					<img style="width: 30px;height: 30px;" :customStyle="{paddingTop:20+'rpx'}"
						src="@/static/icon/sucai590.png" />
					<text class="grid-text">{{listItem.title}}</text>
				</u-grid-item>
			</u-grid>
		</view>

		<view class="show_img">
			<view class="bg_img" style="background-color: aqua;width: 48.5%;border-radius: 10px;">
				<img src="" alt="">
			</view>
			<view class="img_siz" style="width: 48.5%;border-radius: 10px;display: flex;flex-wrap: wrap;">
				<view class="img s1" style="background-color: chartreuse;width: 100%;height: 49%;border-radius: 10px;">

				</view>
				<view class="img s2"
					style="background-color: blue;width: 100%;height: 49%;border-radius: 10px;margin-bottom: -5px;">

				</view>
			</view>
		</view>

		<view class="container">
			<view class="item">
				<image src="../../static/caipusousuo_slices/tupian@3x.png"></image>
				<view class="title" style="width: 100%;">
					<h3>大白兔奶茶</h3>
				</view>

				<view class="watch" style="display: flex;align-items: center;">
					<text style="font-size: 14px;color: #999;">66.3万</text>
					<image src="../../static/midouyichu _slices/liulam @2x.png" style="width: 20px;height: 15px;">
					</image>
				</view>
				<view class="collection" style="display: flex;align-items: center;">
					<text style="font-size: 14px;color: #999;">2495</text>
					<image src="../../static/midouyichu _slices/soucang@2x.png" style="width: 20px;height: 20px;">
					</image>
				</view>
			</view>
			<view class="item">
				<image src="../../static/caipusousuo_slices/tupian@3x.png"></image>
				<view class="title" style="width: 100%;">
					<h3>大白兔奶茶</h3>
				</view>

				<view class="watch" style="display: flex;align-items: center;">
					<text style="font-size: 14px;color: #999;">66.3万</text>
					<image src="../../static/midouyichu _slices/liulam @2x.png" style="width: 20px;height: 15px;">
					</image>
				</view>
				<view class="collection" style="display: flex;align-items: center;">
					<text style="font-size: 14px;color: #999;">2495</text>
					<image src="../../static/midouyichu _slices/soucang@2x.png" style="width: 20px;height: 20px;">
					</image>
				</view>
			</view>
			<view class="item">
				<image src="../../static/caipusousuo_slices/tupian@3x.png"></image>
				<view class="title" style="width: 100%;">
					<h3>大白兔奶茶</h3>
				</view>

				<view class="watch" style="display: flex;align-items: center;">
					<text style="font-size: 14px;color: #999;">66.3万</text>
					<image src="../../static/midouyichu _slices/liulam @2x.png" style="width: 20px;height: 15px;">
					</image>
				</view>
				<view class="collection" style="display: flex;align-items: center;">
					<text style="font-size: 14px;color: #999;">2495</text>
					<image src="../../static/midouyichu _slices/soucang@2x.png" style="width: 20px;height: 20px;">
					</image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiper_list: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				],
				list: [{
						name: 'photo',
						title: '家常菜'
					},
					{
						name: 'lock',
						title: '甜点'
					},
					{
						name: 'star',
						title: '素菜'
					},
					{
						name: 'hourglass',
						title: '凉菜'
					},
					{
						name: 'home',
						title: '下饭菜'
					},
					{
						name: 'star',
						title: '川菜'
					}, {
						name: 'star',
						title: '川菜'
					}, {
						name: 'star',
						title: '川菜'
					}, {
						name: 'star',
						title: '川菜'
					}, {
						name: 'star',
						title: '分类'
					},
				],
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		.head {
			width: 100%;
			height: 110pt;
			color: #fff;
			background-image: url("/static/midouyichu _slices/ditu@2x.png");
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
			// background-color: #909399;
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
					height: 70%;
				}
			}
		}
	}
</style>