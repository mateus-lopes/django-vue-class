import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth/sign-in',
      name: 'sign-in',
      component: () => import('../views/auth/SignIn.vue')
    },
    {
      path: '/auth/sign-up',
      name: 'sign-up',
      component: () => import('../views/auth/SignUp.vue')
    },
    {
      path: '/auth/forgot-password',
      name: 'forgot-password',
      component: () => import('../views/auth/ForgotPassword.vue')
    }
  ]
})

export default router
