<template>
  <div v-if="!item.hidden">
    <router-link
      :to="url"
      v-if="
        hasOneShowingChild(item.children, item) &&
          (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
          !item.alwaysShow
      "
    >
      <el-menu-item :index="item.path">
        <i :class="item.meta.icon"></i>
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
    </router-link>
    <el-submenu v-else ref="subMenu" :index="item.path" popper-append-to-body>
      <template slot="title">
        <i :class="item.meta.icon"></i>
        <span v-if="item.meta">{{ item.meta.title }}</span>
      </template>
      <div
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        class="nest-menu"
      >
        <router-link :to="child.path">
          <el-menu-item :index="child.path">{{
            child.meta.title
          }}</el-menu-item>
        </router-link>
      </div>
    </el-submenu>
  </div>
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
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          this.onlyOneChild = item;
          return true;
        }
      });
      if (showingChildren.length === 1) {
        return true;
      }
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
        return true;
      }

      return false;
    },
  },
};
</script>
