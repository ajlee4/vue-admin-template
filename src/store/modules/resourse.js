import { fetchResourse } from "@/api/resourse";

export default {
  state: {
    currentResourse: []
  },
  getters: {
    currentResourse: state => state.currentResourse
  },
  mutations: {
    setCurrentResourse: (state, data) => {
      state.currentResourse = data;
    }
  },
  actions: {
    getCurrentResourse({ commit }, id) {
      return fetchResourse(id).then(res => {
        commit("setCurrentResourse", res.data);
      });
    }
  }
};
