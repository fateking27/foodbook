<template>
  <view class="pay-success-container">
    <view class="top-box">
      <image src="http://localhost:4000/public/images/di@3x.png" class="bgi"></image>
      <image src="http://localhost:4000/public/images/wancheng@3x.png" class="yesi"></image>
      <image src="http://localhost:4000/public/images/zhingjia@3x.png" class="circlei"></image>
      <image src="http://localhost:4000/public/images/wanchengtupian@3x.png" class="iconi"></image>
      <text class="success-text">支付成功</text>
      <text class="success-paynum">已支付￥{{payNum}}</text>
    </view>
    <view class="share-text">立即分享 领取豪礼</view>
    <view class="share-btn" @click="shareHandler">立即分享</view>
    <view class="index-btn" @click="gotoIndex">返回首页</view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        payNum: 0
      };
    },
    onLoad(options) {
      this.payNum=options.payNum
    },
    methods:{
      shareHandler(){
        uni.$showMsg('该功能暂未开放，敬请期待')
      },
      gotoIndex(){
        uni.switchTab({
        	url: '/pages/index/index',
        })
      },
    }
  }
</script>

<style lang="scss">
  .pay-success-container {

    .top-box {
      position: relative;
      width: 100%;
      height: 550rpx;
      margin-bottom: 150rpx;

      .bgi {
        position: absolute;
        top: 0;
        width: 100%;
        height: 550rpx;
      }

      .yesi {
        position: absolute;
        top: 50rpx;
        left: 50%;
        transform: translateX(-50%);
        height: 96rpx;
        width: 96rpx;
      }

      .circlei {
        position: absolute;
        bottom: -50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 314rpx;
        width: 314rpx;
      }

      .iconi {
        position: absolute;
        bottom: -75rpx;
        left: 50%;
        transform: translateX(-50%);
        height: 200rpx;
        width: 200rpx;
      }

      .success-text {
        color: white;
        position: absolute;
        top: 180rpx;
        left: 50%;
        transform: translateX(-50%);
        font-size: 50rpx;
      }

      .success-paynum {
        color: white;
        position: absolute;
        top: 270rpx;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .share-text {
      text-align: center;
      font-size: 40rpx;
    }

    .share-btn {
      width: 542rpx;
      height: 90rpx;
      background-image: linear-gradient(270deg,
          #ffae25 0%,
          #ff8e1d 100%);
      border-radius: 86rpx;
      color: white;
      line-height: 90rpx;
      text-align: center;
      font-size: 36rpx;
      margin: 40rpx auto;
    }

    .index-btn {
      width: 542rpx;
      height: 90rpx;
      border-radius: 86rpx;
      border: solid 2rpx #ff921e;
      line-height: 90rpx;
      text-align: center;
      font-size: 36rpx;
      margin: 40rpx auto;
      color: #ff921e;
    }
  }
</style>
