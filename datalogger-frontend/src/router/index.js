import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard'
import DeviceInfo from '../views/DeviceInfo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/device',
    name: 'DeviceInfo',
    // component: () => import(/* webpackChunkName: "about" */ '../views/DeviceInfo.vue')
    component: DeviceInfo
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
