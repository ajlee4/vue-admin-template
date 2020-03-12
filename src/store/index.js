import Vue from "vue";
import Vuex from "vuex";
import news from "./modules/news";
import course from "./modules/course";
import reviews from "./modules/reviews";
import resourse from "./modules/resourse";
import app from "./modules/app";


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    news,
    course,
    app,
    reviews,
    resourse
  }
});
