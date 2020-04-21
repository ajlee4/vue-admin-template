import {
  fetchCurrentTestCategory,
  fetchCurrentTestGrades,
  fetchCurrentTestQuestion,
  fetchCurrentTestAnswer
} from "@/api/test";

export default {
  state: {
    currentTestCategory: [],
    currentTestGrades: [],
    currentTestQuestioon: [],
    currentTestAnswer:[]
  },
  getters: {
    currentTestCategory: state => state.currentTestCategory,
    currentTestGrades: state => state.currentTestGrades,
    currentTestQuestion: state => state.currentTestQuestion,
    currentTestAnswer: state => state.currentTestAnswer,
  },
  mutations: {
    setTestCategory: (state, data) => {
      state.currentTestCategory = data;
    },
    setTestGrades: (state, data) => {
      state.currentTestGrades = data;
    },
    setTestQuestion: (state, data) => {
      state.currentTestQuestion = data;
    },
    setTestAnswer: (state, data) => {
      state.currentTestAnswer = data;
    }
  },
  actions: {
    getTestCategory({ commit }, id) {
      return fetchCurrentTestCategory(id).then(res => {
        commit("setTestCategory", res.data);
      });
    },
    getTestGrades({ commit }, id) {
      return fetchCurrentTestGrades(id).then(res => {
        commit("setTestGrades", res.data);
      });
    },
    getTestQuestion({ commit }, id) {
      return fetchCurrentTestQuestion(id).then(res => {
        commit("setTestQuestion", res);
      });
    },
    getTestAnswer({ commit }, id) {
      return fetchCurrentTestAnswer(id).then(res => {
        commit("setTestAnswer", res);
      });
    },
  }
};
