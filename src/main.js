import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/styles/index.scss";
import * as filters from './filters'


Vue.use(Vuelidate);
Vue.use(ElementUI);
Vue.config.productionTip = false;


Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
