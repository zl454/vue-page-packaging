<template>
  <div class="design-layout__left">
    <div
      v-for="category in categoryList"
      :key="category.id"
      :class="{
        'components-category': true,
        'slide-up': !selectedCategorys.includes(category.id),
        'slide-down': selectedCategorys.includes(category.id),
      }"
    >
      <h3 @click="handleSlide(category.id)">
        <caret-down-outlined />
        {{ category.title }}
      </h3>

      <!-- 组件列表，拖拽 -->
      <draggable
        tag="ul"
        class="dragArea components-list"
        :list="category.components"
        item-key="id"
        :sort="false"
        :clone="createCloneComponent"
        :group="{ name: 'people', pull: 'clone', put: false }"
      >
        <!-- 子项 -->
        <!-- <i :class="`iconfont ${components.icon}`"></i> -->
        <template #item="{ element }">
          <div>{{ element.title }}</div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import draggable from "vuedraggable";
const categoryList = ref([
  {
    id: 1,
    title: "基础组件",
    components: [
      {
        id: 1,
        title: 222,
        icon: 333,
      },
    ],
  },
  {
    id: 2,
    title: "店铺组件",
    components: [
      {
        id: 1,
        title: 222,
        icon: 333,
      },
    ],
  },
  {
    id: 3,
    title: "营销组件",
    components: [
      {
        id: 1,
        title: 222,
        icon: 333,
      },
    ],
  },
]);
const selectedCategorys = ref([1, 2, 3]);

/**
 * 展开，收缩分类数据
 * @param {Number|String} category_id 分类ID
 */
const handleSlide = (id: number) => {
  if (selectedCategorys.value.includes(id)) {
    selectedCategorys.value = selectedCategorys.value.filter((x) => x !== id);
  } else {
    selectedCategorys.value.push(id);
  }
};
const createCloneComponent = () => {};
</script>

<style lang="scss" scoped>
.design-layout__left {
  position: fixed;
  left: 0;
  top: 56px;
  bottom: 0;
  width: 250px;
  height: 100%;
  padding: 16px;
  background: #fff;
  z-index: 1;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
  .components-category {
    h3 {
      position: relative;
      font-size: 14px;
      font-weight: 500;
      color: rgba(63, 66, 69, 1);
      height: 32px;
      line-height: 32px;
      margin-bottom: 0px;
      cursor: pointer;
      i {
        color: #aeb1b3;
      }
    }

    // 列表
    ul {
      list-style: none;
      padding: 0px;
      margin: 0px;
      padding-top: 16px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      li {
        flex-shrink: 0;
        color: #6b7075;
        width: 96px;
        height: 64px;
        border: solid 1px #e9eaec;
        box-sizing: border-box;
        text-align: center;
        margin-bottom: 16px;
        border-radius: 4px;
        cursor: move;
        // 图标
        i {
          font-size: 24px;
        }
        // 文案
        p {
          font-size: 12px;
        }
      }

      // 选中状态
      li {
        &:hover,
        &.is-chosen {
          background: #29ba9c;
          border-color: #29ba9c;
          color: #fff;
        }
      }
    }
  }

  // 组件列表的样式状态
  .components-category {
    // 展示组件数据
    .anticon-caret-down {
      transition: all 0.5s;
    }
    // 隐藏组件数据
    &.slide-up {
      // 箭头图标
      .anticon-caret-down {
        transform: rotate(180deg);
      }
      ul {
        display: none;
      }
    }
  }
}
</style>
