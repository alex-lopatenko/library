import {createRouter, createWebHashHistory} from 'vue-router'

const routerHistory = createWebHashHistory()

import HomePage from '@/pages/homePage'
import ShopPage from '@/pages/shopPage'
import LibraryPage from '@/pages/libraryPage'
import CommunityPage from '@/pages/communityPage'
import UserPage from '@/pages/userPage'
import NotFoundPage from '@/pages/notFoundPage'

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePage,
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopPage,
    },
    {
      path: '/library',
      name: 'library',
      component: LibraryPage,
    },
    {
      path: '/community',
      name: 'community',
      component: CommunityPage,
    },
    {
      path: '/user',
      name: 'user',
      component: UserPage,
    },
    {
      path: '/:CathAll(.*)',
      name: '404',
      component: NotFoundPage,
    }
  ]
})

export default routers