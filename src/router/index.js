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
    base: "/admin/",
    path: "/news",
    name: "news-list",
    meta: { layout: "main" },
    component: () => import("../views/views-news/NewsList.vue")
  },
  {
    path: "/news/create",
    name: "news-add",
    component: () => import("../views/views-news/NewsAdd.vue"),
    meta: { layout: "main" }
  },
  {
    path: "/calendar",
    name: "calendar",
    component: () => import("../views/Calendar.vue"),
    meta: { layout: "main" }
  },
  {
    path: "/news/:id/edit",
    name: "news-edit",
    component: () => import("../views/views-news/NewsEdit.vue"),
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
  {
    path: "/course-single/create",
    name: "course-single-create",
    component: () => import("../views/views-course/CourseSingle/CourseSingleAdd.vue"),
    meta: { layout: "main" }
  },
  {
    path: "/course-single/:id/edit",
    name: "course-single-edit",
    component: () => import("../views/views-course/CourseSingle/CourseSingleEdit.vue"),
    meta: { layout: "main" }
  },
  {
    path: "/reviews",
    name: "reviews",
    component: () => import("../views/views-reviews/Reviews.vue"),
    meta: { layout: "main" }
  },
  {
    path: "/reviews/:id/edit",
    name: "reviews-edit",
    component: () => import("../views/views-reviews/ReviewsEdit.vue"),
    meta: { layout: "main" }
  },
  {
    path: "/resourse",
    name: "resourse",
    component: () => import("../views/views-resourse/Resourse.vue"),
    meta: { layout: "main" }
  },
  {
    path: "/resourse/:id/edit",
    name: "resourse-edit",
    component: () => import("../views/views-resourse/ResourseEdit.vue"),
    meta: { layout: "main" }
  },
  {
    path: "/resourse/create",
    name: "resourse-create",
    component: () => import("../views/views-resourse/ResourseAdd.vue"),
    meta: { layout: "main" }
  },
  {
    path: "/test-category",
    name: "test-category",
    component: () => import("../views/views-test/TestCategory/TestCategory"),
    meta: { layout: "main" }
  },
  {
    path: "/test-category/create",
    name: "test-category-create",
    component: () => import("../views/views-test/TestCategory/TestCategoryAdd"),
    meta: { layout: "main" }
  },
  {
    path: "/test-category/:id/edit",
    name: "test-category-edit",
    component: () => import("../views/views-test/TestCategory/TestCategoryEdit"),
    meta: { layout: "main" }
  },
  {
    path: "/test-level",
    name: "test-level",
    component: () => import("../views/views-test/TestLevel/TestLevel"),
    meta: { layout: "main" }
  },
  {
    path: "/test-level/create",
    name: "test-level-create",
    component: () => import("../views/views-test/TestLevel/TestLevelAdd"),
    meta: { layout: "main" }
  },
  {
    path: "/test-level/:id/edit",
    name: "test-level-edit",
    component: () => import("../views/views-test/TestLevel/TestLevelEdit"),
    meta: { layout: "main" }
  },
  {
    path: "/test-question",
    name: "test-question",
    component: () => import("../views/views-test/TestQuestion/TestQuestion"),
    meta: { layout: "main" }
  },
  {
    path: "/test-question/create",
    name: "test-question-create",
    component: () => import("../views/views-test/TestQuestion/TestQuestionAdd"),
    meta: { layout: "main" }
  },
  {
    path: "/test-question/:id/edit",
    name: "test-question-edit",
    component: () => import("../views/views-test/TestQuestion/TestQuestionEdit"),
    meta: { layout: "main" }
  },
];

// const router = new VueRouter({
//   routes,
//   mode: "history"
// });

const createRouter = () => new VueRouter({
  // mode: 'history',
  routes,
})

const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // the relevant part
}
export default router;
