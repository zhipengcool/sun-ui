<template>
  <div>
    <input
      type="text"
      class="sun-input"
      placeholder="Enter something..."
      @input="handleInput"
      @blur="handleBlur">
  </div>
</template>

<script>
import Emitter from '../../mixins/emitter'
export default {
  name: 'sInput',
  mixins: [Emitter],
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value (v) {
      this.currentValue = v
    }
  },
  methods: {
    handleInput (_e) {
      this.currentValue = _e.target.value
      this.$emit('input', this.currentValue)
      this.dispatch('sFormItem', 'on-form-change', this.currentValue) // 通知formItem有所改变
    },
    handleBlur () {
      this.dispatch('sFormItem', 'on-form-blur', this.currentValue) // 通知formItem有所改变
    }
  },
}
</script>
