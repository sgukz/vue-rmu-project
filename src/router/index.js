import Vue from 'vue'
import VueRouter from 'vue-router'
import shotform from '@/views/forms/shot.vue'
// import fullform from '@/views/forms/full.vue'
import welcome from '@/views/welcome'
import login from '@/views/LoginAdmin'
import mainAdmin from '@/views/ShowDataAdmin'
import googleMap from '@/views/GoogleMap'

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
    path: '/COE/login',
    name: 'login-admin',
    component: login
  },
  {
    path: '/COE/main',
    name: 'main-admin',
    component: mainAdmin
  },
  {
    path: '/google-map',
    name: 'map',
    component: googleMap
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
