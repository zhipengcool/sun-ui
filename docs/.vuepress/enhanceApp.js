import SunUI from '../../src/index.js'
import '../../src/styles/index.scss'

//! enhanceApp.js 应用级别的配置
export default ({
  Vue,
  options,
  router
}) => {
  Vue.use(SunUI)
}