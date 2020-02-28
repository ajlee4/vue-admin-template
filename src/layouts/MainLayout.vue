<template>
  <div :class="classObj" class="app-wrapper">
    <Sidebar></Sidebar>
    <div class="main-container">
      <Navbar @sidebarShow="sidebarShow"></Navbar>

      <el-main class="app-main">
        <transition name="fade-transform" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default {
  name: "main-layout",
  components: {
    Sidebar,
    Navbar
  },

  methods: {
    sidebarShow() {
      this.sidebarVisible = !this.sidebarVisible;
    }
  },
  computed: {
    sidebar() {
      return this.$store.getters.sidebar;
    },
    device() {
      return this.$store.getters.device;
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile"
      };
    }
  }
};
</script>

<style lang="scss">
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header + .app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
