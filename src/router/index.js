import { createRouter, createWebHistory } from 'vue-router'
import PendaftaranPage from '@/views/PendaftaranPage.vue'

const routes = [
  { path: '/pendaftaran', component: PendaftaranPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
