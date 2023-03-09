<template>
  <div class="design-layout__preview">
    <div class="main-layout">
      <div class="is-empity">666</div>
    </div>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<script setup lang="ts">
// import HelloWorld from './view/HelloWorld.vue'
</script>

<style lang="scss" scoped>
.design-layout__preview {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100%;
  padding-top: 114px;
  padding-bottom: 100px;
  overflow-y: scroll;
  .main-layout {
    position: relative;
    margin: 0 auto;
    width: 375px;
    min-height: 667px;
    background: #fff;
    box-shadow: -10px 20px 30px 0px rgba(192, 197, 205, 0.8);
  }
}
</style>
