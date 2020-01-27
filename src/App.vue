<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  font-family: "Helvetica";
}
</style>

<script>
import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";
export default {
  components: {
    MainLayout,
    AuthLayout
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "main") + "-layout";
    }
  }
};
</script>
