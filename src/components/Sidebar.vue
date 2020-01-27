<template>
  <el-aside width="200px" class="aside">
    <router-link to='/' class="aside__logo">
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
      <router-link to="/">
        <el-menu-item index="0">
          <i class="el-icon-s-home
"></i>
          <span>Главная</span>
        </el-menu-item>
      </router-link>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item one</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-submenu>
      </el-submenu>
      <router-link to="/form">
        <el-menu-item index="5">
          <i class="el-icon-edit"></i>
          <span>Форма</span>
        </el-menu-item>
      </router-link>
     <router-link to='/table'>
          <el-menu-item index="3" >
        <i class="el-icon-document"></i>
        <span>Таблицы</span>
      </el-menu-item>
     </router-link>

      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>
<script>
export default {};
</script>
<style lang="scss">
.el-aside {
  min-height: 100vh;
  background-color: #393942;
  color: #ffffff;

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
}
</style>