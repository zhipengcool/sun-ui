<template>
  <button class="sun-button" :class="{[`sun-button-${type}`]: true}" type="button">
    <slot></slot>
  </button>
</template>

<script>
import { oneOf } from '../../utils/assist'
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: (value) => {
        console.log('value: ', value)
        return oneOf(value, ['default', 'primary', 'dashed', 'text', 'info', 'success', 'warning', 'error'])
      }
    },
    size: {
      type: String,
      default: 'default',
      validator: (value) => {
        return oneOf(value, ['small', 'default', 'large'])
      }
    }
  }
}
</script>
