<template>
    <!-- Данные пользователя -->
    <div class="user">
        <!-- Текущий пользователь -->
        <user-current @toggleUserDropdown="showDropdown = !showDropdown" />

        <!-- Выпадающий список -->
        <user-dropdown :class="{ show: showDropdown }" />
    </div>
</template>


<script>
// Импорт компонентов
import UserCurrent from "@/components/topPanel/UserCurrent.vue"
import UserDropdown from "@/components/topPanel/UserDropdown.vue"


export default {
    name: 'User',

    // Компоненты
    components: {
        UserCurrent, // Логотип
        UserDropdown, // Пользователь
    },

    // Локальные данные
    data () {
        return {
            showDropdown: false,
        }
    }
}
</script>


<style scoped src="@/assets/css/topPanel/user.css"></style>