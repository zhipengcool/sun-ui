import Vue from 'vue'
import Notice from './notice.vue'

Notice.newInstance = (properties = {}) => {
  let prop = properties
  let instance = new Vue({
    render (h) {
      return h(Notice, { prop })
    }
  })
  console.log('instance:', instance)
  //! 在文档之外渲染并且随后挂载
  let component = instance.$mount()
  document.body.appendChild(component.$el)

  let notice = component.$children[0]

  return {
    add (_notice) {
      notice.add(_notice)
    },
    remove (_id) {
    }
  }
}

let noticeInstance

export default (_notice) => {
  console.log('_notice:', _notice)
  noticeInstance = noticeInstance || Notice.newInstance()
  noticeInstance.add(_notice)
};