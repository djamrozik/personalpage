
// global imports
import Vue from "vue";
import VeeValidate from "vee-validate";

// local imports
import ContactForm from "./components/ContactForm.vue";
import CollapseNav from "./components/CollapseNav.vue";
import LeftColumn from "./components/LeftColumn.vue";

// setup plugins
Vue.use(VeeValidate);

// config
Vue.config.productionTip = false

// root app
new Vue({
  el: "#vue-app",
  components: {
    "collapse-nav": CollapseNav,
    "contact-form": ContactForm,
    "left-column": LeftColumn
  }
});