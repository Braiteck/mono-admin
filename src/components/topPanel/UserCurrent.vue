<template>
    <!-- Текущий пользователь -->
    <div class="current" @click.prevent="$emit('toggleUserDropdown')">
        <div class="avatar">
            <img :src="user.avatar" alt="">
        </div>

        <div>
            <div class="first_name">{{ user.first_name }}</div>
            <div class="last_name">{{ user.last_name }}</div>
        </div>

        <div class="icon"></div>
    </div>
</template>


<script>
export default {
    name: 'UserCurrent',

    // Локальные данные
    data () {
        return {
            user: {
                avatar: '',
                first_name: 'Виталий',
                last_name: 'Сулименко',
                email: 'prevetal@gmail.com',
            }
        }
    },
}
</script>


<style scoped src="@/assets/css/topPanel/userCurrent.css"></style>