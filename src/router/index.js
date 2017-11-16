import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/index/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'index',
      path: '/',
      components: {
        default: (resolve) => { require(['../components/index/index.vue'], resolve) }
      },
      children: [
        {
          name: 'Index-about',
          path: '/',
          component (resolve) {
            require(['../components/content/about.vue'], resolve)
          }
        },
        {
          name: 'Index-service',
          path: 'service',
          component (resolve) {
            require(['../components/content/service.vue'], resolve)
          }
        },
        {
          name: 'Index-knowledge',
          path: 'knowledge',
          component (resolve) {
            require(['../components/content/knowledge.vue'], resolve)
          }
        },
        {
          name: 'Index-share',
          path: 'share',
          component (resolve) {
            require(['../components/content/share.vue'], resolve)
          }
        },
        {
          name: 'Index-contact',
          path: 'contact',
          component (resolve) {
            require(['../components/content/contact.vue'], resolve)
          }
        }
      ]
    }
  ]
})
