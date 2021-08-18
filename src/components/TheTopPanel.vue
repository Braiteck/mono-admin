<template>
    <!-- Верхняя панель -->
    <section id="top_panel">
        <!-- Логотип -->
        <logo />

        <!-- Верхняя панель -->
        <user />
    </section>
</template>


<script>
// Импорт компонентов
import Logo from "@/components/topPanel/Logo.vue"
import User from "@/components/topPanel/User.vue"

export default {
    name: 'TopPanel',

    // Компоненты
    components: {
        Logo, // Логотип
        User, // Пользователь
    },
}
</script>


<style scoped src="@/assets/css/topPanel.css"></style>