---
title: Form 表单
---

# Form 表单
### 概述
  具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。


<script>
export default {
  data () {
    return {
      form: {
        name: '',
        email: ''
      },
      rules: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    doValidate () {
      console.log('form:', this.form)
      this.$refs.form.validate((valid) => {
        console.log(valid)
      })
    }
  }
}
</script>
<template>
  <s-form ref="form" :model="form" :rules="rules">
    <s-form-item label="用户名" prop="name">
      <s-input v-model="form.name"></s-input>
    </s-form-item>
    <s-form-item label="邮箱" prop="email">
      <s-input v-model="form.email"></s-input>
    </s-form-item>
    <s-button @click.native="doValidate" style="margin-top:20px" type="primary">触发验证表单</s-button>
  </s-form>
</template>

```vue
<script>
export default {
  data () {
    return {
      form: {
        name: '',
        email: ''
      },
      rules: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    doValidate () {
      this.$refs.form.validate((valid) => {
        console.log(valid)
      })
    }
  }
}
</script>
<template>
  <s-form ref="form" :model="form" :rules="rules">
    <s-form-item label="用户名" prop="name">
      <s-input v-model="form.name"></s-input>
    </s-form-item>
    <s-form-item label="邮箱" prop="email">
      <s-input v-model="form.email"></s-input>
    </s-form-item>
    <s-button @click.native="doValidate" style="margin-top:20px" type="primary">触发验证表单</s-button>
  </s-form>
</template>
```