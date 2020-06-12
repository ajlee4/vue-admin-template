import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Layout from "../views/Wrapper.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/resourse",
    name: "resourse",
    component: () => import("../views/views-resourse/Resourse.vue"),
    meta: {
      layout: "main",
      title: "Ресурсы",
      icon: "el-icon-folder",
    },
  },
  {
    path: "/courses",
    name: "course-list",
    component: Layout,
    meta: {
      layout: "main",
      submenuVisible: true,
      title: "Курсы",
      icon: "el-icon-s-platform",
    },
    children: [
      {
        path: "/course",
        name: "general-course-section",
        meta: { layout: "main", title: "Общие разделы" },
        component: () => import("@/views/views-course/Course/Course.vue"),
      },
      {
        path: "/subcourse",
        name: "subcourse",
        component: () => import("@/views/views-course/SubCourse/SubCourse.vue"),
        meta: { layout: "main", title: "Направления" },
      },
      {
        path: "/course-single",
        name: "course-single",
        component: () =>
          import("@/views/views-course/CourseSingle/CourseSingle.vue"),
        meta: { layout: "main", title: "Курсы" },
      },
    ],
  },
  {
    path: "/test",
    name: "test-list",
    component: Layout,
    meta: {
      layout: "main",
      submenuVisible: true,
      title: "Тестирование",
      icon: "el-icon-reading",
    },
    children: [
      {
        path: "/test-category",
        name: "test-category",
        component: () =>
          import("../views/views-test/TestCategory/TestCategory"),
        meta: { layout: "main", title: "Категории" },
      },
      {
        path: "/test-level",
        name: "test-level",
        component: () => import("../views/views-test/TestLevel/TestLevel"),
        meta: { layout: "main", title: "Уровень" },
      },
      {
        path: "/test-question",
        name: "test-question",
        component: () =>
          import("../views/views-test/TestQuestion/TestQuestion"),
        meta: { layout: "main", title: "Вопросы" },
      },
    ],
  },
  {
    path: "/calendar",
    name: "calendar",
    component: () => import("../views/Calendar.vue"),
    meta: {
      layout: "main",
      title: "Календарь",
      icon: "el-icon-date",
    },
  },
  {
    path: "/branch-offices",
    name: "branch-offices",
    component: () => import("../views/views-branch-offices/officesList.vue"),
    meta: {
      layout: "main",
      title: "Филиалы",
      icon: "el-icon-s-shop",
    },
  },
  {
    path: "/banner",
    name: "banner",
    component: () => import("../views/views-banner/bannerList.vue"),
    meta: {
      layout: "main",
      title: "Баннеры",
      icon: "el-icon-picture",
    },
  },
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      layout: "main",
      title: "Панель управления",
      icon: "el-icon-s-data",
    },
  },
  {
    path: "/news",
    name: "news-list",
    meta: {
      layout: "main",
      title: "Новости",
      icon: "el-icon-s-promotion",
    },
    component: () => import("../views/views-news/NewsList.vue"),
  },
  {
    path: "/news/create",
    name: "news-add",
    hidden: true,
    component: () => import("../views/views-news/NewsAdd.vue"),
    meta: { layout: "main" },
  },

  {
    path: "/news/:id/edit",
    name: "news-edit",
    component: () => import("../views/views-news/NewsEdit.vue"),
    meta: { layout: "main" },
    hidden: true,
  },

  {
    path: "/course/create",
    name: "course-add",
    component: () => import("../views/views-course/Course/CourseAdd.vue"),
    meta: { layout: "main" },
    hidden: true,
  },
  {
    path: "/course/:id/edit",
    name: "course-edit",
    component: () => import("../views/views-course/Course/CourseEdit.vue"),
    meta: { layout: "main" },
    hidden: true,
  },

  {
    path: "/subcourse/create",
    name: "subcourse-add",
    component: () => import("../views/views-course/SubCourse/SubCourseAdd.vue"),
    meta: { layout: "main" },
    hidden: true,
  },
  {
    path: "/subcourse/:id/edit",
    name: "subcourse-edit",
    component: () =>
      import("../views/views-course/SubCourse/SubCourseEdit.vue"),
    meta: { layout: "main" },
    hidden: true,
  },

  {
    path: "/teachers",
    name: "teachers",
    component: () => import("../views/views-teacher/teacherList.vue"),
    meta: {
      layout: "main",
      title: "Преподаватели",
      icon: "el-icon-s-custom",
    },
  },

  {
    path: "/teachers/create",
    name: "teachers-add",
    component: () => import("../views/views-teacher/teacherAdd.vue"),
    meta: { layout: "main" },
    hidden: true,
  },
  {
    path: "/teachers/:id/edit",
    name: "teachers-edit",
    component: () => import("../views/views-teacher/teacherEdit.vue"),
    meta: { layout: "main" },
    hidden: true,
  },
  {
    path: "/faq",
    name: "faq",
    component: Layout,
    meta: {
      layout: "main",
      submenuVisible: true,
      title: "FAQ",
      icon: "el-icon-guide",
    },
    children: [
      {
        path: "/faq-category",
        name: "faq-category",
        meta: { layout: "main", title: "Категории" },
        component: () => import("@/views/views-faq/FaqCategory/FaqCategoryList.vue"),
      },
      {
        path: "/faq-question",
        name: "faq-question",
        component: () => import("@/views/views-faq/FaqQuestion/FaqQuestionList.vue"),
        meta: { layout: "main", title: "Вопросы" },
      },
    ],
  },

  {
    path: "/faq-category/create",
    name: "faq-category-add",
    component: () => import("@/views/views-faq/FaqCategory/FaqCategoryAdd.vue"),
    meta: { layout: "main" },
    hidden: true,
  },
  {
    path: "/faq-category/:id/edit",
    name: "faq-category-edit",
    component: () => import("@/views/views-faq/FaqCategory/FaqCategoryEdit.vue"),
    meta: { layout: "main" },
    hidden: true,
  },

  {
    path: "/faq-question/create",
    name: "faq-question-add",
    component: () => import("@/views/views-faq/FaqQuestion/FaqQuestionAdd.vue"),
    meta: { layout: "main" },
    hidden: true,
  },
  {
    path: "/faq-question/:id/edit",
    name: "faq-question-edit",
    component: () => import("@/views/views-faq/FaqQuestion/FaqQuestionEdit.vue"),
    meta: { layout: "main" },
    hidden: true,
  },


  {
    path: "/payment",
    name: "payment",
    component: () => import("../views/views-payment/PaymentList.vue"),
    meta: {
      layout: "main",
      title: "Оплата",
      icon: "el-icon-bank-card",
    },
  },

  {
    path: "/payment/create",
    name: "payment-add",
    component: () => import("../views/views-payment/PaymentAdd.vue"),
    meta: { layout: "main" },
    hidden: true,
  },
  {
    path: "/payment/:id/edit",
    name: "payment-edit",
    component: () => import("../views/views-payment/PaymentEdit.vue"),
    meta: { layout: "main" },
    hidden: true,
  },

  {
    path: "/branch-offices/create",
    name: "branch-offices-add",
    component: () => import("../views/views-branch-offices/officesListAdd.vue"),
    meta: { layout: "main" },
    hidden: true,
  },
  {
    path: "/branch-offices/:id/edit",
    name: "branch-offices-edit",
    component: () =>
      import("../views/views-branch-offices/officesListEdit.vue"),
    meta: { layout: "main" },
    hidden: true,
  },

  {
    path: "/course-single/create",
    name: "course-single-create",
    component: () =>
      import("../views/views-course/CourseSingle/CourseSingleAdd.vue"),
    meta: { layout: "main" },
    hidden: true,
  },
  {
    path: "/course-single/:id/edit",
    name: "course-single-edit",
    component: () =>
      import("../views/views-course/CourseSingle/CourseSingleEdit.vue"),
    meta: { layout: "main" },
    hidden: true,
  },
  {
    path: "/reviews",
    name: "reviews",
    component: () => import("../views/views-reviews/Reviews.vue"),
    meta: {
      layout: "main",
      title: "Отзывы",
      icon: "el-icon-s-comment",
    },
  },
  {
    path: "/reviews/create",
    name: "reviews-create",
    component: () => import("../views/views-reviews/ReviewsAdd.vue"),
    meta: { layout: "main" },
    hidden: true,
  },
  {
    path: "/reviews/:id/edit",
    name: "reviews-edit",
    component: () => import("../views/views-reviews/ReviewsEdit.vue"),
    meta: { layout: "main" },
    hidden: true,
  },

  {
    path: "/resourse/:id/edit",
    name: "resourse-edit",
    component: () => import("../views/views-resourse/ResourseEdit.vue"),
    meta: { layout: "main" },
    hidden: true,
  },
  {
    path: "/resourse/create",
    name: "resourse-create",
    component: () => import("../views/views-resourse/ResourseAdd.vue"),
    meta: { layout: "main" },
    hidden: true,
  },

  {
    path: "/banner/:id/edit",
    name: "banner-edit",
    component: () => import("../views/views-banner/bannerEdit.vue"),
    meta: { layout: "main" },
    hidden: true,
  },

  {
    path: "/banner/create",
    name: "banner-create",
    component: () => import("../views/views-banner/bannerAdd.vue"),
    meta: { layout: "main" },
    hidden: true,
  },
  {
    path: "/resourse-localization",
    name: "resourse-localization",
    component: () =>
      import("../views/views-localization-resourse/Resourse.vue"),
    meta: {
      layout: "main",
      title: "Локализация",
      icon: "el-icon-discover",
    },
  },
  {
    path: "/resourse-localization/:id/edit",
    name: "resourse-localization-edit",
    component: () =>
      import("../views/views-localization-resourse/ResourseEdit.vue"),
    meta: { layout: "main" },
    hidden: true,
  },
  {
    path: "/resourse-localization/create",
    name: "resourse-localization-create",
    component: () =>
      import("../views/views-localization-resourse/ResourseAdd.vue"),
    meta: { layout: "main" },
    hidden: true,
  },

  {
    path: "/test-category/create",
    name: "test-category-create",
    component: () => import("../views/views-test/TestCategory/TestCategoryAdd"),
    meta: { layout: "main" },
    hidden: true,
  },
  {
    path: "/test-category/:id/edit",
    name: "test-category-edit",
    component: () =>
      import("../views/views-test/TestCategory/TestCategoryEdit"),
    meta: { layout: "main" },
    hidden: true,
  },

  {
    path: "/test-level/create",
    name: "test-level-create",
    component: () => import("../views/views-test/TestLevel/TestLevelAdd"),
    meta: { layout: "main" },
    hidden: true,
  },
  {
    path: "/test-level/:id/edit",
    name: "test-level-edit",
    component: () => import("../views/views-test/TestLevel/TestLevelEdit"),
    meta: { layout: "main" },
    hidden: true,
  },

  {
    path: "/test-question/create",
    name: "test-question-create",
    component: () => import("../views/views-test/TestQuestion/TestQuestionAdd"),
    meta: { layout: "main" },
    hidden: true,
  },
  {
    path: "/test-question/:id/edit",
    name: "test-question-edit",
    component: () =>
      import("../views/views-test/TestQuestion/TestQuestionEdit"),
    meta: { layout: "main" },
    hidden: true,
  },
];

// const router = new VueRouter({
//   routes,
//   mode: "history"
// });

const createRouter = () =>
  new VueRouter({
    // mode: 'history',
    routes,
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // the relevant part
}
export default router;
