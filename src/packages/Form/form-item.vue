<template>
  <div>
    <label v-if="label" :class="{'sun-form-item-required': isRequired}">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'sFormItem',
  inject: ['form'],
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
  mounted () {
    this.setRules()
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
    },
    //! 获取rule
    getCurrentRule () {
      let formRules = this.form.rules
      let rules = formRules ? formRules[this.prop] : []
      return rules
    }
  },
}
</script>
