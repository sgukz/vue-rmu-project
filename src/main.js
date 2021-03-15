import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import VueSweetalert2 from "vue-sweetalert2";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAQAMwTJNXKo6PDQetaYylazMRgurNbrV0",
    libraries: "places" // necessary for places input
  }
});
Vue.use(VueSweetalert2);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
