import { createRouter, createWebHistory } from 'vue-router'

import Hero from '../views/Hero.vue'
import About from '../views/About.vue'
import Works from '../views/Works.vue'
import Work from '../views/Work.vue'
import Fragments from '../views/Fragments.vue'
import Colophon from '../views/Colophon.vue'
import Plates from '../views/Plates.vue'
import Mail from '../views/Mail.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', name: 'hero', component: Hero, meta: { num: '00', title: '创刊号' } },
  { path: '/about', name: 'about', component: About, meta: { num: '01', title: '序言' } },
  { path: '/works', name: 'works', component: Works, meta: { num: '02', title: '作品' } },
  { path: '/works/:num', name: 'work', component: Work, props: true },
  { path: '/plates', name: 'plates', component: Plates, meta: { num: '02.5', title: '图版' } },
  { path: '/fragments', name: 'fragments', component: Fragments, meta: { num: '03', title: '片段' } },
  { path: '/colophon', name: 'colophon', component: Colophon, meta: { num: '04', title: '版权页' } },
  { path: '/mail', name: 'mail', component: Mail, meta: { num: '05', title: '读者来信' } },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
