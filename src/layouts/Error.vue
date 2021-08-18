<template>
    <transition name="fadeInUp" mode="out-in">
    <router-view />
    </transition>
</template>


<script>
// Импорт CSS
import '@/assets/css/error.css'

export default {
    name: 'Error',

    // Мета данные
    metaInfo: function () {
        return {
            title: this.$i18n.t('message.page_title_error'),
        }
    },
}
</script>