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

        &.elevated-m
            background: var(--color-background)
            box-shadow: 0 1rem 2rem #650db420
            
        &.elevated-l
            background: var(--color-background)
            box-shadow: 0 1rem 4rem #650db430

        .effects
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
            pointer-events: none
            z-index: 1
</style>