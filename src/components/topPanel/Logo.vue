<template>
    <!-- Логотип -->
    <div class="logo">
        <img src="@/assets/images/cms_logo.svg" alt="">

        <div class="name" v-html="$t('message.cms_name')"></div>
    </div>
</template>


<script>
export default {
    name: 'Logo',
}
</script>


<style scoped src="@/assets/css/topPanel/logo.css"></style>