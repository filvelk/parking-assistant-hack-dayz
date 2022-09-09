import Vue from 'vue'
import Router from 'vue-router'
import { LoginRoutes } from './features/login/routes'
import { StreetRoutes } from './features/dashboard/routes'
import Login from './features/login/components/Login'

Vue.use(Router)

export const routes = [
    {
        path: '/',
        component: Login
    },
    ...LoginRoutes,
    ...StreetRoutes
]

const router = new Router({
    mode: 'history',
    routes
})

export default router
