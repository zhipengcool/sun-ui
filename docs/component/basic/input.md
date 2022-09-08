---
  title: 'Input 输入框'
---
#### 概述
  基本表单组件，支持 input 和 textarea，并在原生控件基础上进行了功能扩展，可以组合使用。

<!-- <s-input v-model="value"></s-input> -->
<script>
  export default {
    data () {
      return {
        value: ''
      }
    }
  }
</script>
<template>
  <s-input v-model="value"></s-input>
  输入的值是: {{ value }}
</template>

#### 代码示例
```vue
<script>
  export default {
    data () {
      return {
        value: ''
      }
    }
  }
</script>
<template>
  <s-input v-model="value"></s-input>
  输入的值是: {{ value }}
</template>
```
