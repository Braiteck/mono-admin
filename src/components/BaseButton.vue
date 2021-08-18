<template>
    <button class="btn " :class="classes">
        <slot>
            <span class="btn_label">{{ buttonText }}</span>
        </slot>

        <preloader v-if="loading" />
    </button>
</template>


<script>
    export default {
        name: 'BaseButton',

        // Входные параметры
        props: {
            classes: {
                type: String,
                required: false,
                default: '',
            },

            buttonText: {
                type: String,
                required: true,
            },

            loading: {
                type: Boolean,
                default: false,
            },
        },
    }
</script>


<style src="@/assets/css/button.css"></style>