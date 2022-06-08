<template>
  <view>
    <nut-searchbar v-model="searchValue" placeholder="请输入概要、联系人、公司（门店）或备注">
      <template v-slot:leftin>
        <nut-icon size="14" name="search2"></nut-icon>
      </template>
    </nut-searchbar>
  </view>
</template>
<script lang="ts" setup>
</script>

<style>
</style>