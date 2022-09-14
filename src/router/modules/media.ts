import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: 'media',
    name: 'media',
    component: () => import('@/views/media/index.vue'),
  }
]

export default routes