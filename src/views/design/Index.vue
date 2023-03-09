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
import LayoutTop from "./layout/Top.vue";
import layoutComponentList from "./layout/Left.vue";
import LayoutPreview from "./layout-preview/Index.vue";
import LayoutSortable from "./layout/Right.vue";
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
