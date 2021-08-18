<template>
    <div class="label"><slot>{{ labelText }}</slot></div>
</template>


<script>
    export default {
        name: 'BaseFormLabel',

        // Входные параметры
        props: {
            labelText: {
                type: String,
                required: true,
            },
        },
    }
</script>