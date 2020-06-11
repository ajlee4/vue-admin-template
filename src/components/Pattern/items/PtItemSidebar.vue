<template>
  <router-link :to="url">
    <el-menu-item :index="item.path">
      <i :class="item.meta.icon"></i>
      <span>{{ item.meta.title }}</span>
    </el-menu-item>
  </router-link>
</template>

<script>
export default {
  props: {
    classIcon: {
      type: String,
    },
    url: {
      type: String,
    },
    item: {
      type: Object,
    },
  },
};
</script>
