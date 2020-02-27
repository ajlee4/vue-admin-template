import Vue from "vue";
import Vuex from "vuex";
import news from "./modules/news";
import course from "./modules/course";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    news,
    course
  }
});
