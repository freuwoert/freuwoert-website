<template>
    <footer>
        <div class="limiter extra-padding">
            <div class="button-wrapper">
                <IodButton :is="NuxtLink" to="/" shape="pill" variant="text" size="small" aria-label="Zur Startseite">
                    <BrandText color="currentColor"/>
                </IodButton>
            </div>
            <Spacer />
            <div class="button-wrapper">
                <IodButton :is="NuxtLink" to="/impressum" label="Impressum" shape="pill" variant="text" size="small" />
                <IodButton :is="NuxtLink" to="/datenschutz" label="Datenschutz" shape="pill" variant="text" size="small" />
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
    const NuxtLink = defineNuxtLink({})
</script>

<style lang="sass" scoped>
    footer
        border-top: 1px solid var(--color-border)
        padding-block: 1rem

    .limiter
        display: flex
        align-items: center
        flex-wrap: wrap

    .button-wrapper
        display: flex
        border-radius: 2.5rem
        padding-block: .25rem
        padding-inline: .25rem
        gap: .25rem
        transition: all 500ms
        margin-inline: -1rem

        &.group
            padding-inline: .75rem
        
        .brand-item
            height: .75rem

        .iod-button
            --local-color-background: var(--color-text-soft)

            &:hover
                --local-color-background: var(--color-primary) !important


    
    @media (max-width: 400px)
        .limiter
            flex-direction: column
            align-items: flex-start
            justify-content: center

            .spacer
                display: none

            .button-wrapper
                margin-inline: 0rem
</style>