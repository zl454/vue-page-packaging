<template>
  <div class="design-layout__top">
    <div class="middle">
      <div style="display: flex">
        <span class="page-name__label">页面名称： </span
        ><a-input
          class="page-name__input"
          v-model.trim="pageName"
          placeholder="请输入页面名称"
        ></a-input>
      </div>
    </div>
    <div :span="4" class="right">
      <a-button class="btn">返回列表</a-button>
      <a-button class="btn" type="primary">保存</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
const pageName = ref("");
const toList = () => {};
const savePage = () => {};
</script>

<style lang="scss" scoped>
.design-layout__top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 56px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 2px 0px 8px 0px rgba(188, 195, 206, 1);
  z-index: 3;
  display: flex;
  justify-content: flex-end;
  .middle {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #3f4245;
    font-size: 18px;
    font-weight: 600;
    .page-name__label {
      font-size: 15px;
      font-weight: bold;
      line-height: 35px;
      color: #29ba9c;
      white-space: nowrap;
    }
    .page-name__input {
      width: 300px;
    }
  }
  .right {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    line-height: 50px;
    align-items: center;
    margin-left: 30px;
    .btn {
      width: 96px;
      height: 100%;
    }
  }
}
</style>
