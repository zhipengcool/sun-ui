---
title: Notice
---

# 提示

填写提示内容，点击按钮弹出提示

<script>
  export default {
    data () {
      return {
        content: '提示内容'
      }
    },
    methods: {
      onNotice () {
        this.$Notice({
          title: '提示',
          content: this.content || '内容',
          duration: 3
        })
      }
    }
  }
</script>

<template>
  <div>
    <s-input v-model="content" placeholder="输入提示内容"></s-input>
    <s-button @click.native="onNotice">点击提示</s-button>
  </div>
</template>


```vue
<script>
  export default {
    data () {
      return {
        content: '提示内容'
      }
    },
    methods: {
      onNotice () {
        this.$notice({
          title: '提示',
          content: this.content || '内容',
          duration: 3
        })
      }
    }
  }
</script>

<template>
  <div>
    <s-input v-model="content" placeholder="输入提示内容"></s-input>
    <s-button @click="onNotice">点击提示</s-button>
  </div>
</template>
```
