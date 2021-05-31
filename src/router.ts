import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Roster from './views/Roster.vue'
import Sales from './views/Sales.vue'
import Recruitment from './views/Recruitment.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/roster', name: 'Roster', component: Roster },
  { path: '/sales', name: 'Sales', component: Sales },
  { path: '/recruitment', name: 'Recruitment', component: Recruitment },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
