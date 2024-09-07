<template>
    <header :class="{'scrolled': scrolled}">
        <HeLimiter>
            <div class="button-wrapper">
                <IodButton :is="NuxtLink" to="/" corner="pill" variant="text" size="s" aria-label="Zur Startseite">
                    <BrandText color="currentColor"/>
                </IodButton>
            </div>
            <HeSpacer />
            <div class="button-wrapper group">
                <IodIconButton type="button" icon="menu" aria-label="Menü öffnen" corner="pill" variant="text" size="s"/>
            </div>
        </HeLimiter>
    </header>
</template>

<script lang="ts" setup>
    const NuxtLink = defineNuxtLink({})

    const scrolled = ref(false)

    function onScroll()
    {
        scrolled.value = window.scrollY > 100
    }



    onMounted(() => {
        window.addEventListener('scroll', onScroll)
        onScroll()
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', onScroll)
    })
</script>

<style lang="sass" scoped>
    header
        position: fixed
        left: 0
        top: 0
        width: 100%
        height: 4.5rem
        z-index: 1000
        transition: all 500ms

        &.scrolled
            .button-wrapper
                background-color: #ffffffaa
                box-shadow: 0 .5rem 2rem #650db430
                backdrop-filter: blur(20px)

                .iod-button
                    --local-color-background: var(--color-text)

        .he-limiter
            position: relative
            z-index: 1
            height: 100% !important
            display: flex !important
            align-items: center !important
            gap: 2rem

        .button-wrapper
            display: flex
            background-color: transparent
            border-radius: 2.5rem
            padding-block: .25rem
            padding-inline: .25rem
            gap: .25rem
            transition: all 500ms
            margin-inline: -1rem

            &.group
                padding-inline: .75rem
            
            .brand-item
                height: 1rem

            .iod-button
                --local-color-background: var(--color-text-soft)

                &:hover
                    --local-color-background: var(--color-primary) !important

    

    @media (max-width: 400px)
        .he-limiter .button-wrapper
            margin-inline: 0rem
</style>
