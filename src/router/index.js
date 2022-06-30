import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect:'/smartImage1'
  },
  {
    path:'/smartImage1',
    name:'smartImage1',
    component: () => import('../views/smartImage1.vue'),
    meta:{title:'智能图片识别',author:'dkymore'}
  },
  {
    path:'/smartImage2',
    name:'smartImage2',
    component: () => import('../views/smartImage2.vue'),
    meta:{title:'智能图片识别',author:'胡智涵'}
  },
  {
    path:'/smartImage3',
    name:'smartImage3',
    component: () => import('../views/smartImage3.vue'),
    meta:{title:'智能图片识别',author:'陈裔杰'}
  },
  {
    path:'/smartImage4',
    name:'smartImage4',
    component: () => import('../views/smartImage4.vue'),
    meta:{title:'智能图片识别',author:'戴树诚'}
  },
  {
    path:'/acgnManager',
    name:'acgnManager',
    component: () => import('../views/acgnManager.vue'),
    meta:{title:'ACGN管理',author:'dkymore'}
  },
  {
    path:'/pixiv',
    name:'pixiv',
    component: () => import('../views/pixiv.vue'),
    meta:{title:'Pixiv',author:'戴树诚'}
  },
  {
    path:'/taobao',
    name:'taobao',
    component: () => import('../views/taobao.vue'),
    meta:{title:'Taobao',author:'陈裔杰'}
  },
  {
    path:'/ff14',
    name:'ff14',
    component: () => import('../views/ff14wiki.vue'),
    meta:{title:'ff14wiki',author:'胡智涵'}
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
