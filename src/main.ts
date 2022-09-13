import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss'
import elementPlus from './plugins/element-plus'

createApp(App)
  .use(router)
  .use(store)
  .use(elementPlus)
  .mount('#app');
