import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'

// UI
import iView from 'iview'
import 'iview/dist/styles/iview.css'


sync(store, router);

const app = new Vue({
  router,
  store,
  ...App
});

export { app, router, store }
