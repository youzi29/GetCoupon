import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.vue'
import get from '@/components/get/index.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/get',
      name: 'get',
      component: get
    }
  ]
})
