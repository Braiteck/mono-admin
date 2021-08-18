<template>
    <div class="error_info">
        <base-icon icon-name="ic_warning" />

        <slot>
            <div class="message">
                {{ errorMessage }}
            </div>
        </slot>
    </div>
</template>


<script>
    export default {
        name: 'BaseFormFieldError',

        // Входные параметры
        props: {
            errorMessage: {
                type: String,
                required: true,
            },
        },
    }
</script>