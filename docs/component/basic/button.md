---
title: Button 按钮
---
# Button 按钮
基础组件，触发业务逻辑时使用。

<script>
  export default {
    data () {
      return {
        button: '默认'
      }
    }
  }

</script>

<template>
  <div>
    <s-button>{{button}}</s-button>
    <s-button type='primary'>Primary</s-button>
    <s-button type='success'>Success</s-button>
    <s-button type='warning'>Warning</s-button>
    <s-button type='error'>Error</s-button>
  </div>
</template>

### 代码示例
``` html
  <s-button>默认</s-button>
  <s-button type='primary'>Primary</s-button>
  <s-button type='success'>Success</s-button>
  <s-button type='warning'>Warning</s-button>
  <s-button type='error'>Error</s-button>
```