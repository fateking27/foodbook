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
					<image src="../../static/聚收藏.png" mode=""></image>
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
				<span style="color: #ffaa00;">会员专享</span>
				<image src="http://localhost:4000/public/images/vip-fill.png"></image>
				<span>4.9万浏览</span>
				<image src="http://localhost:4000/public/images/liulam @2x.png">
				</image>
				<span>117收藏</span>
				<image src="http://localhost:4000/public/images/soucang@2x.png">
				</image>
			</view>
		</view>

		<view class="recipe" style="background-color: #fff;margin-top: 15px;">
			<view class="yl">
				<view class="time">
					<image src="http://localhost:4000/public/images/shijian@2x.png" mode=""></image>
					<span>30分钟以上</span>
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
				<view class="item" v-for="(item,index) in foods" :key="index">
					<span>{{item}}</span>
					<span style="padding-right: 100px;">500g</span>
				</view>
			</view>

			<view class="xts" style="width: 95%;margin: 0 auto;margin-top: 15px;">
				<view class="title_" style="font-size: 17px;font-weight: bold;">
					小贴士
				</view>
				<view class="title hs" style="margin-top: 15px;">
					<view>【用量换算】</view>
					<view style="font-size: 13px;padding: 10px 25px; 20px 0px">
						1汤匙≈15ml;1茶匙≈3g
					</view>
				</view>
				<view class="title xz">
					<view>【原料选择】</view>
					<view style="font-size: 13px;padding: 10px 25px; 20px 0px">
						1.川北凉粉：来自四川北部的一道民间小吃，由豌豆粉研制而成，口感细腻，颜色洁白透亮，这是和普通北方凉粉的区别所在。
						豌豆含有优质蛋白质，可以提高机体的抗病能力和康复能力。
						<br>
						2.永川豆豉：永川豆豉属毛霉型豆豉。富含蛋白质和人体所需基
						酸，香气浓郁，滋味鲜美，即可用于烹饪，也可代菜佐餐，不但营养价值高，又有开胃助食解表驱寒之功效。可在市场、超市购买。
					</view>
				</view>
				<view class="title xz">
					<view>【烹饪要点】</view>
					<view style="font-size: 13px;padding: 10px 25px; 20px 0px">
						1.怎样使凉粉的味道有层次感？
						首先放入榨菜末，增加清脆的口感，然后放入香葱，提升菜的香气，接下来放入红油，提升菜的辣味和香味，最后放入花生碎，提升口感。
						<br>
						2.为什么没有放盐？
						在调味时已烹入酱油、豆瓣酱等调味料，故无需要再加盐。如果口味较重，也可根据需求酌情添加。
					</view>
				</view>
			</view>
		</view>

		<view class="free">
			<h1 class="title" style="margin-left: 20px;
			padding-top: 20px;font-weight: bold;">
				相关菜谱
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
				foods: ['豌豆凉粉', '小葱末', '榨菜末', '花生碎', '花生碎', '花生碎', '花生碎'],
				Detail:[]
			};
		},
		onLoad() {
			this.menuDetail()
		},
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
					console.log(111,this.Detail)
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

	.xts {
		padding-bottom: 10px;

		.title {
			color: #666;
		}
	}

	.free {
		width: 100%;
		margin: 0 auto;
		margin-top: 15px;
		// margin-left: 10px;
		background-color: #fff;
		padding-bottom: 20px;


		._abbr {
			width: 100%;
			// display: flex;
			white-space: nowrap;
			margin-left: 20px;

			.item {
				// background-color: aqua;
				width: 60%;
				height: 140pt;
				border-radius: 10px;
				margin-top: 15px;
				// display: flex;
				// flex-wrap: wrap;
				padding-right: 5px;
				display: inline-block;
				margin-right: 15px;

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
</style>