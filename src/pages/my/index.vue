<template>
  <view class="index">
    <view class="user-info">
      <nut-avatar class="user-info-avatar" size="large" icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"></nut-avatar>
      <view class="user-info-name">WigorWigorWigorWigorWigorWigorWigorWigor</view>
    </view>
    <view class="function">
      <ul class="function-list">
        <li class="function-list-item">
          <view class="function-list-item-text">
            <nut-icon class="function-list-item-icon" font-class-name="iconfont" class-prefix="icon" name="accountbook" />
            <text>我的记账</text>
          </view>
          <nut-icon class="function-list-item-icon" name="right"></nut-icon>
        </li>
        <li class="function-list-item">
          <view class="function-list-item-text">
            <nut-icon class="function-list-item-icon" font-class-name="iconfont" class-prefix="icon" name="lianxiren" />
            <text>联系人管理</text>
          </view>
          <nut-icon class="function-list-item-icon" name="right"></nut-icon>
        </li>
        <li class="function-list-item">
          <view class="function-list-item-text">
            <nut-icon class="function-list-item-icon" font-class-name="iconfont" class-prefix="icon" name="mendian" />
            <text>公司/门店管理</text>
          </view>
          <nut-icon class="function-list-item-icon" name="right"></nut-icon>
        </li>
        <li class="function-list-item">
          <view class="function-list-item-text">
            <nut-icon class="function-list-item-icon" font-class-name="iconfont" class-prefix="icon" name="cialiao" />
            <text>商品/材料管理</text>
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
  padding-top: 15px;
  background-color: #fa2a27;
  color: #fff;
  height: 110px;
  &-name {
    width: 90px;
    margin: 5px auto;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

$list-item-height: 28px;
.function {
  padding-top: 10px;
  height: calc(100% - 125px);
  background-color: #f7f7f7;
  &-list {
    &-item {
      height: $list-item-height;
      line-height: $list-item-height;
      text-align: left;
      background-color: #fff;
      padding: 10px 10px;
      border-bottom: 1px #f7f7f7 solid;
      display: flex;
      flex-direction: row;
      align-content: center;
      justify-content: space-between;

      &-text {
        display: flex;
        align-content: center;
        align-items: center;
        height: 100%;
      }
      &-icon {
        height: $list-item-height !important;
        line-height: $list-item-height;
        padding: 0 5px;
      }

      &:hover {
        background-color: #f7f7f7;
      }
    }
  }
}
</style>
