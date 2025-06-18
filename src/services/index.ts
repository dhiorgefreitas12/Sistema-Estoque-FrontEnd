import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import Products from '../views/Products.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/products', name: 'Products', component: Products },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
