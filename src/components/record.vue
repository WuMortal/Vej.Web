<template>
  <view class="record">
    <view class="record-head">
      <view class="record-type">
        <view
          :class="{ 'record-type-income': recordType == AmountType.Income }"
          @click="recordType = AmountType.Income"
          >收入</view
        >
        <view
          :class="{ 'record-type-expenses': recordType == AmountType.Expenses }"
          @click="recordType = AmountType.Expenses"
          >支出</view
        >
      </view>
      <view class="record-date" @click="showDate = true">
        <nut-icon class="record-date-icon" name="date"></nut-icon>
        <text>{{ dateDescRef }}</text>
        <nut-icon
          font-class-name="iconfont"
          class-prefix="icon"
          class="record-date-icon"
          name="caretDown"
        ></nut-icon>
      </view>
    </view>
    <view class="record-content">
      <nut-input label="￥" placeholder="" type="number" />
    </view>
  </view>

  <nut-datepicker
    type="month-day"
    v-model="currentDate"
    v-model:visible="showDate"
    :min-date="minDate"
    :max-date="maxDate"
    :is-show-chinese="true"
    @confirm="dataConfirm"
  />
</template>
<script lang="ts" setup>
import { Input, Icon, Grid, GridItem, Popup } from "@nutui/nutui-taro";
import { ref } from "vue";
import { AmountType } from "./props";

const showDate = ref(false);
const showKeyBoard = ref(true);
const currentDate = new Date();
const minDate = new Date(2018, 0, 1);
const maxDate = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  currentDate.getDate()
);
const dateDescRef = ref(
  getCurrentDateDes(currentDate.getMonth() + 1, currentDate.getDate())
);

// 参数
const recordType = ref(AmountType.Income);

function getCurrentDateDes(month, day) {
  return `${month}月${day}日`;
}

const dataConfirm = ({ selectedValue, selectedOptions }) => {
  console.log(selectedValue);
  dateDescRef.value = getCurrentDateDes(selectedValue[0], selectedValue[1]);
  currentDate.setMonth(selectedValue[0] - 1, selectedValue[1]);
};
</script>

<style lang="scss">
.record {
  padding: 60px 23px 16px 26px;
  &-head {
    display: flex;
    justify-content: space-between;
  }
  &-type > view,
  &-date {
    background-color: #f7f7f7;
    color: #c7c7c7;
    height: 36px;
    line-height: 36px;
    border-radius: 4px;
  }
  &-type {
    display: flex;
    flex-direction: row;
    width: 100%;
    & > view {
      width: 66px;
      text-align: center;
      font-size: 14px;
      margin-right: 16px;
    }
    &-income {
      color: #fff !important;
      background-color: #4fc08d !important;
    }
    &-expenses {
      color: #fff !important;
      background-color: #f3812e !important;
    }
  }
  &-date {
    color: #000;
    display: flex;
    width: 150px;
    font-size: 12px;
    justify-content: space-between;
    padding: 0px 6px;
    &-icon {
      margin: 0 1px;
      height: 36px;
      line-height: 36px;
    }
  }
  &-content {
    height: 100%;
  }
}
</style>