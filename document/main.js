import Vue from 'vue'
import App from './App.vue'
import router from './router'
import zvui from '../libs/index'

Vue.config.productionTip = false
Vue.use(zvui)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
