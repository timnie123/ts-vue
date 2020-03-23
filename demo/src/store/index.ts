import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from "vuex-persist";
import { record } from "@/store/modules/record";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    record
  },
});
