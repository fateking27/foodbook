<template>
	<view class="vippage-container">
		<!-- 立即登录 -->
		<view class="logInNow">
			<view class="vip-number">
				<view class="number-image">
					<image src="http://localhost:4000/public/images/yonghu2@3x.png" mode=""></image>
					<image src="http://localhost:4000/public/images/yonghu1@3x.png" mode=""></image>
					<image src="http://localhost:4000/public/images/yonghu3@3x.png" mode=""></image>
					<image src="http://localhost:4000/public/images/yonghu4@3x.png" mode=""></image>
					<image src="http://localhost:4000/public/images/yonghu5@3x.png" mode=""></image>
					<image src="http://localhost:4000/public/images/yonghu6@3x.png" mode=""></image>
				</view>
				<view class="number-content">5593人已开通会员</view>
			</view>
			<view class="see-buy">购买查询</view>
			<view class="login-box" @click="handleLogin">
				<image class="bg-image" src="http://localhost:4000/public/images/huiyuan108@3x.png"></image>
				<image class="avatar-image" :src="getAvatar || 'http://localhost:4000/public/images/touxiang495@3x.png'"></image>
				<text class="login-text">{{getNickName || '立即登录'}}</text>
				<view class="vip-box" v-if="userinfo.vip">会员</view>
				<view class="becomevip">开通会员尊享VIP权益</view>
			</view>
		</view>

		<!-- 立即开通 -->
		<view class="vip-recommend">
			<view class="recommend-box">
				<view v-for="(item,index) in recommendBox"
					:class="['recommend-type', activeBox === index ? 'active' : '']" @click="changeActiveBox(index)"
					:key="item._id">
					<view class="recommend-month">{{item.mouth}}个月</view>
					<view class="recommend-price">￥{{item.salePrice}}</view>
					<view class="recommend-oldPrice">￥{{item.normalPrice}}</view>
				</view>
			</view>
			<view class="recommend-text">
				<view class="small-congra">恭喜</view>
				<view class="congra-text">您获得2折开通会员特权！</view>
			</view>
			<view class="become-button" @click="openPopup">立即开通</view>
		</view>

		<!-- 下面灰色背景部分 -->
		<view class="greybgc">
			<view class="vip-right">
				<view class="right-title">VIP特权</view>
				<view class="right-box">
					<view class="right-item">
						<image src="http://localhost:4000/public/images/caipu@3x.png" mode=""></image>
						<view class="item-right">
							<text class="item-right-text1">1000+精品名厨菜谱</text>
							<text class="item-right-text2">大咖教学，轻松学会</text>
						</view>
					</view>
					<view class="right-item">
						<image src="http://localhost:4000/public/images/new@3x.png"></image>
						<view class="item-right">
							<text class="item-right-text1">每周上新</text>
							<text class="item-right-text2">新菜持续更新中</text>
						</view>
					</view>
					<view class="right-item">
						<image src="http://localhost:4000/public/images/ad@3x.png" mode=""></image>
						<view class="item-right">
							<text class="item-right-text1">会员广告免打扰</text>
							<text class="item-right-text2">体验更流畅</text>
						</view>
					</view>
					<view class="right-item">
						<image src="http://localhost:4000/public/images/biaoshi@3x.png" mode=""></image>
						<view class="item-right">
							<text class="item-right-text1">VIP尊贵身份标识</text>
							<text class="item-right-text2">随时随地、与众不同</text>
						</view>
					</view>
				</view>
			</view>
			<view class="use-info">
				<view class="info-title">会员使用说明</view>
				<view class="info-content">
					1.会员服务一经开通，不支持退款；<br>
					2.如遇到苹果手机支付问题，建议参考Apptore支付流程<br>
					3.若会员开通出现异常，请立即联系客服，我们会在2个工作日内出处理结果。<br>
					4.会员常见问题、会员服务协议、会员隐私协议。
				</view>
			</view>
		</view>

		<!-- 弹窗 -->
		<uni-popup ref="popup" background-color="#fff" @change="change" type="bottom" :mask-click="false">
			<view class="popup-content">
				<view class="closeicon" @click="closePopup">
					<uni-icons type="closeempty" size="20" color="#999"></uni-icons>
				</view>
				<view class="popup-title">开通VIP会员</view>
				<view class="recommend-box">
					<view v-for="(item,index) in recommendBox"
						:class="['recommend-type', activeBox === index ? 'active' : '']" @click="changeActiveBox(index)"
						:key="item._id">
						<view class="recommend-month">{{item.mouth}}个月</view>
						<view class="recommend-price">￥{{item.salePrice}}</view>
						<view class="recommend-oldPrice">￥{{item.normalPrice}}</view>
					</view>
				</view>
				<view class="recommend-text">
					<view class="small-congra">恭喜</view>
					<view class="congra-text" style="color: black;font-size: 26rpx; line-height: 42rpx;">
						开通后立即全站去广告、免费观看10000+名厨视频</view>
				</view>
				<view class="become-button" @click="toPay">立即购买</view>

			</view>
		</uni-popup>
	</view>
</template>

<script>
	// import {
	// 	vipTypeRequest,
	// 	openVipRequest
	// } from '@/utils/common.js'
	// import {
	// 	mapState,
	// 	mapMutations
	// } from 'vuex'
	import {
		userInfoRequest
	} from '@/utils/common.js'
	import {createNamespacedHelpers} from "vuex";
	const {mapGetters} = createNamespacedHelpers("user")
	export default {
		data() {
			return {
				activeBox: 0,
				recommendBox: []
			};
		},
		onLoad() {
			// this.getVipType()
		},
		computed: {
			// ...mapState('m_user', ['token', 'userinfo']),
			...mapGetters(["getNickName", "getAvatar"]),
		},
		methods: {
			// ...mapMutations('m_user', ['updateUserInfo']),
			changeActiveBox(i) {
				this.activeBox = i
			},
			async getVipType() {
				const {
					data
				} = await vipTypeRequest()
				console.log('套餐列表', data)
				this.recommendBox = data.data
			},
			handleLogin() {
				if (!this.userinfo) {
					uni.switchTab({
						url: '/pages/UserCenter/UserCenter'
					})
				}
			},
			// 开通VIP
			async openVip() {
				const {
					data
				} = await openVipRequest({
					_id: this.userinfo._id,
					date: this.recommendBox[this.activeBox].mouth
				})
				console.log('开通VIP', data);
				if (data.code == 1) {
					this.getUserInfo()
					this.closePopup()
          uni.navigateTo({
          	// url: `/pages/pay_success/pay_success?payNum=${this.recommendBox[this.activeBox].salePrice}`,
          	url: `/pages/pay_success/pay_success`,
          })
				}
			},
			// 打开弹窗
			openPopup() {
				this.$refs.popup.open('bottom')
			},
			// 关闭弹窗
			closePopup() {
				this.$refs.popup.close()
			},
			//弹窗的change
			change(e) {
				console.log('当前模式：' + e.type + ',状态：' + e.show);
			},
			// 支付
			toPay() {
				//省略支付步骤，直接充值
				// console.log({
				// 	_id: this.userinfo._id,
				// 	date: this.recommendBox[this.activeBox].mouth
				// });
				// this.openVip()
				uni.navigateTo({
					// url: `/pages/pay_success/pay_success?payNum=${this.recommendBox[this.activeBox].salePrice}`,
					url: `/pages/pay_success/pay_success`,
				})
			},
			// 获取用户信息
			async getUserInfo() {
				const {
					data
				} = await userInfoRequest({
					token: this.token
				})
				console.log('用户信息', data)
				this.updateUserInfo(data[0])
			},
		}
	}
</script>

<style lang="scss">
	.logInNow {
		height: 600rpx;
		background-color: rgb(49, 49, 49);
		border-radius: 250rpx;
		position: relative;
		top: -250rpx;

		.vip-number {
			display: flex;
			position: absolute;
			bottom: 300rpx;
			left: -24rpx;
			width: 450rpx;
			height: 48rpx;
			background-color: #5c5c5c;
			border-radius: 24rpx;
			padding-left: 30rpx;
			color: white;
			line-height: 48rpx;

			.number-image {
				margin-left: 24rpx;

				image {
					height: 36rpx;
					width: 36rpx;
					vertical-align: middle;
					margin-left: -10rpx;
					margin-bottom: 4rpx;
				}
			}

			.number-content {
				margin-left: 14rpx;
				font-size: 24rpx;
			}
		}

		.see-buy {
			display: flex;
			position: absolute;
			bottom: 305rpx;
			right: 32rpx;
			color: white;
			font-size: 26rpx;
		}

		.login-box {
			width: 730rpx;
			height: 300rpx;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			bottom: -30rpx;
			color: rgb(123, 91, 33);

			.bg-image {
				height: 300rpx;
				width: 730rpx;
			}

			.avatar-image {
				position: absolute;
				left: 64rpx;
				top: 50%;
				transform: translateY(-50%);
				height: 108rpx;
				width: 108rpx;
				border-radius: 54rpx;
			}

			.login-text {
				position: absolute;
				top: 98rpx;
				left: 190rpx;
				font-weight: 700;
				font-size: 35rpx;
			}

			.vip-box {
				position: absolute;
				top: 108rpx;
				left: 340rpx;
				width: 95rpx;
				height: 32rpx;
				background-color: #a5a5a5;
				border-radius: 16rpx;
				font-size: 25rpx;
				line-height: 32rpx;
				text-align: center;
				color: rgb(251, 237, 197);
			}

			.becomevip {
				position: absolute;
				top: 160rpx;
				left: 190rpx;
				font-size: 25rpx;
			}
		}
	}

	.vip-recommend {
		position: relative;
		top: -180rpx;
		padding-left: 32rpx;
		padding-right: 32rpx;
	}

	.greybgc {
		background-color: rgb(245, 247, 250);
		padding-top: 28rpx;
		position: relative;
		top: -120rpx;

		.vip-right {
			padding-top: 20rpx;
			background-color: #ffffff;

			.right-title {
				font-size: 36rpx;
				font-weight: 500;
				padding-left: 46rpx;
				margin-bottom: 42rpx;
			}

			.right-box {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				padding-left: 46rpx;

				.right-item {
					display: flex;
					margin-bottom: 50rpx;

					image {
						display: block;
						height: 90rpx;
						width: 90rpx;
						margin-right: 44rpx;
					}

					.item-right {
						display: flex;
						flex-direction: column;
						justify-content: space-around;

						.item-right-text1 {
							font-size: 30rpx;
						}

						.item-right-text2 {
							font-size: 25rpx;
							color: #999;
						}
					}
				}
			}
		}

		.use-info {
			margin-top: 28rpx;
			background-color: #ffffff;
			padding-top: 26rpx;
			padding-left: 32rpx;

			.info-title {
				margin-bottom: 28rpx;
			}

			.info-content {
				width: 656rpx;
				font-size: 24rpx;
				color: #999;
				line-height: 2em;
			}
		}
	}

	.recommend-box {
		display: flex;
		justify-content: space-around;

		.recommend-type {
			position: relative;
			width: 210rpx;
			height: 232rpx;
			border-radius: 16rpx;
			border: 1px solid #e0e0e0;
			background-color: #fbfcfe;
			text-align: center;
			line-height: 1;
			box-sizing: border-box;

			&.active {
				border: 1px solid #dcb66a;
				background-color: #fbf7ef;
			}

			&:first-child {
				&::after {
					content: '推荐';
					display: block;
					width: 98rpx;
					height: 48rpx;
					color: white;
					font-size: 28rpx;
					border-radius: 14rpx;
					position: absolute;
					top: -24rpx;
					left: -2rpx;
					line-height: 48rpx;
					background: url(http://localhost:4000/public/images/tuijian@3x.png) no-repeat center center/98rpx 48rpx;
				}
			}

			.recommend-month {
				font-size: 36rpx;
				margin-bottom: 26rpx;
				margin-top: 48rpx;
			}

			.recommend-price {
				font-size: 44rpx;
				font-weight: 500;
				color: rgb(222, 176, 98);
				margin-bottom: 26rpx;
			}

			.recommend-oldPrice {
				font-size: 28rpx;
				color: #a49fa0;
				text-decoration: line-through;
			}
		}
	}

	.recommend-text {
		margin-top: 34rpx;
		display: flex;

		.small-congra {
			width: 92rpx;
			height: 42rpx;
			text-align: center;
			background: url(http://localhost:4000/public/images/gongxi@3x.png) no-repeat center center/92rpx 42rpx;
			font-size: 28rpx;
			color: rgb(222, 176, 98);
			margin-right: 6rpx;
		}

		.congra-text {
			font-size: 30rpx;
			color: rgb(169, 140, 79);
		}
	}

	.become-button {
		margin-top: 38rpx;
		width: 686rpx;
		height: 80rpx;
		border-radius: 16rpx;
		background-color: #fcf1d3;
		font-size: 42rpx;
		color: rgb(169, 140, 79);
		line-height: 80rpx;
		text-align: center;
		font-weight: 700;
	}

	.popup-content {
		position: relative;
		padding: 20rpx 20rpx;

		.popup-title {
			margin-bottom: 50rpx;
			text-align: center;
		}

		.closeicon {
			position: absolute;
			top: 20rpx;
			left: 20rpx;
		}
	}
</style>
