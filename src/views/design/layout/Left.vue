<template>
  <div class="design-layout__left">Left</div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<script setup lang="ts">
// import HelloWorld from './view/HelloWorld.vue'
</script>

<style lang="scss" scoped>
.design-layout__left {
  position: fixed;
  left: 0;
  top: 56px;
  bottom: 0;
  width: 250px;
  height: 100%;
  background: #fff;
  z-index: 1;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
}
</style>
