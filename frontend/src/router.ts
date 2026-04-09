import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/search', component: () => import('../views/SearchView.vue') },
    { path: '/zhpi', component: () => import('../views/ZhpiView.vue') },
    { path: '/characters', component: () => import('../views/CharactersView.vue') },
    { path: '/continuation', component: () => import('../views/ContinuationView.vue') }
  ]
})

export default router
