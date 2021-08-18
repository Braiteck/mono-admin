<template>
    <transition name="fadeInUp" mode="out-in">
    <router-view />
    </transition>
</template>


<script>
export default {
    name: 'Auth'
}
</script>


<style scoped src="@/assets/css/auth/auth.css"></style>