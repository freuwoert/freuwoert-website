<template>
    <NuxtLink to="/" class="project-card" data-cf :data-cf-color="project.color" data-cf-text="Projekt öffnen" :style="`--local-color-hard: ${project.color}; --local-color-medium: ${project.color}30; --local-color-soft: ${project.color}10;`">
        <div class="image-wrapper">
            <img :src="project.thumbnail" :alt="project.title" />
        </div>
        <div class="text-group flex-1">
            <h3>{{ project.title }}</h3>
            <div class="tags">
                <div class="tag" v-for="tag in project.tags" :key="tag">{{ tag }}</div>
            </div>
        </div>
    </NuxtLink>
</template>

<script lang="ts" setup>
    type Project = {
        title: string
        client: string
        color: string
        tags: string[]
        thumbnail: string
    }

    defineProps({
        project: {
            type: Object as PropType<Project>,
            required: true,
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
        border: 1px solid var(--local-color-medium)
        overflow: hidden
        text-decoration: none

        &:hover
            border-color: var(--local-color-soft)
            box-shadow: 0 1rem 4rem var(--local-color-medium)
            background-color: var(--color-background)

            .image-wrapper img
                scale: 1.05

        .image-wrapper
            display: flex
            align-items: center
            justify-content: center
            border-radius: 1rem
            width: calc(100% - 1rem)
            margin: .5rem
            margin-bottom: 0
            overflow: hidden

            img
                width: 100%
                aspect-ratio: 16/9
                object-fit: cover
                object-position: center
                transition: all 200ms ease-in-out

        .text-group
            padding: 1.5rem
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



    @media (max-width: 400px)
        .project-card
            .text-group
                padding: 1rem

                .tags
                    gap: .75rem
</style>