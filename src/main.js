// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import axios from 'axios'
import App from './App'
import routes from './router'
import store from './vuex/store'
import ElementUI from 'element-ui'
import NProgress from 'nprogress'
import moment from 'moment'
import Mock from './mock'
Mock.bootstrap()
import utils from '@/assets/js/utils'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.min.css'
import 'nprogress/nprogress.css'
import '@/assets/css/base.scss'
NProgress.configure({ ease: 'ease', speed: 500, minimum: 0.5, showSpinner: false})
Vue.use(Router)
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.prototype.$moment = moment
Vue.prototype.$nprogress = NProgress
Vue.config.productionTip = false
Vue.filter('DateFormat', function(value){
	return moment(value).format('YYYY-MM-DD')
})
Vue.filter('TimeFormat', function(value){
	return moment(value).format('YYYY-MM-DD HH:mm:ss')
})
Vue.directive('title', {
  inserted (el, binding) {
    document.title = el.dataset.title
  }
})
Vue.component('back-button', {
	template: '<button class="back-button" @click="back">返回</button>',
	methods: {
		back () {
			this.$router.back()
		}
	}
})
const router = new Router({
  routes  
})
router.beforeEach((to, from, next) => {
	if(to.path === '/register' || to.path === '/login') {
    localStorage.clear()
		return next()
	}
	let sessionId = localStorage.getItem('sessionId')
	if (!sessionId && to.path != '/login') {
		next('/login')
	} else {
		NProgress.start()
		next()
	}
})
router.afterEach((to, from, next) => {
  console.log(to.path)
  NProgress.done()
})
/* request interceptors */
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  console.log('request error')
  return Promise.reject(error)
})
/* response interceptors */
axios.interceptors.response.use(function (res) {
  if (res.data.code ===  999) {
  	localStorage.clear()
    ElementUI.Message({
   	  message: '长时间未操作,请重新登录'
    })
    return router.push('/login')
  } else if (res.data.code === 403) {
  	return router.push('/NoPermission')
  }
  return res;
}, function (error) {
  // response error
  ElementUI.Message({
 	  message: '服务器响应错误，请重试'
  })
  return Promise.reject(error)
})

new Vue({
	store,
  router,
  render: h => h(App)
}).$mount('#app')