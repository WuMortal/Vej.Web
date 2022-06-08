<template>
  <view>
    <nut-form>
      <nut-form-item label="姓名">
        <input class="nut-input-text" placeholder="请输入姓名" type="text" />
      </nut-form-item>
      <nut-form-item label="年龄">
        <input class="nut-input-text" placeholder="请输入年龄" type="text" />
      </nut-form-item>
      <nut-form-item label="联系电话">
        <input class="nut-input-text" placeholder="请输入联系电话" type="text" />
      </nut-form-item>
      <nut-form-item label="地址">
        <input class="nut-input-text" placeholder="请输入地址" type="text" />
      </nut-form-item>
      <nut-form-item label="备注">
        <nut-textarea placeholder="请输入备注" type="text" />
      </nut-form-item>
    </nut-form>
  </view>
</template>
<script lang="ts" setup>
import { basicProps } from "../../components/account_book_item/props";
const props = defineProps({ ...basicProps });
</script>

<style lang="scss">
</style>