<template>
  <div>
    <form>
      <slot></slot>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'sForm',
    provide () {
      return {
        form: this
      }
    },
    props: {
      model: {
        type: Object
      },
      rules: {
        type: Object
      }
    },
    data () {
      return {
        fields: []
      }
    },
    methods: {
      //! 组件调用validate
      validate (cb) {
        let isValid = true
        let counter = 0
        this.fields.forEach(field => {
          field.validate('', err => {
            if (err) {
              isValid = false
            }
            counter++
            if (counter === this.fields.length) {
              cb(isValid)
            }
          })
        })
      }
    },
    created () {
      //! 初始化缓存formItem
      this.$on('on-form-item-add', field => {
        if (field) {
          this.fields.push(field)
        }
      })
    }
  }
</script>
