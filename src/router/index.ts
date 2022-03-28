import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: '', // 默认子路由 为空的子路由会在访问/ 的时候默认加载
        name: 'home',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue')
      }
    ]
  }
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
