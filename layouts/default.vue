<template>
    <AppHeader />
    <main>
        <slot />
    </main>
    <AppFooter />
</template>

<script lang="ts" setup>
    useHead({
        titleTemplate: (title) => title ? `${title} – Alyx Freuwört` : 'Alyx Freuwört',
        bodyAttrs: {
            class: 'background small-scrollbar'
        }
    })
</script>
