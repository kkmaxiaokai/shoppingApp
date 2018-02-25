import Vue from 'vue'
import Router from 'vue-router'

import ppt1 from '@/components/public/ppt1'
import ppt2 from '@/components/public/ppt2'
import footNav from '@/components/public/footNav'

import Index from '@/components/page/Index'
import List from '@/components/page/List'
import Talk from '@/components/page/Talk'
import ShopCar from '@/components/page/ShopCar'
import Mine from '@/components/page/Mine'


import Reg from '@/components/page/Reg'
import Login from '@/components/page/Login'

import Search from '@/components/page/Search'

import ListBig from '@/components/page/ListBig'

Vue.use(Router)

export default new Router({
	linkActiveClass:'mui-active',
  routes: [
    {
      path: '/ppt2',
      name: 'ppt2',
      component: ppt2
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/Talk',
      name: 'Talk',
      component: Talk
    },
    {
      path: '/ShopCar',
      name: 'ShopCar',
      component: ShopCar
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/Reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/ListBig',
      name: 'ListBig',
      component: ListBig
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
  	{
      path: '/footNav',
      name: 'footNav',
      component: footNav
    },
    {
      path: '/ppt1',
      name: 'ppt1',
      component: ppt1
    }
  ]
})
