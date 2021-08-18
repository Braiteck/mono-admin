<template>
    <section id="account">
        <!-- Верхняя панель -->
        <top-panel />

        <!-- Контент страницы -->
        <transition name="fadeIn" mode="out-in">
        <router-view />
        </transition>
    </section>
</template>


<script>
// Импорт CSS
import '@/assets/css/account.css'

// Импорт компонентов
import TopPanel from "@/components/TheTopPanel.vue"

export default {
    name: 'Account',

    // Компоненты
    components: {
        TopPanel, // Верхняя панель
    },
}
</script>