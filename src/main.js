
// global imports
import Vue from "vue";
import VeeValidate from "vee-validate";
import VueRouter from "vue-router";

// local imports
import ContactForm from "./components/ContactForm.vue";
import CollapseNav from "./components/CollapseNav.vue";
import LeftColumn from "./components/LeftColumn.vue";
import LoginBox from "./components/LoginBox.vue"

// setup plugins
Vue.use(VeeValidate);
Vue.use(VueRouter);

// config
Vue.config.productionTip = false

// routes and router

const routes = [
  { path: "/index.html", }
];

const router = new VueRouter({routes});

// root app
new Vue({
  el: "#vue-app",
  components: {
    "collapse-nav": CollapseNav,
    "contact-form": ContactForm,
    "left-column": LeftColumn,
    "login-box": LoginBox
  }
});