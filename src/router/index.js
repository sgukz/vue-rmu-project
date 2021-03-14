import Vue from 'vue'
import VueRouter from 'vue-router'
import shotform from '@/views/forms/shot.vue'
import fullform from '@/views/forms/full.vue'
import welcome from '@/views/welcome'


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
    path: '/full',
    name: 'full-form',
    component: fullform
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
