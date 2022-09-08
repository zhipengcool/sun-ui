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
export default {
  name: 'sun-input',
  props: {
    /* value: {
      type: String,
      default: ''
    } */
  },
  data () {
    return {
      currentValue: ''
    }
  },
  watch: {
   /*  value (v) {
      console.log('v: ', v)
      this.currentValue = v
    } */
  },
  methods: {
    handleInput (_e) {
      this.currentValue = _e.target.value
      this.$emit('input', this.currentValue)
    },
    handleBlur () {}
  },
}
</script>
