<template>
    <div class="head">
        <img src="@/assets/images/cms_logo.svg" alt="" class="cms_logo">

        <div class="cms_name" v-html="$t('message.cms_name')"></div>
    </div>
</template>


<script>
export default {
    name: 'AuthHeader',
}
</script>


<style scoped src="@/assets/css/auth/authHeader.css"></style>