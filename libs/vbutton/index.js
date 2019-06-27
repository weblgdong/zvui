import vbutton from './vbutton.vue'

vbutton.install = function (Vue) {
  Vue.component(vbutton.name, vbutton)
}

vbutton.name = 'vbutton'

export default vbutton
