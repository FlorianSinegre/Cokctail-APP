import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/NavBar.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/ramdom.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Search.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/views/Favoris.vue')
      }
    ]
  },
  {
    path: '/drinks-by-ingredient/:ingredient',
    component: () => import('@/views/DrinksByIngredient.vue')
  },
  {
    path: '/drinks-by-favoris/:id',
    component: () => import('@/views/FavorisVue.vue')
  },
  {
    path: '/drink/:id',
    component: () => import('@/views/Drink.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
