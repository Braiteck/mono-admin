import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import i18n from './locale'


// Импорт плагинов
import VueMeta from 'vue-meta'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueToast from 'vue-toast-notification'


// Импорт компонентов
Vue.component('Preloader', () => import('./components/Preloader.vue'))
Vue.component('BaseButton', () => import('./components/BaseButton.vue'))
Vue.component('BaseIcon', () => import('./components/BaseIcon.vue'))
Vue.component('BaseFormLabel', () => import('./components/BaseFormLabel.vue'))
Vue.component('BaseFormError', () => import('./components/BaseFormError.vue'))


// Vue config
Vue.config.productionTip = false
Vue.config.performance = true


// Vue use
Vue.use(VueMeta)
Vue.use(Vuelidate)
Vue.use(VueAxios, axios)

// Настройки плагина всплывающих уведомлений
Vue.use(VueToast, {
    position: 'top-right',
    duration: 5000,
    pauseOnHover: true
})


// Настройки Axios
Vue.axios.defaults.baseURL = process.env.VUE_APP_API_URL
Vue.axios.defaults.https = process.env.VUE_APP_HTTPS

Vue.axios.defaults.headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

Vue.axios.defaults.headers.common = {
    'Authorization': `Bearer ${store.state.user.data.token}`
}

Vue.axios.interceptors.response.use(response => response, error => {
    if (error.response && error.response.data.message === 'Unauthenticated.') {
        // Очистка данных о пользователе
        store.dispatch('user/errorToken').then(() => {
            // Редирект на страницу входа
            router.push({ name: 'Login' })
        })
    }

    return Promise.reject(error)
})


// Импорт директив
import DFocus from './directives/focus'


new Vue({
    store,
    router,
    i18n,
    directives: {
        focus: DFocus,
    },
    metaInfo: {
        titleTemplate: i18n.t('message.page_title_global') + '%s',
        htmlAttrs: {
            lang: process.env.VUE_APP_LANG
        },
    },
    render: h => h(App),
}).$mount('#app')
