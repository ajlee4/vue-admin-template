<template>
  <el-aside
    width="200px"
    class="aside"
    :class="sidebarVisible ? 'show' : 'hide'"
  >
    <router-link to="/" class="aside__logo">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Logo_Google_2013_Official.svg"
        alt
      />
    </router-link>

    <el-menu
      default-active="0"
      class="el-menu-vertical-demo"
      background-color="#393942"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <li class="sidebar-list-item-title">
        Основное
      </li>
      <router-link to="/">
        <el-menu-item index="0">
          <i
            class="el-icon-s-home
"
          ></i>
          <span>Главная</span>
        </el-menu-item>
      </router-link>
      <router-link to="/news">
        <el-menu-item index="6">
          <i
            class="el-icon-s-promotion
"
          ></i>
          <span>Новости</span>
        </el-menu-item>
      </router-link>
      <router-link to="/pages">
        <el-menu-item index="1">
          <i
            class="el-icon-document-copy
"
          ></i>
          <span>Страницы</span>
        </el-menu-item>
      </router-link>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-platform"></i>
          <span>Курсы</span>
        </template>
        <router-link to="/course">
          <el-menu-item index="1-1">Общие разделы</el-menu-item>
        </router-link>
        <router-link to="/subcourse">
          <el-menu-item index="1-2">Направления</el-menu-item>
        </router-link>

        <router-link to="/course-single">
          <el-menu-item index="1-3">Курсы</el-menu-item>
        </router-link>
      </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span>Navigator Four</span>
      </el-menu-item>

      <li class="sidebar-list-item-title">
        Дополнительно
      </li>

      <el-submenu index="21">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>Компоненты</span>
        </template>

        <router-link to="/layout-components">
          <el-menu-item index="8"><span>Layout components</span></el-menu-item>
        </router-link>
        <router-link to="/buttons">
          <el-menu-item index="9"><span>Buttons</span></el-menu-item>
        </router-link>

        <router-link to="/form">
          <el-menu-item index="10"><span>Form</span></el-menu-item>
        </router-link>
        <router-link to="/tabs">
          <el-menu-item index="11"><span>Tabs</span></el-menu-item>
        </router-link>
        <router-link to="/table">
          <el-menu-item index="12"><span>Table</span></el-menu-item>
        </router-link>
        <router-link to="/messages">
          <el-menu-item index="13"><span>Messages</span></el-menu-item>
        </router-link>
        <router-link to="/breadcrumb">
          <el-menu-item index="14"><span>Breadcrumb</span></el-menu-item>
        </router-link>
        <router-link to="/dialog">
          <el-menu-item index="15"><span>Dialog</span></el-menu-item>
        </router-link>

        <router-link to="/pagination">
          <el-menu-item index="15"><span>Pagination</span></el-menu-item>
        </router-link>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>
<script>
export default {
  props: {
    sidebarVisible: Boolean
  },
  computed: {
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    }
  }
};
</script>
<style lang="scss">
.el-aside {
  min-height: 100vh;
  background-color: #393942;
  color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;

  z-index: 9999;
  width: 215px !important;
  transition: 0.3s;
  &.hide {
    width: 55px !important;
    .sidebar-list-item-title {
      font-size: 0;
    }
    .el-menu-item {
      span {
        display: none;
      }
    }
    .aside__logo {
      display: none;
    }
    .el-submenu__title {
      display: none;
    }
  }
  .aside {
    &__logo {
      margin-bottom: 20px;
      padding: 10px 15px;
      display: block;
      img {
        max-width: 100%;
      }
    }
  }
  a {
    text-decoration: none;
  }
  .sidebar-list-item-title {
    padding: 10px 15px;
    color: #f0eeeb;
    font-size: 14px;
  }
}
</style>
