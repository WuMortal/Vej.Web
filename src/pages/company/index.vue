<template>
  <view class="container">
    <view class="company-info">
      <nut-elevator :index-list="dataList" :height="'100%'" @click-item="clickItem" @click-index="clickIndex"></nut-elevator>
    </view>

    <nut-button block type="primary" @click="showAddNew = true">新增客户/供应商</nut-button>
  </view>

  <nut-popup pop-class="popclass" position="bottom" closeable close-icon-position="top-left" close-icon="close" round :style="{ height: '75%' }" v-model:visible="showAddNew" :z-index="100">
    <view class="company-addNew">
      <view class="company-addNew-info">
        <nut-form>
          <nut-form-item label="名称">
            <input class="nut-input-text" placeholder="请输入名称" type="text" max-length="50" />
          </nut-form-item>
          <nut-form-item label="联系人姓名">
            <input class="nut-input-text" placeholder="请输入联系人姓名" type="text" max-length="20" />
          </nut-form-item>
          <nut-form-item label="联系人电话">
            <input class="nut-input-text" placeholder="请输入联系人电话" type="tel" max-length="20" />
          </nut-form-item>
          <nut-form-item label="往来类型">
            <nut-radiogroup direction="horizontal" v-model="relatedCompanyType">
              <nut-radio shape="button" label="1">客户</nut-radio>
              <nut-radio shape="button" label="2">供应商</nut-radio>
            </nut-radiogroup>
          </nut-form-item>
          <nut-form-item label="地址">
            <input class="nut-input-text" placeholder="请输入地址" type="text" max-length="100" />
          </nut-form-item>
          <nut-form-item label="备注">
            <input class="nut-input-text" placeholder="请输入备注" type="text" max-length="200" />
          </nut-form-item>
        </nut-form>
      </view>
      <nut-button block type="primary" @click="()=>{}">保存</nut-button>
    </view>
  </nut-popup>
</template>
<script lang="ts" setup>
import {
  Elevator,
  Button,
  Input,
  Form,
  FormItem,
  Rradio,
  RadioGroup,
} from "@nutui/nutui-taro";
import { reactive, ref } from "vue";

const showAddNew = ref(false);
const acceptKey = "num";

const relatedCompanyType = ref("1");
const dataList = [
  {
    title: "A",
    list: [
      {
        name: "阿里巴巴",
        id: 1,
      },
    ],
  },
  {
    title: "B",
    list: [
      {
        name: "巴拉巴拉",
        id: 2,
      },
    ],
  },
  {
    title: "G",
    list: [
      {
        name: "鸽鸽",
        id: 3,
      },
      {
        name: "广东",
        id: 4,
      },
    ],
  },
  {
    title: "H",
    list: [
      {
        name: "湖南",
        id: 5,
      },
      {
        name: "湖北",
        id: 6,
      },
    ],
  },
];

const clickItem = (key: string, item: any) => {
  console.log(key, JSON.stringify(item));
};

const clickIndex = (key: string) => {
  console.log(key);
};
</script>

<style lang="scss">
.container {
  height: 100%;
  padding: 10px 10px 40px 10px;
}

.company-info {
  height: calc(100% - 88px);
  margin-bottom: 10px;
}

.company-addNew {
  height: calc(100% - 56px);
  padding: 40px 26px 16px 26px;
  overflow-y: auto;
  &-info {
    margin-bottom: 10px;
    height: calc(100% - 68px);
    overflow-y: auto;
    & .nut-cell {
      padding: 13px 0px !important;
    }
  }
}
</style>