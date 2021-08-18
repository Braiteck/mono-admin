import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'


// Vue use
Vue.use(VueRouter)


// Роутер
const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        // Авторизация - Вход
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/pages/auth/Login'),
            meta: {
                layout: 'Auth',
                accessDenied: ['authorized']
            }
        },

        // Дашборд
        {
            path: '/',
            name: 'Dashboard',
            component: () => import('@/pages/Dashboard'),
            meta: {
                layout: 'Account',
                accessDenied: ['not_authorized']
            }
        },

        // Страница ошибки
        {
            path: '*',
            name: 'Error',
            component: () => import('@/pages/Error'),
            meta: {
                layout: 'Error'
            }
        },
    ]
})


router.beforeEach((to, from, next) => {
    // Загрузка данных юзера если был авторизован ранее
    if (store.state.user.isLogged && !store.state.user.id) {
        store.dispatch('user/getUserData').catch(error => {
            console.log(error.response)
        })
    }

    // Проверка доступа к странице
    to.matched.some(record => {
        // Массив с запретами к доступу
        let access = record.meta.accessDenied

        if (access) {
            // Запрещено авторизованному
            if (access.includes('authorized') && store.state.user.isLogged) {
                next({ name: 'Dashboard' })
            }

            // Запрещено не авторизованному
            if (access.includes('not_authorized') && !store.state.user.isLogged) {
                next({ name: 'Login' })
            }
        }

        next()
    })
})

export default router