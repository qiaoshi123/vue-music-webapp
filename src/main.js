// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vant from 'vant';
import 'vant/lib/vant-css/index.css'
import '@/utils/rem.js'
import App from './App'
import router from './router'
import store from './store';
import { Lazyload } from 'vant';

Vue.use(Lazyload, {});
Vue.use(Vant);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
