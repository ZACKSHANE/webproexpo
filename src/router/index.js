import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Portfolio from '@/views/PortFolio.vue'
import Portfolio2 from '@/views/Portfolio2.vue' // ✅ Tambahkan ini
import PendaftaranPage from '@/views/PendaftaranPage.vue'

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
    path: '/portfolio2', // ✅ Ini route baru
    name: 'Portfolio2',
    component: Portfolio2
  },
  {
    path: '/pendaftaran',
    name: 'Pendaftaran',
    component: PendaftaranPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
