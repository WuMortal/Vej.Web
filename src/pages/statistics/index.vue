<template>
  <view class="index">
    <view class="info">
      <nut-cell title="显示中文" :desc="desc" @click="show = true"></nut-cell>
      <nut-datepicker type="year-month" v-model="currentDate" v-model:visible="show" :min-date="minDate" :max-date="currentDate" :is-show-chinese="true" @confirm="confirm"></nut-datepicker>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import "../../assets/css/common.scss";
const show = ref(false);
const desc = ref("2022年05月10日");
const minDate = new Date(2020, 0, 1);
const currentDate = new Date();
const confirm = ({ selectedValue, selectedOptions }) => {
  desc.value = selectedOptions.map((option) => option.text).join("");
};
</script>

<style lang="scss">
</style>
