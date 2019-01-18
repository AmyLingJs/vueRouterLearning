// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router/index1.js'
//这个名字只能是routes吗？不然模板里面的内容不会显示
//动态路由匹配

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter(routes)

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  render: h=>h(App)
})


