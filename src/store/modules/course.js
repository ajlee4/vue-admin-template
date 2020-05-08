import { fetchCourse, fetchSubCourse,fetchSingleCourse } from "@/api/course";

export default {
  state: {
    currentCourse: [],
    currentSubCourse: [],
    currentSingleCourse: []
  },
  getters: {
    currentCourse: state => state.currentCourse,
    currentSubCourse: state => state.currentSubCourse,
    currentSingleCourse: state => state.currentSingleCourse
  },
  mutations: {
    setCurrentCourse: (state, data) => {
      state.currentCourse = data;
    },
    setCurrentSubCourse: (state, data) => {
      state.currentSubCourse = data;
    },
    setCurrentSingleCourse: (state, data) => {
      state.currentSingleCourse = data;
    }
  },
  actions: {
    getCurrentCourse({ commit }, id) {
      return fetchCourse(id).then(res => {
        commit("setCurrentCourse", res.data);
      });
    },
    getCurrentSubCourse({ commit }, id) {
      return fetchSubCourse(id).then(res => {
        commit("setCurrentSubCourse", res);
      });
    },
    getCurrentSingleCourse({ commit }, id) {
      return fetchSingleCourse(id).then(res => {
        commit("setCurrentSingleCourse", res);
      });
    }
  }
};


