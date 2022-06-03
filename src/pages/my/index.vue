<template>
  <view class="index">
    <view class="user-info">
      <nut-avatar class="user-info-avatar" size="large" icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"></nut-avatar>
      <view class="user-info-name">WigorWigorWigorWigorWigorWigorWigorWigor</view>
    </view>
    <view class="function">
      <ul class="function-list">
        <li class="function-list-item">
          <view>
            <text>我的订单</text>
          </view>
          <nut-icon class="function-list-item-icon" name="right"></nut-icon>
        </li>
        <li class="function-list-item">
          <view>
            <text>我的订单</text>
          </view>
          <nut-icon class="function-list-item-icon" name="right"></nut-icon>
        </li>
        <li class="function-list-item">
          <view>
            <text>我的订单</text>
          </view>
          <nut-icon class="function-list-item-icon" name="right"></nut-icon>
        </li>
      </ul>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const state = reactive({
  msg: "欢迎使用 NutUI3.0 开发小程序",
  msg2: "你成功了～",
  type: "text",
  show: false,
  cover: false,
});

const handleClick = (type, msg, cover = false) => {
  state.show = true;
  state.msg2 = msg;
  state.type = type;
  state.cover = cover;
};
</script>
<style lang="scss">
page {
  height: 100%;
}

.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}

.user-info {
  padding-top: 20rpx;
  background-color: #fa2a27;
  color: #fff;
  height: 110px;
  &-name {
    width: 200rpx;
    margin: 15rpx auto;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.function {
  padding-top: 10rpx;
  height: calc(100% - 120px);
  background-color: #f7f7f7;
  &-list {
    &-item {
      height: 70rpx;
      line-height: 70rpx;
      text-align: left;
      background-color: #fff;
      padding: 10rpx 15rpx;
      border-bottom: 1px #f7f7f7 solid;
      display: flex;
      flex-direction: row;
      align-content: center;
      justify-content: space-between;

      &-icon {
        height: 70rpx;
      }

      &:hover {
        background-color: #f7f7f7;
      }
    }
  }
}
</style>
