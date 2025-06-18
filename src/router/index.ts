import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import Products from '../views/Products.vue'
import Movements from '../views/Movements.vue'
import Profit from '../views/Profit.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/products', name: 'Products', component: Products },
  { path: '/movements', name: 'Movements', component: Movements },
  { path: '/profit', name: 'Profit', component: Profit },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
