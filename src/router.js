import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/second',
      name: 'second',
      component: () => import('./views/second/index.vue')
    },
    {
      path: '/second/1',
      name: 'axios2-1',
      component: () => import('./views/second/2-1.vue')
    },
    {
      path: '/second/2',
      name: 'axios2-2',
      component: () => import('./views/second/2-2.vue')
    },
    {
      path: '/second/3',
      name: 'axios2-3',
      component: () => import('./views/second/2-3.vue')
    },
    {
      path: '/third',
      name: 'axios3',
      component: () => import( './views/third/index.vue')
    },
    {
      path: '/third/1',
      name: 'axios3-1',
      component: () => import( './views/third/3-1.vue')
    },
    {
      path: '/third/2',
      name: 'axios3-2',
      component: () => import( './views/third/3-2.vue')
    },
    {
      path: '/third/3',
      name: 'axios3-3',
      component: () => import( './views/third/3-3.vue')
    },
    {
      path: '/third/4',
      name: 'axios3-4',
      component: () => import( './views/third/3-4.vue')
    },
    {
      path: '/third/5',
      name: 'axios3-5',
      component: () => import( './views/third/3-5.vue')
    },
    {
      path: '/fouth',
      name: 'fouth',
      component: () => import(/* webpackChunkName: "about" */ './views/Fouth.vue')
    }
  ]
})
