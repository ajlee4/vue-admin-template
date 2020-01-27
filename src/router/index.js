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
    component: () =>
      import( "../views/About.vue")
  },
  {
    path: "/form",
    name: "form",
    meta: { layout: "main" },
    component: () =>
      import("../views/Form.vue")
  },
  {
    path: "/table",
    name: "table",
    meta: { layout: "main" },
    component: () =>
      import("../views/Table.vue")
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
