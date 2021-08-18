import Vue from 'vue'
import VueI18n from 'vue-i18n'
import VueI18nMessages from '@/locale/messages'


// Vue use
Vue.use(VueI18n)


export default new VueI18n({
    locale: process.env.VUE_APP_LANG,
    fallbackLocale: process.env.VUE_APP_LANG,
    messages: VueI18nMessages,
    pluralizationRules: {
        'ru': function (choice, choicesLength) {
            if (choice === 0) {
                return 0
            }

            const teen = choice > 10 && choice < 20,
                endsWithOne = choice % 10 === 1

            if (choicesLength < 4) {
                return (!teen && endsWithOne) ? 1 : 2
            }
            if (!teen && endsWithOne) {
                return 1
            }
            if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
                return 2
            }

            return (choicesLength < 4) ? 2 : 3
        }
    }
})