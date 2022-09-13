import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { App } from 'vue'

export default {
  install(app: App) {
    app.use(ElementPlus, { size: 'small', zIndex: 2000, locale: zhCn, })
  }
}