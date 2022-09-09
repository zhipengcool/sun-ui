import Button from './packages/Button'
import Input from './packages/Input'
import Form from './packages/Form'
import FormItem from './packages/FormItem'

const components = {
  sButton: Button,
  sInput: Input,
  sForm: Form,
  sFormItem: FormItem
}

const install = function (Vue, options = {}) {
  Object.keys(components).forEach(v => {
    Vue.component(v, components[v])
  })
}


export default install