import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/',
      component: resolve => require(
        ['../components/common/Home.vue'], resolve),
      meta: { title: '自述文件' },
      children: [
        {
          path: '/dashboard',
          component: resolve => require(['../components/pages/Dashboard.vue'], resolve),
          meta: { title: '系统首页' }
        },
        {
          path: '/table',
          component: resolve => require(['../components/pages/BaseTable.vue'], resolve),
          meta: { title: '基础表格' }
        },
        {
          path: '/tabs',
          component: resolve => require(['../components/pages/Tabs.vue'], resolve),
          meta: { title: 'tab选项卡' }
        },
        {
          path: '/form',
          component: resolve => require(['../components/pages/Vue.vue'], resolve),
          meta: { title: '基本表单' }
        },
        {
          // 富文本编辑器组件
          path: '/editor',
          component: resolve => require(['../components/pages/Vue.vue'], resolve),
          meta: { title: '富文本编辑器' }
        },
        {
          // markdown组件
          path: '/markdown',
          component: resolve => require(['../components/pages/Vue.vue'], resolve),
          meta: { title: 'markdown编辑器' }
        },
        {
          // 图片上传组件
          path: '/upload',
          component: resolve => require(['../components/pages/Vue.vue'], resolve),
          meta: { title: '文件上传' }
        },
        {
          // vue-schart组件
          path: '/charts',
          component: resolve => require(['../components/pages/Vue.vue'], resolve),
          meta: { title: 'schart图表' }
        },
        {
          // 拖拽列表组件
          path: '/drag',
          component: resolve => require(['../components/pages/Vue.vue'], resolve),
          meta: { title: '拖拽列表' }
        },
        {
          // 权限页面
          path: '/permission',
          component: resolve => require(['../components/pages/Vue.vue'], resolve),
          meta: { title: '权限测试', permission: true }
        }
      ]
    },
    {
      path: '/dashboard',
      component: resolve => require(['../components/pages/Vue.vue'], resolve)
    },
    {
      path: '/login',
      component: resolve => require(['../components/pages/Login.vue'], resolve)
    }
    ,
    {
      path: '/404',
      component: resolve => require(['../components/pages/Vue.vue'], resolve)
    }
  ]
})
