<template>
    <!-- Выпадающий список -->
    <div class="dropdown user_dropdown">
        <div class="info">
            <div class="avatar">
                <img :src="user.avatar" alt="">
            </div>

            <div class="name">{{ user.first_name }} {{ user.last_name }}</div>
            <div class="email">{{ user.email }}</div>
        </div>

        <div class="links">
            <div class="border">
                <router-link to="/profile" class="link">
                    <base-icon icon-name="ic_user" />
                    <span>{{ $t('message.user_profile_link') }}</span>
                </router-link>
            </div>

            <div class="border">
                <button class="link logout_btn">
                    <base-icon icon-name="ic_logout" />
                    <span>{{ $t('message.user_logout_btn') }}</span>
                </button>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'UserDropdown',

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


<style src="@/assets/css/topPanel/userDropdown.css"></style>