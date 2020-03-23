import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import "@/assets/iconfont.js";
import VueIconFont from "vue-icon-font-pro";

Vue.config.productionTip = false;
Vue.use(VueIconFont);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
