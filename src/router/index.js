import Vue from 'vue'
import VueRouter from 'vue-router'
import shotform from '@/views/forms/shot.vue'
// import fullform from '@/views/forms/full.vue'
import welcome from '@/views/welcome'
import login from '@/views/LoginAdmin'
import mainAdmin from '@/views/ShowDataAdmin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: welcome
  },
  {
    path: '/shot-form',
    name: 'shot-form',
    component: shotform
  },
  {
    path: '/Administrator/login',
    name: 'login-admin',
    component: login
  },
  {
    path: '/Administrator/main',
    name: 'main-admin',
    component: mainAdmin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
