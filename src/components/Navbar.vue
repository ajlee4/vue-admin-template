<template>
  <el-header>
    <div class="burger-box" @click="toggleMenuOpen">
      <i :class="burgerOpen ? 'el-icon-s-fold' : 'el-icon-s-unfold'"></i>
    </div>
    <div class="menu-right">
      <Dropdown></Dropdown>
    </div>
  </el-header>
</template>
<style lang="scss">
.el-header {
  display: flex;
  align-items: center;
  background-color: #303133;
  padding-left: 0 !important;
}
.menu-right {
  margin-left: auto;
}
.burger-box {
  cursor: pointer;
  padding: 0 20px;
  display: block;
  height: 100%;
  display: flex;
  align-items: center;
  transition: 0.3s;
  &:hover {
    background-color: lighten($color: #303133, $amount: 10%);
  }
  i {
    background-color: #fff;
  }
}
</style>

<script>
import Dropdown from "./Dropdown";
export default {
  components: {
    Dropdown
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      burgerOpen: true
    };
  },
  methods: {
    toggleMenuOpen() {
      this.burgerOpen = !this.burgerOpen;
      this.$emit("sidebarShow");
    }
  }
};
</script>
