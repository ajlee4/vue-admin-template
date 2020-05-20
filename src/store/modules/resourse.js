import { fetchResourse } from "@/api/resourse";
import {fetchResourseLocalization} from '@/api/localization';
export default {
  state: {
    currentResourse: [],
    currentResourseLocalization:[]
  },
  getters: {
    currentResourse: state => state.currentResourse,
    currentResourseLocalization: state => state.currentResourseLocalization
  },
  mutations: {
    setCurrentResourse: (state, data) => {
      state.currentResourse = data;
    },
    setCurrentResourseLocalization: (state, data) => {
      state.currentResourseLocalization = data;
    }
  },
  actions: {
    getCurrentResourse({ commit }, id) {
      return fetchResourse(id).then(res => {
        commit("setCurrentResourse", res.data);
      });
    },
    getCurrentResourseLocalization({ commit }, id) {
      return fetchResourseLocalization(id).then(res => {
        commit("setCurrentResourseLocalization", res.data);
      });
    }
  }
};
