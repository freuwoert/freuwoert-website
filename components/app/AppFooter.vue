<template>
    <footer>
        <HeLimiter>
            <span>© {{ new Date().getFullYear() }} Alyx Freuwört</span>
            <HeSpacer />
            <NuxtLink v-for="link in useMenu('legal')" :key="link.id" :to="link.href">{{ link.label }}</NuxtLink>
        </HeLimiter>
    </footer>
</template>

<script lang="ts" setup>
    const NuxtLink = defineNuxtLink({})
</script>

<style lang="sass" scoped>
    footer
        border-top: 1px solid var(--color-border)
        padding-block: 1rem

    .he-limiter
        display: flex !important
        align-items: center
        flex-wrap: wrap
        gap: 2rem
        font-size: .875rem

        a
            color: var(--color-text-soft)
            text-decoration: none
            transition: all 200ms ease-in-out
            font-weight: 500

            &:hover
                color: var(--color-text)


    
    @media (max-width: 480px)
        .he-limiter
            flex-direction: column
            align-items: flex-start
            justify-content: center
            gap: 1rem

            .he-spacer
                display: none
</style>