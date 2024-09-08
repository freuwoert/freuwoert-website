<template>
    <NuxtLink :to="href" class="project-card" data-cf :data-cf-color="color" data-cf-text="Projekt öffnen" :style="`--local-color-hard: ${color}; --local-color-medium: ${color}30; --local-color-soft: ${color}10;`">
        <div class="image-wrapper">
            <img :src="thumbnail" :alt="title" />
        </div>
        <div class="text-group flex-1">
            <h3>{{ title }}</h3>
            <div class="tags">
                <div class="tag" v-for="tag in tags" :key="tag">{{ tag }}</div>
            </div>
        </div>
    </NuxtLink>
</template>

<script lang="ts" setup>
    defineProps({
        title: {
            type: String,
            defautl: null,
        },
        client: {
            type: String,
            default: null,
        },
        color: {
            type: String,
            default: null,
        },
        href: {
            type: String,
            default: null,
        },
        thumbnail: {
            type: String,
            default: null,
        },
        tags: {
            type: Array as PropType<string[]>,
            default: () => [],
        },
    })
</script>

<style lang="sass" scoped>
    .project-card
        display: flex
        flex-direction: column
        background-color: var(--color-background)
        border-radius: 1.5rem
        transition: all 200ms ease-in-out
        overflow: hidden
        text-decoration: none

        &:hover
            border-color: var(--local-color-soft)
            box-shadow: 0 1rem 4rem var(--local-color-medium)
            background-color: var(--color-background)

            .image-wrapper
                width: calc(100% - 1rem)
                height: 19rem
                margin: .5rem
                border-radius: 1rem

                img
                    scale: 1.05

        .image-wrapper
            display: flex
            align-items: center
            justify-content: center
            border-radius: inherit
            width: 100%
            height: 20rem
            margin-bottom: 0
            overflow: hidden
            transition: all 200ms ease-in-out

            img
                width: 100%
                height: 100%
                object-fit: cover
                object-position: center
                transition: all 200ms ease-in-out

        .text-group
            padding: 1.5rem 1rem
            display: flex
            flex-direction: column

            h3
                color: var(--color-text)
                font-size: var(--size-heading-xs)
                letter-spacing: 0em
                font-weight: 500
                margin: 0
                margin-bottom: 1.5rem

            .tags
                display: flex
                gap: 1rem
                flex-wrap: wrap

                .tag
                    display: flex
                    align-items: center
                    padding-inline: 1rem
                    position: relative
                    font-family: var(--font-heading)
                    border-radius: 3rem
                    height: clamp(1.75rem, 5vw, 2rem)
                    font-size: var(--size-small)
                    color: var(--local-color-hard)
                    background-color: var(--local-color-soft)



    @media (max-width: 480px)
        .project-card
            &:hover
                .image-wrapper
                    height: 15rem

            .image-wrapper
                height: 13rem

            .text-group
                padding: 1rem

                .tags
                    gap: .75rem
</style>