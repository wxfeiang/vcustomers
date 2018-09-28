// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResourse from 'vue-resource'
//  引入分离的路由js 
import { routes } from './routes'

Vue.config.productionTip = false
// 使用路由
Vue.use(VueRouter)
// 使用数据接口模块
Vue.use(VueResourse)
const router = new VueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
