
import { fetchReviews } from "@/api/reviews";

export default {
  state: {
    currentReviews: [],
  
  },
  getters: {
    currentReviews: state => state.currentReviews,

  },
  mutations: {
    setCurrentReviews: (state, data) => {
      state.currentReviews = data;
    },

  },
  actions: {
    getCurrentReviews({ commit }, id) {
      return fetchReviews(id).then(res => {
        commit("setCurrentReviews", res.data);
      });
    },

  }
};
