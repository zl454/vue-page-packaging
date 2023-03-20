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
        <template #item="{ element }">
          <li>
            <i :class="`iconfont ${element.icon}`"></i>
            <div>{{ element.component_title }}</div>
          </li>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import Vdc from "@/core/vdc/vdc";
import draggable from "vuedraggable";
import { getComponentsDataInterface, getTemplateListInterface } from "@/api";
const categoryList = ref([
  {
    id: 1,
    title: "基础组件",
    components: [],
  },
  {
    id: 2,
    title: "店铺组件",
    components: [],
  },
  {
    id: 3,
    title: "营销组件",
    components: [],
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
/**
 * 开始拖拽，复制拖拽对象
 * @param {Object} dragData 拖拽对象数据
 * @returns {Vdc} 返回复制的对象
 */
const createCloneComponent = (dragData) => {
  // 创建组件实例
  const vdc = new Vdc({
    component_key: dragData.component_key,
    component_title: dragData.component_title,
    template_id: dragData.template_id,
    template_name: dragData.template_name,
    template_title: dragData.template_title,
    template_list: dragData.template_list,
  });
  if (vdc.component_key == "L000001") {
    vdc["tasks"] = [];
  }
  console.log(vdc);

  return vdc;
};
/**
 * 获取组件列表数据
 */
const getComponentsData = async () => {
  const componentList = await getComponentsDataInterface();
  const templateList = await getTemplateListInterface();
  const list = componentList.data.map((item) => {
    // 提取必要的字段
    const cmpt = {
      id: item.id,
      component_key: item.component_key,
      component_title: item.name,
      icon: item.icon || "",
      template_id: Number(item.tpl_id) || 0,
      templateList: templateList.data.filter(
        (tmp) => tmp.component_key == item.component_key
      ),
      category_id: item.category_id,
      is_store: item.is_store,
    };
    // 取第一个模版信息
    if (cmpt.templateList.length > 0) {
      cmpt.template_title = cmpt.templateList[0].name || "模版一";
      cmpt.template_name = cmpt.templateList[0].name_en || "template1";
    }
    return cmpt;
  });
  categoryList.value.map((cat) => {
    list.map((x) => {
      if (x.category_id == cat.id) {
        cat.components.push(x);
      }
    });
  });
  console.log(categoryList.value);
};
onBeforeMount(async () => {
  await getComponentsData();
});
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
    user-select: none;
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
