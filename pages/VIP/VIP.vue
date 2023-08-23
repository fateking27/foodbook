<template>
	<view class="content">
		<view class="head">
			<view class="title">
				VIP会员
			</view>
			<scroll-view scroll-x="true" class="tags">
				<view class="tag" style="font-size: 20px;font-weight: bolder;">
					推荐
				</view>
				<view class="tag" v-for="item in tagList">
					{{item}}
				</view>
			</scroll-view>
		</view>

		<view class="vip_card">
			<view class="content" style="height: 70%;width: 100%;">
				<view class="img_">
					<image style="width: 75px;height: 75px;" src="http://localhost:4000/public/images/zu428@2x.png" mode="">
					</image>
				</view>
				<view class="being_vip">
					<view class="welcom">
						<text style="color: #999;font-size: 13px;">欢迎你，新朋友</text>
						<span style="">开通</span>
					</view>
					<view class="" style="color: #fff;padding-top: 10px;">
						8元开通VIP，畅学明初独家菜谱
					</view>
				</view>

			</view>

			<view class="foot" style="">
				<view class="serve_" style="">
					<image style="width: 30px;height: 30px;" src="http://localhost:4000/public/images/mengbanzu282@3x.png"
						mode=""></image>
					<view class="" style="color: aliceblue;font-size: 12px;text-align: center;">
						名厨课程
					</view>
				</view>
				<view class="serve_" style="">
					<image style="width: 30px;height: 30px;" src="http://localhost:4000/public/images/mengbanzu282@3x.png"
						mode=""></image>
					<view class="" style="color: aliceblue;font-size: 12px;text-align: center;">
						无广告打扰
					</view>
				</view>
				<view class="serve_" style="">
					<image style="width: 30px;height: 30px;" src="http://localhost:4000/public/images/mengbanzu282@3x.png"
						mode=""></image>
					<view class="" style="color: aliceblue;font-size: 12px;text-align: center;">
						身份标识
					</view>
				</view>
			</view>
		</view>

		<view class="recommend">
			<h1 class="title">
				VIP最新推荐
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

		<view class="free">
			<h1 class="title">
				限时免费体验
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
		
		<h1 class="title" style="margin-left: 10px;margin-top: 20px;">
			猜你喜欢
		</h1>
		<view class="container">
			<view class="item">
				<image src="http://localhost:4000/public/images/tupian@3x.png"></image>
				<view class="title" style="width: 100%;">
					<h3>大白兔奶茶</h3>
				</view>

				<view class="watch" style="display: flex;align-items: center;">
					<text style="font-size: 14px;color: #999;">66.3万</text>
					<image src="http://localhost:4000/public/images/liulam @2x.png" style="width: 20px;height: 15px;">
					</image>
				</view>
				<view class="collection" style="display: flex;align-items: center;">
					<text style="font-size: 14px;color: #999;">2495</text>
					<image src=".http://localhost:4000/public/images/soucang@2x.png" style="width: 20px;height: 20px;">
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
					<image src="http://localhost:4000/public/images/liulam @2x.png" style="width: 20px;height: 15px;">
					</image>
				</view>
				<view class="collection" style="display: flex;align-items: center;">
					<text style="font-size: 14px;color: #999;">2495</text>
					<image src="http://localhost:4000/public/images/soucang@2x.png" style="width: 20px;height: 20px;">
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
					<image src="http://localhost:4000/public/images/liulam @2x.png" style="width: 20px;height: 15px;">
					</image>
				</view>
				<view class="collection" style="display: flex;align-items: center;">
					<text style="font-size: 14px;color: #999;">2495</text>
					<image src="http://localhost:4000/public/images/soucang@2x.png" style="width: 20px;height: 20px;">
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
				tagList: ["免费体验", "小白入门", "快手菜", "家常菜", "家常菜", "家常菜", "家常菜", "家常菜", "家常菜", "家常菜", ]
			};
		}
	}
</script>

<style lang="scss">
	.content {
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
			}

			.tags {
				width: 100%;
				height: 120rpx;
				// background-color: cadetblue;
				// margin-bottom: 0px;
				white-space: nowrap;

				.tag {
					display: inline-block;
					height: 120rpx;
					line-height: 120rpx;
					font-size: 14px;
					padding: 0px 10px;
				}
			}
		}

		.vip_card {
			width: 95%;
			height: 150pt;
			background-color: aqua;
			border-radius: 10px;
			margin: 0 auto;
			margin-top: 10px;
			background-image: radial-gradient(circle, #3f414a, #23242c);

			.content {
				display: flex;
				justify-content: space-between;
				align-items: center;
				box-sizing: border-box;
				padding: 0 20px;

				.being_vip {

					.welcom {
						display: flex;
						justify-content: space-between;

						span {
							color: #a87a5b;
							background-color: #edc9ae;
							padding: 2px 15px;
							font-size: 12px;
							font-weight: 1000;
							border-radius: 15px;
						}
					}

				}
			}

			.foot {
				height: 30%;
				background: linear-gradient(to bottom, black, #323232, #595959);
				border-radius: 10px;
				display: flex;
				justify-content: space-around;
				align-items: center;

				.serve_ {
					// background-color: aqua;
					width: 60px;
					display: flex;
					flex-wrap: wrap;
					justify-content: space-evenly;
				}
			}
		}

		.free,
		.recommend {
			width: 100%;
			margin: 0 auto;
			margin-top: 20px;
			margin-left: 10px;

			._abbr {
				width: 100%;
				// display: flex;
				white-space: nowrap;

				.item {
					// background-color: aqua;
					width: 45%;
					height: 110pt;
					border-radius: 10px;
					margin-top: 10px;
					// display: flex;
					// flex-wrap: wrap;
					padding-right: 5px;
					display: inline-block;

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