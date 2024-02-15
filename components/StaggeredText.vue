<template>
    <component class="word-wrapper" :class="{'in-frame': inFrame}" :is="is" ref="textElement">
        <span class="word" v-for="(word, index) in words" :key="index" :style="{ transitionDelay: `${staggerDelay * index + delay}ms` }">{{ word }}&nbsp;</span>
    </component>
</template>

<script setup lang="ts">
    const props = defineProps({
        is: {
            type: String,
            default: 'span',
        },
        text: {
            type: String,
            default: '',
        },
        delay: {
            type: Number,
            default: 0,
        },
        staggerDelay: {
            type: Number,
            default: 40,
        },
        forward: {
            type: Boolean,
            default: false,
        },
    })

    const textElement = ref<HTMLElement | null>(null)
    const words = computed(() => props.text.split(' ').map((word) => word+''))


    // Intersection observer
    const inFrame = ref(false)
    const observer = ref<IntersectionObserver | null>(null)

    onMounted(() => {
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            if (props.forward && inFrame.value) return
            inFrame.value = entries[0].isIntersecting
        }

        const observerSettings = {
            threshold: 0.9,
        }

        observer.value = new IntersectionObserver(observerCallback, observerSettings)
        observer.value?.observe(textElement.value as HTMLElement)
    })

    onUnmounted(() => {
        observer.value?.disconnect()
    })
</script>

<style lang="sass" scoped>
    .word-wrapper
        perspective: 1000px

        .word
            display: inline-block
            transition: transform .4s ease-out, opacity .4s ease-out
            transform-origin: 50% 50% -.5em
            opacity: 0
            transform: rotateX(-45deg)

        &.in-frame .word
            transform: rotateX(0)
            opacity: 1
</style>