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
					bgColor="#fff" searchIconColor=""></u-search>
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
</style>