module.exports = {
  title: 'SunUI',
  description: 'sun UI for Vue.js 2.X',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '组件', link: '/component/guide/introduction' },
      { text: '主题', link: '/theme/' },
      // { text: 'External', link: 'https://google.com' },
    ],
    sidebar: {
      '/component/': [
        {
          title: '开发指南',   // 必要的
          // path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          // sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            'guide/introduction',
            'guide/guide'
          ]
        },
        {
          title: '基础组件',   // 必要的
          // path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          // sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            'basic/button',
            'basic/input',
            'basic/form'
          ]
        }
      ]
    }
  }
}