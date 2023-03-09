<template>
  <div class="design-layout__right">Left</div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<script setup lang="ts">
// import HelloWorld from './view/HelloWorld.vue'
</script>

<style lang="scss" scoped>
.design-layout__right {
  position: fixed;
  right: 0;
  top: 56px;
  bottom: 0;
  width: 300px;
  height: 100%;
  background: #fff;
  z-index: 1;
}
</style>
