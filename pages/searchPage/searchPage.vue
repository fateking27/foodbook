<template>
	<view>
		<view class="head">
			<view class="back" @click="goto">
				<u-icon name="arrow-left" size="24px" color="black"></u-icon>
			</view>
			<view class="title">
				菜谱搜索
			</view>
			<span style="position: absolute;top: 95px;left: 320px;">搜索</span>
			<view class="search">
				<u-search inputAlign="left" placeholder="搜你想搜的~" :showAction="false" shape="square" height="30"
					bgColor="#fff" searchIconColor="#ffaa00"></u-search>
			</view>
		</view>

		<view class="recommend">
			<h1 class="title" style="display: flex;">
				精品名厨视频-会员专享
				<image style="width: 20px;height: 20px;" src="http://localhost:4000/public/images/mengbanzu282@3x.png"
					mode=""></image>
			</h1>
			<scroll-view scroll-x="true" class="_abbr">
				<view class="item">
					<image src="http://localhost:4000/public/images/tupian@3x.png"></image>
					<view class="title" style="width: 100%;">
						<h3 style="">大白兔奶茶</h3>
					</view>

					<view class="" style="display: flex;margin-top: 7px;">
						<view class="watch" style="display: flex;">
							<text style="font-size: 14px;color: #999;">66.3万</text>
							<image src="http://localhost:4000/public/images/liulam @2x.png"
								style="width: 20px;height: 15px;">
							</image>
						</view>
						<view class="collection" style="display: flex;">
							<text style="font-size: 14px;color: #999;">2495</text>
							<image src="http://localhost:4000/public/images/soucang@2x.png"
								style="width: 20px;height: 20px;">
							</image>
						</view>
					</view>
				</view>
				<view class="item">
					<image src="http://localhost:4000/public/images/tupian@3x.png"></image>
					<view class="title" style="width: 100%;">
						<h3 style="">大白兔奶茶</h3>
					</view>

					<view class="" style="display: flex;margin-top: 7px;">
						<view class="watch" style="display: flex;">
							<text style="font-size: 14px;color: #999;">66.3万</text>
							<image src="http://localhost:4000/public/images/liulam @2x.png"
								style="width: 20px;height: 15px;">
							</image>
						</view>
						<view class="collection" style="display: flex;">
							<text style="font-size: 14px;color: #999;">2495</text>
							<image src="http://localhost:4000/public/images/soucang@2x.png"
								style="width: 20px;height: 20px;">
							</image>
						</view>
					</view>

				</view>
				<view class="item">
					<image src="http://localhost:4000/public/images/tupian@3x.png"></image>
					<view class="title" style="width: 100%;">
						<h3 style="">大白兔奶茶</h3>
					</view>

					<view class="" style="display: flex;margin-top: 7px;">
						<view class="watch" style="display: flex;">
							<text style="font-size: 14px;color: #999;">66.3万</text>
							<image src="http://localhost:4000/public/images/liulam @2x.png"
								style="width: 20px;height: 15px;">
							</image>
						</view>
						<view class="collection" style="display: flex;">
							<text style="font-size: 14px;color: #999;">2495</text>
							<image src="http://localhost:4000/public/images/soucang@2x.png"
								style="width: 20px;height: 20px;">
							</image>
						</view>
					</view>

				</view>

			</scroll-view>
		</view>

		<view class="foodbook_search">
			<view class="item">
				<image style="height: 120px;width: 50%;" src="http://localhost:4000/public/images/tupian@3x.png">
				</image>

				<view style="margin-left: 10px;">
					<view class="title" style="padding-bottom: 45px;padding-top: 5px;">
						<h3 style="font-weight: bolder;">大白兔奶茶</h3>
						<view style="font-size: 13px;padding-top: 10px;color: #999;width: 155px;overflow: hidden;text-overflow: ellipsis;">
							鸡蛋、低筋面粉、玉米淀粉玉米淀粉玉米淀粉
						</view>
					</view>
					
					<view class="cw" style="display: flex;">
						<view class="watch" style="display: flex;align-items: center;">
							<text style="font-size: 12px;color: #999;">66.3万</text>
							<image src="http://localhost:4000/public/images/liulam @2x.png"
								style="width: 13px;height: 10px;padding: 0 5px;">
							</image>
						</view>
						<view class="collection" style="display: flex;padding-left: 10px;align-items: center;">
							<text style="font-size: 12px;color: #999;">2495</text>
							<image src="http://localhost:4000/public/images/soucang@2x.png"
								style="width: 15px;height: 15px;padding: 0 5px;">
							</image>
						</view>
					</view>
				</view>


			</view>
			<view class="item">
				<image style="height: 120px;width: 50%;" src="http://localhost:4000/public/images/tupian@3x.png">
				</image>

				<view style="margin-left: 10px;">
					<view class="title" style="padding-bottom: 45px;padding-top: 5px;">
						<h3 style="font-weight: bolder;">大白兔奶茶</h3>
						<view style="font-size: 13px;padding-top: 10px;color: #999;width: 155px;overflow: hidden;text-overflow: ellipsis;">
							鸡蛋、低筋面粉、玉米淀粉玉米淀粉玉米淀粉
						</view>
					</view>
					
					<view class="cw" style="display: flex;">
						<view class="watch" style="display: flex;align-items: center;">
							<text style="font-size: 12px;color: #999;">66.3万</text>
							<image src="http://localhost:4000/public/images/liulam @2x.png"
								style="width: 13px;height: 10px;padding: 0 5px;">
							</image>
						</view>
						<view class="collection" style="display: flex;padding-left: 10px;align-items: center;">
							<text style="font-size: 12px;color: #999;">2495</text>
							<image src="http://localhost:4000/public/images/soucang@2x.png"
								style="width: 15px;height: 15px;padding: 0 5px;">
							</image>
						</view>
					</view>
				</view>


			</view>
			<view class="item">
				<image style="height: 120px;width: 50%;" src="http://localhost:4000/public/images/tupian@3x.png">
				</image>

				<view style="margin-left: 10px;">
					<view class="title" style="padding-bottom: 45px;padding-top: 5px;">
						<h3 style="font-weight: bolder;">大白兔奶茶</h3>
						<view style="font-size: 13px;padding-top: 10px;color: #999;width: 155px;overflow: hidden;text-overflow: ellipsis;">
							鸡蛋、低筋面粉、玉米淀粉玉米淀粉玉米淀粉
						</view>
					</view>
					
					<view class="cw" style="display: flex;">
						<view class="watch" style="display: flex;align-items: center;">
							<text style="font-size: 12px;color: #999;">66.3万</text>
							<image src="http://localhost:4000/public/images/liulam @2x.png"
								style="width: 13px;height: 10px;padding: 0 5px;">
							</image>
						</view>
						<view class="collection" style="display: flex;padding-left: 10px;align-items: center;">
							<text style="font-size: 12px;color: #999;">2495</text>
							<image src="http://localhost:4000/public/images/soucang@2x.png"
								style="width: 15px;height: 15px;padding: 0 5px;">
							</image>
						</view>
					</view>
				</view>


			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			goto() {
				uni.navigateBack({})
			}
		}
	}
</script>

<style lang="scss">
	.head {
		width: 100%;
		height: 100pt;
		color: #fff;
		background-image: url("http://localhost:4000/public/images/ditu@2x.png");
		display: flex;
		flex-wrap: wrap;

		.title {
			padding-top: 30px;
			// padding-left: 160px;
			font-size: 20px;
			margin: 0 auto;
			margin-left: 110px;
		}

		.back {
			margin-top: 35px;
			margin-left: 15px;
		}

		.search {
			width: 260px;
			// margin: 0 auto;
			margin-top: 20px;
			margin-left: 50px;
			color: #fff;
		}
	}

	.recommend {
		width: 100%;
		margin: 0 auto;
		margin-top: 10px;
		margin-left: 10px;

		._abbr {
			width: 100%;
			// display: flex;
			white-space: nowrap;

			.item {
				// background-color: aqua;
				width: 45%;
				height: 100pt;
				border-radius: 10px;
				margin-top: 10px;
				// display: flex;
				// flex-wrap: wrap;
				padding-right: 10px;
				display: inline-block;
				// background-color: #f0f0f0;

				.watch {
					padding-right: 30px;
				}

				image {
					width: 100%;
					height: 75%;
				}
			}
		}
	}

	.foodbook_search {
		// background-color: deeppink;
		.item {
			display: flex;
			flex-wrap: wrap;
			height: 120px;
			width: 93.5%;
			// background-color: aqua;
			margin: 0 auto;
			margin-top: 20px;
			white-space: nowrap;
		}
	}
</style>