<template>
  <div class="sun-notice">
    <div class="sun-notice__main" v-for="item in notices" :key="item.id">
      <div class="sun-notice__title">{{item.title}}</div>
      <div class="sun-notice__content">{{item.content}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sNotice',
    data () {
      return {
        notices: []
      }
    },
    methods: {
      add (notice) {
        let id = new Date().getTime()
        notice.id = id
        this.notices.push(notice)

        setTimeout(() => {
          this.remove(id)
        }, notice.duration * 1000)

      },
      remove (id) {
        let index = this.notices.findIndex(v => v.id === id)
        if (index !== -1) {
          this.notices.splice(index, 1)
        }
      }
    }
  }
</script>
