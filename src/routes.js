import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('./components/pages/Home')
const Checkout = () => import('./components/pages/Checkout')

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/checkout", name: "checkout", component: Checkout },
]

export default new VueRouter({
    mode: "history",
    routes,
    scrollBehavior() {
        return { x:0, y:0 }
    }
})