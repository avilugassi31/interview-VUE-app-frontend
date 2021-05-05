import Vue from 'vue'
import VueRouter from 'vue-router'
import table1 from '../views/table1.vue'
import table2 from '../views/table2.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/table1',
    name: 'table1',
    component: table1
  },
  {
    path: '/table2/:productId',
    name: 'table2',
    component: table2
  }
]

const router = new VueRouter({
  routes
})

export default router
