import Vue from 'vue'
import Router from 'vue-router'
import Authors from '@/views/Authors'
import Languages from '@/views/Languages'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Authors',
      component: Authors
    },
    {
      path: '/languages',
      name: 'Languages',
      component: Languages
    }
  ]
})
