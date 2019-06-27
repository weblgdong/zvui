import vbutton from './vbutton'
import alert from './alert'

const components = [
  vbutton,
  alert
]

const install = function (Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  vbutton,
  alert
}

export default {
  install,
  vbutton,
  alert
}
