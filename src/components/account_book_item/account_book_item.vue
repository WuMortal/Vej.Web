<template>
  <view class="item">
    <view class="item-title">
      <text>{{ props.dateDesc }}</text>
      <view class="item-title-amount">
        <nut-tag type="success">入</nut-tag>
        <view class="item-title-amount-number">{{ props.incomeAmount }}</view>

        <nut-tag type="warning">出</nut-tag>
        <view class="item-title-amount-number">{{ props.expensesAmount }}</view>
      </view>
    </view>
    <view class="item-content">123123</view>
  </view>
</template>
<script lang="ts" setup>
import { basicProps, AmountType } from "./props";
const props = defineProps({ ...basicProps });
</script>

<style lang="scss">
.item {
  width: calc(100% - 10px);
  height: 150px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #e4e8eb;
  background-color: #ffffff;
  margin: 5px;
  &-title {
    border-radius: 5px 5px 0px 0px;
    height: 40px;
    padding: 10px;
    background-color: #fbfbfb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    text-align: center;
    font-weight: bold;
    &-amount {
      font-size: 12px;
      display: flex;
      width: 160px;
      font-weight: 450;
      &-number {
        width: 60px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }

  &-content {
    height: calc(100% - 80px);
    padding: 10px;
    background-color: #fefefe;
  }
}
</style>