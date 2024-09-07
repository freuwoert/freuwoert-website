<template>
    <footer>
        <HeLimiter>
            <span>© {{ new Date().getFullYear() }} Alyx Freuwört</span>
            <HeSpacer />
            <NuxtLink to="/impressum">Impressum</NuxtLink>
            <NuxtLink to="/datenschutz">Datenschutz</NuxtLink>
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
        align-items: center !important
        flex-wrap: wrap
        gap: 2rem
        font-size: .875rem

        a
            color: var(--color-text)
            text-decoration: none
            transition: all 200ms ease-in-out

            &:hover
                color: var(--color-primary)


    
    @media (max-width: 470px)
        .he-limiter
            flex-direction: column
            align-items: flex-start
            justify-content: center
            gap: 1rem

            .he-spacer
                display: none
</style>