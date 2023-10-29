import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/academy',
    name: 'Academy Details',
    component: loadPage('AcademyPage')
  },
  {
    path: '/apothecary',
    name: 'Apothecary Details',
    component: loadPage('ApothecaryPage')
  },
  {
    path: '/castle',
    name: 'Castle',
    component: loadPage('CastlePage')
  },
  {
    path: '/guard',
    name: 'Security Details',
    component: loadPage('GuardPage')
  },
  {
    path: '/museum',
    name: 'Museum Details',
    component: loadPage('MuseumPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
