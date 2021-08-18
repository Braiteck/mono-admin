<template>
    <!-- Страница ошибки -->
    <section id="error_info">
        <div class="title">
            {{ $t('message.error_title_404') }}
        </div>

        <div class="name">
            {{ $t('message.error_name_404') }}
        </div>

        <base-button classes="primary back_btn"
            :buttonText="$t('message.btn_back')"
            @click="$router.go(-1)" />
    </section>
</template>


<script>
export default {
    name: 'Error404'
}
</script>