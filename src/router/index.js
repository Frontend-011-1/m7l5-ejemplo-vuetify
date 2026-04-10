import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ()=>import('@/views/HomeView.vue')
    },
    {
      path: '/cards',
      name: 'Cards',
      component: ()=>import('@/views/CardExampleView.vue')
    },
    {
      path: '/form',
      name: 'Form',
      component: ()=>import('@/views/FormView.vue')
    }
  ],
})

export default router
