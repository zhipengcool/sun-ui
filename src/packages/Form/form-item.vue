<template>
  <div>
    <label v-if="label" :class="{'sun-form-item-required': isRequired}">{{ label }}</label>
    <div>
      <slot></slot>
      <div v-if="validateState === 'error'" class="sun-form-item-error">{{ validateMessage }}</div>
    </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'
import emitter from '../../mixins/emitter'
export default {
  name: 'sFormItem',
  inject: ['form'],
  mixins: [emitter],
  props: {
    label: {
      type: String,
    },
    prop: {
      type: String
    }
  },
  data () {
    return {
      isRequired: false,
      validateState: '',
      validateMessage: ''
    }
  },
  computed: {
    //! 获取数据
    fieldValue () {
      return this.form.model[this.prop]
    }
  },
  beforeDestroy() {
    this.dispatch('sForm', 'on-form-item-destroy', this)
  },
  mounted () {
    if (this.prop) {
      this.dispatch('sForm', 'on-form-item-add', this)

      // 初始值不一定是空字符串，所以缓存起来，重置的时候用
      this.initialFieldValue = this.fieldValue
      this.setRules()
    }
  },
  methods: {
    setRules () {
      let rules = this.getCurrentRule()
      if (rules.length > 0) {
        rules.forEach(v => {
          if (v.required) {
            //! 标记当前项是否是必填的
            this.isRequired = v.required
          }
        })
      }
      this.$on('on-form-change', this.onFiledChange)
      this.$on('on-form-blur', this.onFiledBlur)
    },
    //! 获取rule
    getCurrentRule () {
      let formRules = this.form.rules
      let rules = formRules ? formRules[this.prop] : []
      return rules
    },
    validate (_trigger, cb = () => {}) {
      let rules = this.getCurrentRule()
      if (rules.length === 0) return true

      //! 使用async validator验证规则
      let desc = {
        [this.prop]: rules
      }
      const validator = new AsyncValidator(desc)

      let model = {
        [this.prop]: this.fieldValue
      }
      validator.validate(model, { firstFields: true }, err => {
        this.validateState = err ? 'error' : 'success'
        this.validateMessage = err ? err[0].message : ''
        cb(this.validateMessage)
      })
    },
    onFiledChange (_value) {
      this.validate('change')
    },
    onFiledBlur (_value) {
      this.validate('blur')
    },
    //! 重置表单项
    resetFileds () {
      this.validateState = '',
      this.validateMessage = ''
      // 重置为初始值
      this.form.model[this.prop] = this.initialFieldValue
    }
  }
}
</script>
