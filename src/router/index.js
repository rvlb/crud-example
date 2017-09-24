import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Model from '@/components/Model'

import Grid from '@/components/model/Grid'
import Form from '@/components/model/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:endpoint',
      component: Model,
      children: [
        {
          path: '/',
          name: 'list',
          component: Grid
        },
        {
          path: 'inserir/',
          name: 'create',
          component: Form
        },
        {
          path: 'visualizar/:objectId',
          name: 'detail',
          component: Form
        },
        {
          path: 'editar/:objectId',
          name: 'update',
          component: Form
        },
        {
          path: 'deletar/:objectId',
          name: 'delete',
          component: Form
        },
      ]
    }
  ]
})
