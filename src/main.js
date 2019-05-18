import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
// 一像素边框
import "./assets/style/border.css";
import "./assets/style/reset.less";

// 300MS延迟
import fastClick from "fastclick";
fastClick.attach(document.body);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
