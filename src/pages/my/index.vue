<template>
  <view class="index">
    <view class="info">
      <nut-avatar @click="loginHandle()" class="info-avatar" size="large" icon="../../assets/images/default_avatar.png"></nut-avatar>
      <view class="info-name">点击头像登录</view>
    </view>
    <view class="function">
      <ul class="function-list">
        <li class="function-list-item" @click="()=>{Taro.navigateTo({url:'/pages/user/user_info'})}">
          <view class="function-list-item-text">
            <nut-icon class="function-list-item-icon" name="my" />
            <text>我的资料</text>
          </view>
          <nut-icon class="function-list-item-icon" name="right"></nut-icon>
        </li>
        <li class="function-list-item" @click="()=>{Taro.navigateTo({url:'/pages/account_book/my_account_book'})}">
          <view class="function-list-item-text">
            <nut-icon class="function-list-item-icon" font-class-name="iconfont" class-prefix="icon" name="accountbook" />
            <text style="line-height:29px">我的账簿</text>
          </view>
          <nut-icon class="function-list-item-icon" name="right"></nut-icon>
        </li>

        <li class="function-list-item" @click="()=>{Taro.navigateTo({url:'/pages/contact/index'})}">
          <view class="function-list-item-text">
            <nut-icon class="function-list-item-icon" font-class-name="iconfont" class-prefix="icon" name="lianxiren" />
            <text>联系人管理</text>
          </view>
          <nut-icon class="function-list-item-icon" name="right"></nut-icon>
        </li>
        <li class="function-list-item" @click="()=>{Taro.navigateTo({url:'/pages/company/index'})}">
          <view class="function-list-item-text">
            <nut-icon class="function-list-item-icon" font-class-name="iconfont" class-prefix="icon" name="mendian" />
            <text>联系公司/门店管理</text>
          </view>
          <nut-icon class="function-list-item-icon" name="right"></nut-icon>
        </li>
        <li class="function-list-item" @click="()=>{Taro.navigateTo({url:'/pages/company/index'})}">
          <view class="function-list-item-text">
            <nut-icon class="function-list-item-icon" font-class-name="iconfont" class-prefix="icon" name="cailiao" />
            <text>商品/耗材管理</text>
          </view>
          <nut-icon class="function-list-item-icon" name="right"></nut-icon>
        </li>
        <li class="function-list-item" @click="()=>{Taro.navigateTo({url:'/pages/utils/feedback'})}">
          <view class="function-list-item-text">
            <nut-icon class="function-list-item-icon" name="message" />
            <text>反馈/建议</text>
          </view>
          <nut-icon class="function-list-item-icon" name="right"></nut-icon>
        </li>
      </ul>
    </view>
  </view>
</template>
<script lang="ts" setup>
import "../../assets/css/common.scss";
import "../../assets/images/default_avatar.png";
import Taro from "@tarojs/taro";

const loginHandle = () => {
  Taro.login({
    success: function (res) {
      if (res.code) {
        //发起网络请求
        Taro.request({
          url: "https://vej-api.amortal.cn/api/account/wechatLogin",
          data: {
            code: res.code,
          },
        });
      } else {
        console.log("登录失败！" + res.errMsg);
      }
    },
  });
};
</script>
<style lang="scss">
.info {
  text-align: center;
  &-name {
    width: 90px;
    font-size: 14px;
    margin: 5px auto;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

$list-item-height: 28px;
.function {
  padding-top: 10px;
  height: calc(100% - 125px);
  overflow-y: auto;
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

      &:active {
        background-color: #f7f7f7;
      }
    }
  }
}
</style>
