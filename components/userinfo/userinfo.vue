<template>
	<view>
<!-- 		<view class="userinfo">
			<view class="userhead" @tap="login3">
				<image :src="getAvatar" class="headimg" mode="aspectFill"></image>
			</view>
			<view class="usernick" @tap="login3">
				{{getNickName}}
			</view>
		</view> -->
		
		<view class="userinfo">
			<view class="userhead" @tap="login3">
				<image :src="getAvatar" mode="aspectFill"></image>
			</view>
			<view class="usernick" @tap="login3">
				<text>{{getNickName}}</text> <br>
				<text v-show="isShow" style="color: darkgray;">登陆后可收藏喜欢的菜谱</text>
				<text v-show="!isShow" style="color: darkgray;">{{getNickName}},欢迎你的到来~</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	import {createNamespacedHelpers} from "vuex";
	const {mapGetters} = createNamespacedHelpers("user")
	export default {
		name:"userinfo",
		data() {
			return {
				isShow: true,
			};
		},
		computed: {
			...mapGetters(["getNickName", "getAvatar"]),
		},
		methods: {
			login3() {
				this.$emit("wxlogin");
			},
		},
		mounted() {
			let loginUser = uni.getStorageSync("LoginUser");
			if(loginUser){
				this.isShow = false
			}
		}
	}
</script>

<style lang="scss">
		.userinfo {
			width: 90%;
			margin: 0 auto;
			margin-top: 10px;
			display: flex;
			align-items: flex-end;
		
		
			.userhead {
				background-color: #fff;
		
				image {
					width: 80px;
					height: 80px;
					border-radius: 50%;
				}
			}
		
			.usernick {
				padding-left: 20px;
				padding-bottom: 15px;
			}
		}
</style>