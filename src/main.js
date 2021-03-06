import AOS from "aos";
import Vue from "vue";
import App from "./App.vue";
import "aos/dist/aos.css";

new Vue({
  created() {
    AOS.init();
  },
  el: "#app",
  render: h => h(App)
});
