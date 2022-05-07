import { createRouter, createWebHistory } from 'vue-router'
import RedirectToHome from 'pages/index.vue'
import Home from 'pages/home.vue'

const routes = [
    {
        path: '/',
        name: 'RedirectToHome',
        component: RedirectToHome
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router