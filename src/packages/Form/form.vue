<template>
  <form>
    <slot></slot>
  </form>
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
      //! 重置表单项
      resetFileds () {
        this.fields.forEach(f => {
          f.resetFileds()
        })
      },
      //! 组件调用validate
      validate (cb) {
        console.log('form===>')
        let isValid = true
        let counter = 0
        this.fields.forEach(field => {
          field.validate('', err => {
            console.log('err: ', err)
            if (err) {
              isValid = false
            }
            counter++
            if (counter === this.fields.length) {
              cb(isValid)
              // if (callback === 'function') {
              // }
            }
          })
        })
      }
    },
    created () {
      //! 初始化缓存formItem
      this.$on('on-form-item-add', field => {
        console.log('123123')
        if (field) {
          this.fields.push(field)
          console.log('this.fields:', this.fields)
        }
      })

      /* form-item销毁的时候移除 */
      this.$on("on-form-item-destroy", (filed) => {
        console.log("form-item-destroy");
        if (filed.prop) this.fields.splice(this.fields.indexOf(filed), 1);
      });
    }
  }
</script>
