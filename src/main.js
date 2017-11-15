// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App'
import BootstrapVue from 'bootstrap-vue'
import { Tabs } from 'bootstrap-vue/es/components'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(Tabs)

Vue.config.productionTip = false

Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
