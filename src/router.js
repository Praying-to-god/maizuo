// 引入vue
import Vue from 'vue'

// 引入VueRouter
import VueRouter from 'vue-router'

// 调用VueRouter
Vue.use(VueRouter)

// 定义路由规则
const routes = [
    {
        path: '/',
        component: () => import('./views/Home/index.vue'),
        children: [
            {
                path: 'films',
                component: () => import('./views/Home/films.vue')
            },
            {
                path: 'center',
                component: () => import('./views/Home/center.vue')
            },
            {
                path: 'cinemas',
                component: () => import('./views/Home/cinemas.vue')
            },
            {
                path: 'brand',
                component: () => import('./views/Home/brand.vue')
            }
        ]
    },
    {
        path: '/city',
        component: () => import('./views/City/index.vue')
    },
    {
        path: '/film/:filmId',
        component: () => import('./views/Film/index.vue')
    },
    {
        path: '/login',
        component: () => import('./views/Login/index.vue')
    },
    {
        path: '/money',
        component: () => import('./views/Money/index.vue')
    }
]

// 创建路由实例对象
const router = new VueRouter({
    routes
})

// 暴露
export default router
