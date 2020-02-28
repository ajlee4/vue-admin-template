<template>
  <div class="navbar">
    <hamburger
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />
    <div class="menu-right">
      <Dropdown></Dropdown>
    </div>
  </div>
</template>

<script>
import Dropdown from "./Dropdown";
import Hamburger from "@/components/Hamburger";
export default {
  components: {
    Dropdown,
    Hamburger
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  computed: {
    sidebar() {
      return this.$store.getters.sidebar;
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("toggleSideBar");
    }
  }
};
</script>
