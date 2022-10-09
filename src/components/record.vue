<template>
  <view class="record">
    <view class="head">
      <view>收入</view>
      <view>支出</view>
      <view class="info-date" @click="showDate = true">
        <nut-icon class="info-date-icon" name="date"></nut-icon>
        <text>{{ dateDescRef }}</text>
        <nut-icon
          font-class-name="iconfont"
          class-prefix="icon"
          class="info-date-icon"
          name="caretDown"
        ></nut-icon>
      </view>
    </view>
  </view>

  <nut-datepicker
    type="year-month"
    v-model="currentDate"
    v-model:visible="showDate"
    :min-date="minDate"
    :max-date="maxDate"
    :is-show-chinese="true"
    @confirm="confirm"
  />
</template>
<script lang="ts" setup>
import { Grid, GridItem } from "@nutui/nutui-taro";
import { ref } from "vue";

const showDate = ref(false);
const currentDate = new Date();
const minDate = new Date(2018, 0, 1);
const maxDate = new Date(currentDate.getFullYear(), 11, 1);
const dateDescRef = ref(
  getCurrentDateDes(currentDate.getFullYear(), currentDate.getMonth() + 1)
);

function getCurrentDateDes(year, month) {
  return `${year}年${month}月`;
}
</script>