import Vue from "vue";
import Vuex from "vuex";
import Login from "/src/features/login/store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Login,
  },
});
