import Vue from 'vue'
import Vuex from 'vuex'
import vuejsStorage from 'vuejs-storage'


// Vue use
Vue.use(Vuex)
Vue.use(vuejsStorage)


// Модули
import moduleUser from './modules/User'


export default new Vuex.Store({
    state: () => ({

    }),


    mutations: {

    },


    actions: {

    },


    getters: {

    },


    modules: {
        user: moduleUser,
    },


    plugins: [
        // Синхронизация с localeStorage
        vuejsStorage({
            namespace: 'vuex',
            keys: ['user.data.token', 'user.isLogged'],
            driver: vuejsStorage.drivers.localeStorage,
        }),
    ]
})