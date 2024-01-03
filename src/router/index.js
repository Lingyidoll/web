import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/index'
import Home from '@/views/home'
import ScenicArea from '@/views/scenicarea'
import Food from '@/views/food'
import Fruit from '@/views/fruit'
import Picture from '@/views/picture'

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect: 'Home',
    component: Index,
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'scenicarea',
        component: ScenicArea
      },
      {
        path: 'food',
        component: Food
      },
      {
        path: 'fruit',
        component: Fruit
      },
      {
        path: 'picture',
        component: Picture
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
