
import { fetchNews } from "@/api/news";

export default {
  state: {
    currentNews: [],
  
  },
  getters: {
    currentNews: state => state.currentNews,

  },
  mutations: {
    setCurrentNews: (state, data) => {
      state.currentNews = data;
    },

  },
  actions: {
    getCurrentNews({ commit }, id) {
      return fetchNews(id).then(res => {
        commit("setCurrentNews", res.data);
      });
    },

  }
};
