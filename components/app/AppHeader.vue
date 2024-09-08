<template>
    <header :class="{'scrolled': scrolled}">
        <HeLimiter class="extra-padding">
            <div class="flex items-center h-16">
                <NuxtLink to="/" class="font-bold">Alyx Freuwört</NuxtLink>
                <HeSpacer />
                <HeMenu class="h-10" :menu="useMenu('main')" mobile-submenu-show-toggle />
            </div>
        </HeLimiter>
    </header>
</template>

<script lang="ts" setup>
    const scrolled = ref(false)

    function onScroll() {
        scrolled.value = window.scrollY > 40
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
        position: sticky
        left: 0
        top: 0
        width: 100%
        z-index: 1000
        transition: all 500ms

        &.scrolled
            background-color: #ffffffaa
            box-shadow: 0 .5rem 2rem #650db430
            backdrop-filter: blur(20px)
</style>
