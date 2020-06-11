<template>
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
</template>