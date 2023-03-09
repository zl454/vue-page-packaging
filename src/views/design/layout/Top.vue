<template>
  <div class="design-layout__top">Top</div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<script setup lang="ts">
// import HelloWorld from './view/HelloWorld.vue'
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
}
</style>
