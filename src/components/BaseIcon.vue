<template>
    <div class="icon">
        <slot>
            <svg><use :xlink:href="require('@/assets/images/sprite.svg') + `#${iconName}`"></use></svg>
        </slot>
    </div>
</template>


<script>
    export default {
        name: 'BaseIcon',

        // Входные параметры
        props: {
            iconName: {
                type: String,
                required: true,
            },
        }
    }
</script>