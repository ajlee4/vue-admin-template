<template>
  <div class="main">
    <el-container>
      <Sidebar :sidebarVisible="sidebarVisible"></Sidebar>
      <el-container
        direction="vertical"
        class="content"
        :class="sidebarVisible ? 'openSidebar' : 'hideSidebar'"
      >
        <Navbar @sidebarShow="sidebarShow"></Navbar>

        <el-main>
          <transition name="fade-transform" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
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
  data() {
    return {
      sidebarVisible: true
    };
  },
  methods: {
    sidebarShow() {
      this.sidebarVisible = !this.sidebarVisible;
    
    }
  }
};
</script>

<style lang="scss">
.el-main {
  overflow-x: hidden !important;
}
</style>
