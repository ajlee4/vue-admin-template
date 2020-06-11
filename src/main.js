import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/styles/index.scss";
import * as filters from "./filters";

import locale from "element-ui/lib/locale/lang/ru-RU";

// moment js
const moment = require("moment");
require("moment/locale/ru");
Vue.use(require("vue-moment"), {
  moment,
});
// //moment js
// import 'vue2-animate/src/sass/vue2-animate.scss'
import "./styles/animation/vue2-animate.scss";
// //animation

Vue.use(Vuelidate);

Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
