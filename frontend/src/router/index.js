import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Agendar from '@/views/Agendar.vue'
import Listar from '@/views/Listar.vue'
import Editar from '@/views/Editar.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/agendar',
    name: 'Agendar',
    component: Agendar
  },
  {
    path: '/listar',
    name: 'Listar',
    component: Listar
  },
  {
    path: '/editar',
    name: 'Editar',
    component: Editar
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router