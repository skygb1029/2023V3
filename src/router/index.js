import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/components/index.vue'),
  },
  {
    path: '/GuessNumber',
    component: () => import('@/components/GuessNumber.vue'),
  },
  {
    path: '/TakeQRcode',
    component: () => import('@/components/TakeQRcode.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
