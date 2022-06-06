<template>
  <view class="item">
    <view class="item-title">
      <text>{{ props.dateDesc }}</text>
      <view class="item-title-amount">
        <nut-tag v-if="props.amountType == AmountType.Income" type="success">入</nut-tag>
        <nut-tag v-else-if="props.amountType == AmountType.Expenses" type="warning">出</nut-tag>
        <view class="item-title-amount-number">{{'￥'+ props.amount }}</view>
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
    text-align: right;
    font-weight: bold;
    &-amount {
      font-size: 13px;
      display: flex;
      width: 100px;
      font-weight: 550;
      &-number {
        width: 90px;
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