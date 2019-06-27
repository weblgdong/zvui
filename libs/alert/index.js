import alert from './alert.vue'

alert.install = function (Vue) {
  Vue.component(alert.name, alert)
}

alert.name = 'alert'

export default alert
