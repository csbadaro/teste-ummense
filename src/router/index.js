import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Contato from '@/components/contato/Contato'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contato',
      name: 'Contato',
      component: Contato
    }
  ]
})
