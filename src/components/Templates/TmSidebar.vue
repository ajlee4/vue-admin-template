<template>
  <div class="sidebar-container">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-scrollbar wrap-class="scrollbar-wrapper">
     <Logo/>

        <el-menu
          :default-active="activeMenu"
          class="el-menu-vertical-demo"
          background-color="#1f2d3d"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="isCollapse"
        >
          <div>
            <router-link to="/">
              <el-menu-item index="0" class="submenu-title-noDropdown">
                <i
                  class="el-icon-s-data
"
                ></i>
                <span>Панель управления</span>
              </el-menu-item>
            </router-link>
          </div>
          <div>
            <router-link to="/news">
              <el-menu-item index="6" class="submenu-title-noDropdown">
                <i
                  class="el-icon-s-promotion
"
                ></i>
                <span>Новости</span>
              </el-menu-item>
            </router-link>
          </div>
          <div>
            <!-- <router-link to="/pages">
              <el-menu-item index="1" class="submenu-title-noDropdown">
                <i
                  class="el-icon-document-copy
"
                ></i>
                <span>Страницы</span>
              </el-menu-item>
            </router-link> -->
          </div>

          <div>
            <router-link to="/banner">
              <el-menu-item index="111" class="submenu-title-noDropdown">
                <i
                  class="el-icon-picture
"
                ></i>
                <span>Баннеры</span>
              </el-menu-item>
            </router-link>
          </div>
          <div>
            <router-link to="/branch-offices">
              <el-menu-item index="25" class="submenu-title-noDropdown">
                <i
                  class="el-icon-s-shop
"
                ></i>
                <span>Филиалы</span>
              </el-menu-item>
            </router-link>
            <router-link to="/teachers">
              <el-menu-item index="22" class="submenu-title-noDropdown">
                <i
                  class="el-icon-s-custom
"
                ></i>
                <span>Преподователи</span>
              </el-menu-item>
            </router-link>
            <router-link to="/reviews">
              <el-menu-item index="10" class="submenu-title-noDropdown">
                <i
                  class="el-icon-s-comment
"
                ></i>
                <span>Отзывы</span>
              </el-menu-item>
            </router-link>
          </div>
          <div>
            <el-submenu index="1" class="submenu-title-noDropdown">
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
          </div>
          <div>
            <el-submenu index="4" class="submenu-title-noDropdown">
              <template slot="title">
                <i class="el-icon-reading"></i>
                <span>Тестирование</span>
              </template>
              <router-link to="/test-category">
                <el-menu-item index="4-1">Категории</el-menu-item>
              </router-link>
              <router-link to="/test-level">
                <el-menu-item index="4-2">Уровень</el-menu-item>
              </router-link>

              <router-link to="/test-question">
                <el-menu-item index="4-3">Вопросы</el-menu-item>
              </router-link>
            </el-submenu>
          </div>
          <div>
            <router-link to="/resourse">
              <el-menu-item index="10" class="submenu-title-noDropdown">
                <i
                  class="el-icon-folder
"
                ></i>
                <span>Ресурсы</span>
              </el-menu-item>
            </router-link>
          </div>
          <div>
            <router-link to="/calendar">
              <el-menu-item index="30" class="submenu-title-noDropdown">
                <i
                  class="el-icon-date
"
                ></i>
                <span>Календарь</span>
              </el-menu-item>
            </router-link>
          </div>
          <div>
            <router-link to="/resourse-localization">
              <el-menu-item index="30" class="submenu-title-noDropdown">
                <i
                  class="el-icon-discover
"
                ></i>
                <span>Локализация</span>
              </el-menu-item>
            </router-link>
          </div>
          <div>
            <!-- <el-submenu index="21" class="submenu-title-noDropdown">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>Компоненты</span>
              </template>

              <router-link to="/layout-components">
                <el-menu-item index="8"
                  ><span>Layout components</span></el-menu-item
                >
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
            </el-submenu> -->
          </div>
        </el-menu>
      </el-scrollbar>
    </el-scrollbar>
  </div>
</template>
<script>
import {Logo} from '@/components'
export default {
  props: {
    sidebarVisible: Boolean,
  },
  components:{
    Logo,
  },
  computed: {
    isCollapse() {
      return !this.$store.getters.sidebar.opened;
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
  },
  created() {
    console.log(this.$route);
  },
};
</script>
<style lang="scss">
.aside {
  &__logo {
    margin-bottom: 20px;
    padding: 10px 5px;
    display: block;
    max-width: 100%;
    svg {
      max-width: 100%;
    }
  }
}
.logo {
  .name {
    fill: #ffffff;
  }
  .circle {
    fill: #003e7e;
  }
}
</style>
