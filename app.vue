<template>
    <NuxtLoadingIndicator color="var(--color-primary)"/>
    <ClientOnly>
        <CursorFollower v-if="device.isPointerDevice"/>
    </ClientOnly>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script lang="ts" setup>
    useHead({
        htmlAttrs: {
            lang: 'de',
        },
    })

    const device = useDevice()
</script>