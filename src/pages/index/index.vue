<template>
  <view class="index">
    <view class="info">
      <nut-grid class="info-overview" :column-num="4">
        <nut-grid-item class="info-overview-item" v-for="info in overviewInfo" :key="info.text">
          <text class="info-overview-item-val" :style="info.valStyle">{{ info.value }}</text>
          <text class="info-overview-item-text" :style="info.textStyle">{{ info.text }}</text>
        </nut-grid-item>
      </nut-grid>
      <view class="info-date" @click="show = true">
        <nut-icon class="info-date-icon" name="date"></nut-icon>
        <text>{{ dateDescRef }}</text>
        <nut-icon font-class-name="iconfont" class-prefix="icon" class="info-date-icon" name="caretDown"></nut-icon>
      </view>
      <nut-datepicker type="year-month" v-model="currentDate" v-model:visible="show" :min-date="minDate" :max-date="maxDate" :is-show-chinese="true" @confirm="confirm"></nut-datepicker>
    </view>
    <view id="scroll" class="accountbook" style="height: calc(100% - 120px);">
      <nut-infiniteloading containerId="scroll" load-icon="loading" pull-icon="loading" :use-window="false" :has-more="hasMore" @load-more="loadMore">
        <li class="infiniteLi" v-for="(item, index) in [1,12,1,1,1,,1,1,1,1,1,1,12,1,1,1,,1,1,1,1,12,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1]" :key="index">{{item}}</li>
      </nut-infiniteloading>
      <nut-button type="primary" icon="edit" class="accountbook-create">记一笔</nut-button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import "../../assets/css/common.scss";

const overviewInfo = [
  {
    text: "本月总额",
    value: "￥8888.11",
    textStyle: "font-size:15px;",
    valStyle: "font-size:13px;font-weight: bold;",
  },
  { text: "已完成单", value: 0 },
  { text: "未完成单", value: 0 },
  { text: "待结清单", value: 0 },
];
const show = ref(false);
const currentDate = new Date();
const minDate = new Date(2018, 0, 1);
const maxDate = new Date(currentDate.getFullYear(), 11, 1);
const dateDescRef = ref(
  getCurrentDateDes(currentDate.getFullYear(), currentDate.getMonth() + 1)
);

const confirm = ({ selectedValue, selectedOptions }) => {
  dateDescRef.value = getCurrentDateDes(selectedValue[0], selectedValue[1]);
};

function getCurrentDateDes(year, month) {
  return `${year}年${month}月`;
}
</script>

<style lang="scss">
.info {
  text-align: left;
  &-overview {
    height: calc(100% - 32px);
    border: 0px;
    &-item {
      &-text {
        font-size: 12px;
        font-weight: bold;
        margin-top: 8px;
      }
      &-val {
        font-size: 11px;
        width: 70px;
        overflow: hidden;
        text-align: center;
        text-overflow: ellipsis;
      }
      & view {
        background-color: #fa2a27;
        border: 0px;
      }
    }
  }
  &-date {
    display: flex;
    width: 150px;
    margin: 6px 0px;
    line-height: 20px;
    height: 20px;
    font-size: 12px;
    &-icon {
      margin: 0 1px;
    }
  }
}

.accountbook {
  height: calc(100% - 110px);
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  &-create {
    position: absolute;
    text-align: right;
    bottom: 36px;
    right: 20px;
  }
}
</style>
