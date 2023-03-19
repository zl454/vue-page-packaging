<template>
  <div class="design-layout">
    <layout-top />
    <layout-component-list />
    <layout-preview />
    <!-- <layout-form /> -->
    <layout-sortable />
    <!-- <layout-page /> -->
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<script setup lang="ts">
import LayoutTop from "./layout/top.vue";
import layoutComponentList from "./layout/left.vue";
import LayoutPreview from "./layout-preview/index.vue";
import LayoutSortable from "./layout/right.vue";
</script>

<style lang="scss" scoped>
.design-layout {
  display: block;
  position: relative;
  min-width: 100%;
  min-height: 100%;
  height: 100%;
  background: #edeff2;
}
</style>
