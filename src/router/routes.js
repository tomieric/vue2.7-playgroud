import { TODO, DONE } from './enum'

export default [
  {
    path: '',
    redirect: { name: TODO }
  },
  {
    path: '/todo',
    name: TODO,
    component: () => import('../views/Todo.vue')
  },
  {
    path: '/done',
    name: DONE,
    component: () => import('../views/Done.vue')
  }
]
