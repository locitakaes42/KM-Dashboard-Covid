import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import DetailPage from '../views/DetailPage.vue'
import TopikDominan from '../views/TopikDominan.vue'
import Klaster from '../views/Klaster.vue'
import PositifNaik from '@/views/cluster/PositifNaik.vue'
import PositifTurun from '@/views/cluster/PositifTurun.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/TopikDominan',
      name: 'topikdominan',
      component: TopikDominan
    },
    {
      path: '/:id/Detail',
      name: 'detail',
      component: DetailPage,
      props: true
    },
    {
      path: '/Klaster',
      name: 'klaster',
      component: Klaster,
      children: [
       
      ]
    },
    {
      path: '/PositifNaik',
      name: 'positifnaik',
      component: PositifNaik
    },
    {
      path: '/PositifTurun',
      name: 'positifTurun',
      component: PositifTurun
    }
  ]
})

export default router