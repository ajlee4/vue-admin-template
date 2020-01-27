<template>
  <div class="main">
    <el-container>
      <Sidebar></Sidebar>
      <el-container direction="vertical">
        <Navbar></Navbar>

       
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
  }
};
</script>
