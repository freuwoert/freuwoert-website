<template>
    <div class="tech-card" :style="'--color-hover:'+icon.color" v-if="icon">
        <IodIcon :icon="icon.icon" :style="{fontFamily: icon.fontFamily}" />
        <div class="title">{{ icon.label }}</div>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps({
        type: String
    })

    const iconDict = {
        javascript: {fontFamily: 'var(--font-brand)', color: '#f7df1e', icon: '', label: 'JavaScript'},
        vuejs:      {fontFamily: 'var(--font-brand)', color: '#42b883', icon: '', label: 'Vue.js'},
        nuxtjs:     {fontFamily: 'var(--font-brand)', color: '#00DC82', icon: '', label: 'Nuxt.js'},
        nodejs:     {fontFamily: 'var(--font-brand)', color: '#336633', icon: '', label: 'NodeJS'},

        css:        {fontFamily: 'var(--font-brand)', color: '#264de4', icon: '', label: 'CSS'},
        sass:       {fontFamily: 'var(--font-brand)', color: '#cc6699', icon: '', label: 'Sass'},
        tailwind:   {fontFamily: 'var(--font-brand)', color: '#38bdf8', icon: '', label: 'Tailwind CSS'},

        sql:        {fontFamily: 'var(--font-icon)',  color: '#00758F', icon: 'database', label: 'SQL'},
        php:        {fontFamily: 'var(--font-brand)', color: '#777BB3', icon: '', label: 'PHP'},
        laravel:    {fontFamily: 'var(--font-brand)', color: '#f55247', icon: '', label: 'Laravel'},

        docker:     {fontFamily: 'var(--font-brand)', color: '#1D63ED', icon: '', label: 'Docker'},
        github:     {fontFamily: 'var(--font-brand)', color: '#1f2328', icon: '', label: 'GitHub'},
        git:        {fontFamily: 'var(--font-brand)', color: '#F1502F', icon: '', label: 'Git'},

        joomla:     {fontFamily: 'var(--font-brand)', color: '#25304f', icon: '', label: 'Joomla'},
        wordpress:  {fontFamily: 'var(--font-brand)', color: '#0073aa', icon: '', label: 'WordPress'},
        magento:    {fontFamily: 'var(--font-brand)', color: '#f46f25', icon: '', label: 'Magento'},
        drupal:     {fontFamily: 'var(--font-brand)', color: '#0077C0', icon: '', label: 'Drupal'},
        typo3:      {fontFamily: 'var(--font-brand)', color: '#f49700', icon: '', label: 'TYPO3'},

        figma:      {fontFamily: 'var(--font-brand)', color: '#0ACF83', icon: '', label: 'Figma'},
    }

    const icon = computed(() => iconDict[props.type as keyof typeof iconDict] || null)
</script>

<style lang="sass" scoped>
    .tech-card
        --color-hover: var(--color-text)

        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        gap: .5rem
        padding: 1rem
        border-radius: 1rem
        border: 1px solid var(--color-border)
        transition: all 100ms

        &:hover
            background: var(--color-hover)
            color: var(--color-background)
            border-color: var(--color-hover)
            box-shadow: var(--shadow-l)

        .iod-icon
            font-size: 2.5rem
            height: 4rem
            width: 4rem
</style>