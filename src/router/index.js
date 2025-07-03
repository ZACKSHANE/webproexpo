import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Portfolio from '@/views/PortFolio.vue'
import Portfolio2 from '@/views/Portfolio2.vue'
import Pendaftaran from '@/views/PendaftaranPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/portfolio2',
    name: 'Portfolio2',
    component: Portfolio2
  },
  {
    path: '/pendaftaran',
    name: 'Pendaftaran',
    component: Pendaftaran
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
  if (to.hash) {
    return {
      el: to.hash,
      behavior: 'smooth'
    }
  }
  return { top: 0 }
}
})
export default router
