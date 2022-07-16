import Vue, { computed } from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = createRouter()

export function createRouter() {
  return new VueRouter({
    mode: 'hash',
    routes,
  })
}

export function useRouter() {
  return router
}

export function useRoute() {
  const r = useRouter()
  const route = ref({})

  r.afterEach((to) => {
    route.value = to
  })

  return {
    route
  }
}

// hooks
router.beforeEach((to, from, next) => {
  // todo
  next()
})

export default router