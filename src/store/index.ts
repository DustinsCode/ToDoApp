import Vue from "vue";
import Vuex from "vuex";
import * as fb from "firebase";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userProfile: {}
  },
  mutations: {},
  actions: {
    async login({ dispatch }, form) {
      //sign user in
      const { user } = await fb.default
        .auth()
        .signInWithEmailAndPassword(form.email, form.password);

      // fetch user profile and set in state
      // dispatch("fetchUserProfile", user);
    }
    // async fetchUserProfile({ commit }, user) {
    //   const userProfile = await fb.default.database.ref('users/'+user.id))

    //   // set user profile in state
    //   commit("setUserProfile", userProfile.data());

    //   router.push("/");
    // }
  },
  modules: {}
});
