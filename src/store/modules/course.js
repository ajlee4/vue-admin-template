import { fetchCourse , fetchSubCourse } from "@/api/course";

export default {
  state: {
    currentCourse: [],
    currentSubCourse:[]
  },
  getters: {
    currentCourse: state => state.currentCourse,
    currentSubCourse: state => state.currentSubCourse
  },
  mutations: {
    setCurrentCourse: (state, data) => {
      state.currentCourse = data;
    },
    setCurrentSubCourse: (state, data) => {
      state.currentSubCourse = data;
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
       
        commit("setCurrentSubCourse", res.data);
      });
    }
  }
};
