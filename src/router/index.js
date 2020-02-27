import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { layout: "main" }
  },
  {
    path: "/about",
    name: "about",
    meta: { layout: "auth" },
    component: () => import("../views/About.vue")
  },
  {
    path: "/pages",
    name: "pages",
    meta: { layout: "main" },
    component: () => import("../views/Pages.vue")
  },
  {
    path: "/news",
    name: "news",
    meta: { layout: "main" },
    component: () => import("../views/NewsList.vue")
  },
  {
    path: "/news/create",
    name: "news-edit",
    component: () => import("../views/NewsAdd.vue"),
    meta: { layout: "main" }
  },
  {
    path: "/news/:id/edit",
    name: "news-single",
    component: () => import("../views/News.vue"),
    meta: { layout: "main" }
  },
  {
    path: "/layout-components",
    name: "layout-components",
    component: () => import("../views/views-components/LayoutComponents"),
    meta: { layout: "main" }
  },
  {
    path: "/buttons",
    name: "buttons",
    component: () => import("../views/views-components/Buttons"),
    meta: { layout: "main" }
  },
  {
    path: "/form",
    name: "form",
    meta: { layout: "main" },
    component: () => import("../views/views-components/Form.vue")
  },
  {
    path: "/tabs",
    name: "tabs",
    meta: { layout: "main" },
    component: () => import("../views/views-components/Tabs.vue")
  },
  {
    path: "/table",
    name: "table",
    meta: { layout: "main" },
    component: () => import("../views/views-components/Table.vue")
  },
  {
    path: "/messages",
    name: "messages",
    meta: { layout: "main" },
    component: () => import("../views/views-components/Messages.vue")
  },
  {
    path: "/breadcrumb",
    name: "breadcrumb",
    meta: { layout: "main" },
    component: () => import("../views/views-components/Breadcrumb.vue")
  },
  {
    path: "/dialog",
    name: "dialog",
    meta: { layout: "main" },
    component: () => import("../views/views-components/Dialog.vue")
  },
  {
    path: "/pagination",
    name: "pagination",
    meta: { layout: "main" },
    component: () => import("../views/views-components/Pagination.vue")
  },
  {
    path: "/course",
    name: "general-course-section",
    meta: { layout: "main" },
    component: () => import("../views/views-course/Course/Course.vue")
  },
  {
    path: "/course/create",
    name: "course-add",
    component: () => import("../views/views-course/Course/CourseAdd.vue"),
    meta: { layout: "main" }
  },
  {
    path: "/course/:id/edit",
    name: "course-edit",
    component: () => import("../views/views-course/Course/CourseEdit.vue"),
    meta: { layout: "main" }
  },
  {
    path: "/subcourse",
    name: "subcourse",
    component: () => import("../views/views-course/SubCourse/SubCourse.vue"),
    meta: { layout: "main" }
  },

  {
    path: "/subcourse/create",
    name: "subcourse-add",
    component: () => import("../views/views-course/SubCourse/SubCourseAdd.vue"),
    meta: { layout: "main" }
  },
  {
    path: "/subcourse/:id/edit",
    name: "subcourse-edit",
    component: () => import("../views/views-course/SubCourse/SubCourseEdit.vue"),
    meta: { layout: "main" }
  },
  {
    path: "/course-single",
    name: "course-single",
    component: () => import("../views/views-course/CourseSingle/CourseSingle.vue"),
    meta: { layout: "main" }
  },
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
