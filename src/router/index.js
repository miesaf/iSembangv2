import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Reset from '../views/Reset.vue'
import PrivateChat from '../views/PrivateChat.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/daftar',
    name: 'Register',
    component: Register
  },
  {
    path: '/reset',
    name: 'Reset',
    component: Reset
  },
  {
    path: '/sembang',
    name: 'PrivateChat',
    component: PrivateChat
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
