import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Vuetify from "vuetify";
import { auth } from "../firebaseconf";
import "./assets/SCSS/app.scss";
import Login from "./components/Authentication/Login.vue";
import CreateAccount from "./components/Authentication/CreateAccount.vue";

Vue.config.productionTip = false;

Vue.component("login", Login);
Vue.component("create-account", CreateAccount);

Vue.use(Vuetify);

let app: Vue;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
  }
});
