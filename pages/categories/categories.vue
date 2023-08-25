<template>
	<view>
		<view class="search_warp">
			<u-search placeholder="日照香炉生紫烟" v-model="keyword" :showAction="false"></u-search>
		</view>
		<view class="container">
			<view class="first_warp">
				<scroll-view :scroll-y="true" class="scroll-Y">
					<view class="first_item" :class="{first_active: cursecond == 's' + index}"
						v-for="(item, index) in categories" @tap="changefirst(index)">{{item.cat_name}}</view>
				</scroll-view>

			</view>
			<view class="second_warp">
				<scroll-view :scroll-y="true" class="scroll-Y" :scroll-into-view="cursecond"
					:scroll-with-animation="true">
					<view class="second_item" v-for="(item, index) in categories" :key="item._id" :id="'s' + index">
						<view style="margin-left: 10px;">{{item.cat_name}}</view>
						<view class="second_list" style="text-align: center;">
							<view style="margin-left:20rpx;padding: 0 20px;" v-for="item in item.children">
								<image
									style="width: 40px;height: 40px;display: block;border-radius: 50%;padding: 10px 0;"
									:src="item.cat_icon" mode=""></image>
								<view style="font-size: 12px;">
									{{item.cat_name}}
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import common from "@/utils/common.js"
	export default {
		data() {
			return {
				cursecond: 's0',
				categories: []
			}
		},
		onLoad() {
			this.category()
		},
		methods: {
			changefirst(pos) {
				this.cursecond = "s" + pos;
			},
			category() {
				common.getAllGategories({}).then((res) => {
					this.categories = res.data.message
					console.log(this.categories)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search_warp {
		width: 600rpx;
		margin: 0px auto;
		margin-top: 30rpx;
		height: 90rpx;
	}

	.container {
		display: flex;
		width: 100vw;
		/* #ifdef H5 */
		height: calc(100vh - 300rpx);
		/* #endif */
		/* #ifdef MP */
		height: calc(100vh - 120rpx);
		/* #endif */


		.first_warp {
			width: 20vw;
			/* #ifdef H5 */
			height: calc(100vh - 300rpx);
			/* #endif */
			/* #ifdef MP */
			height: calc(100vh - 120rpx);
			/* #endif */
			// background: red;
			font-size: 13px;

			.scroll-Y {
				height: 100%;
				width: 100%;

				.first_item {
					width: 100%;
					height: 80rpx;
					line-height: 80rpx;
					text-align: center;
					// background: #ccc;
				}

				.first_active {
					background-color: #ebebeb;
					color: #ee7b2d;
					border-bottom: 2rpx solid #ee7b2d;
				}
			}
		}

		.second_warp {
			width: 80vw;
			/* #ifdef H5 */
			height: calc(100vh - 300rpx);
			/* #endif */
			/* #ifdef MP */
			height: calc(100vh - 120rpx);
			/* #endif */


			.scroll-Y {
				height: 100%;
				width: 100%;

				.second_item {
					width: 100%;
					padding: 10px 0;

					.second_list {
						display: flex;
						flex-wrap: wrap;
					}
				}


			}
		}
	}
</style>