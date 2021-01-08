import Vue from "vue";
import Vuex from "vuex";
import User from "@/store/modules/user";

import { config } from 'vuex-module-decorators'
// Set rawError to true by default on all @Action decorators
config.rawError = true

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    User,
  },
});

// store.registerModule("User", {});

export default store;
