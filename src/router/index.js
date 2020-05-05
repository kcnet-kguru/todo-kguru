import Vue from 'vue'
import VueRouter from "vue-router"
import Home from '../view/Home'
import Login from "../view/Login"
import Board from "../view/Board"
import Card from "../view/Card"
import NotFound from "../view/NotFound"
import store from '../store'

Vue.use(VueRouter)

const requireAuth = () => (from, to, next) => {
    store.state.accessToken ?
      next() :
      next(`/login?returnPath=${encodeURIComponent(from.path)}`)
}

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            beforeEnter: requireAuth()
        }, {
            path: '/login',
            component: Login
        }, {
            path: '/board/:id',
            component: Board,
            beforeEnter: requireAuth(),
            children: [
                {
                    path: 'card/:cid',
                    component: Card
                }
            ]
        }, {
            path:'*',
            component: NotFound
        },
    ]
})
