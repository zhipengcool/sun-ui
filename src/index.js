import Button from './packages/Button'
import Input from './packages/Input'

const components = {
  sButton: Button,
  sInput: Input
}

const install = function (Vue, options = {}) {
  Object.keys(components).forEach(v => {
    Vue.component(v, components[v])
  })
}


export default install