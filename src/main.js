// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import "babel-polyfill"

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' })

Vue.prototype.$axios = axios

router.beforeEach((to, from, next) => {
  const role = localStorage.getItem('ms_username');
  // console.log(role);
  if (!role && to.path !== '/login') {
    console.log('去登录');
    next('/login');
  } else if (to.meta.permission){
    role === 'admin' ? next() : next('/403')
  } else {
    if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
      Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
        confirmButtonText: '确定'
      })
    } else {
      // console.log('haoba');
      next()
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
