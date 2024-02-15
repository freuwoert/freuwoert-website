<template>
    <section>
        <div class="effects" v-if="$slots.effects">
            <slot name="effects"/>
        </div>
        <slot></slot>
    </section>
</template>

<script lang="ts" setup>
    defineProps({
        gridLines: {
            type: Boolean,
            default: false,
        },
        gridLineGradient: {
            type: Boolean,
            default: false,
        }
    })
</script>

<style lang="sass" scoped>
    section
        display: flex
        position: relative
        font-size: var(--size-text)

        .effects
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
            pointer-events: none
            z-index: 1
</style>