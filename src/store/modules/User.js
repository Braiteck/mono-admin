import Vue from 'vue'

export default {
    namespaced: true,

    state: {
        isLogged: false,
        data: {}
    },


    mutations: {
        // Запись в state данных о пользователе
        SET_USER(state, userData) {
            console.log(userData)
            state.data = userData
            state.isLogged = true

            // Добавление токена ко всем запросам
            Vue.axios.defaults.headers.common = { 'Authorization': `Bearer ${state.data.token}` }
        }
    },


    actions: {
        // Авторизация пользователя
        // async login({ commit }, formData) {
        //     return await Vue.axios.post('/auth/login', formData)
        //         .then(res => {
        //             commit('SET_USER', res.data)
        //             return res.data
        //         })
        //         .catch(error => error.response.data)
        // },

        async login({ commit }) {
            var data = {
                "avatar": "",
                "first_name": "Виталий",
                "last_name": "Сулименко",
                "email": "prevetal@gmail.com",
                "token": '1234567890'
            }

            commit('SET_USER', data)
            return data
        },


        // Получение данных о юзере
        async getUserData({ commit }) {
            var data = {
                "avatar": "",
                "first_name": "Виталий",
                "last_name": "Сулименко",
                "email": "prevetal@gmail.com",
                "token": '1234567890'
            }

            commit('SET_USER', data)
            return data

            // return await Vue.axios.get('/user/userData.json')
            //     .then(() => {
            //         commit('SET_USER', data)
            //         return data
            //     })
            //     .catch(error => error.response)
        },
    },


    getters: {
        getData: state => state.data
    }
}