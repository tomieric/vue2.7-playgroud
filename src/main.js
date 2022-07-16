import Vue from 'vue'
import './style.css'
import App from './App.vue'
import { useRouter } from './router'

const router = useRouter()

export default new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
