<template>
    <div ref="follower" class="follower" :class="{'follower': true, 'show': show}">
        <div class="background" :style="`transform: rotate(${angle}deg) scale(${1 + stretch}, ${1 - stretch});`"></div>
        <div class="text">{{ interactionElement?.text }}</div>
    </div>
</template>

<script setup lang="ts">
    const interpolationMultiplier = 0.15
    const velocityMultiplier = 3
    const maxVelocity = 150
    const maxStretch = 0.5

    const follower = ref<HTMLElement | null>(null)
    const followerPosition = ref({ x: 0, y: 0 })
    const lastFollowerPosition = ref({ x: 0, y: 0 })
    const deltaFollowerPosition = ref({ x: 0, y: 0 })
    const currentMousePosition = ref({ x: 0, y: 0 })
    const velocity = ref(0)
    const angle = ref(0)
    const stretch = ref(0)

    const hasMoved = ref(false)
    const cursorInside = ref(false)
    const show = computed(() => cursorInside.value && hasMoved.value)

    const interactionElement = ref(null) as Ref<null | { height: number, width: number, centerX: number, centerY: number, radius: string, color: string, text: string }>

    

    function onMouseEnter(event: MouseEvent)
    {
        currentMousePosition.value = { x: event.clientX, y: event.clientY }
        cursorInside.value = true
        hasMoved.value = true

        // Set initial position of follower
        followerPosition.value = { x: currentMousePosition.value.x, y: currentMousePosition.value.y }
    }

    function onMouseLeave()
    {
        cursorInside.value = false
    }
    
    function onMouseMove(event: MouseEvent)
    {
        currentMousePosition.value = { x: event.clientX, y: event.clientY }
        cursorInside.value = true
        hasMoved.value = true

        interactionElement.value = getDataElementsAtPosition(event.clientX, event.clientY)
    }

    function getDataElementsAtPosition(x: number, y: number)
    {
        const elementPath = document.elementsFromPoint(x, y)

        // Find the first element with a data-cf attribute
        const element = elementPath.find(element => element.hasAttribute('data-cf'))

        if (!element) return null

        const dimensions = element.getBoundingClientRect()

        return {
            height: dimensions.height,
            width: dimensions.width,
            centerX: dimensions.x + dimensions.width / 2,
            centerY: dimensions.y + dimensions.height / 2,
            radius: window.getComputedStyle(element).borderRadius,
            color: element.getAttribute('data-cf-color') ?? 'black',
            text: element.getAttribute('data-cf-text') ?? '',
        }
    }



    function updateFollower()
    {
        // Early exit if follower is not mounted
        if (!follower.value) return

        // Apply transform to follower
        
        if (interactionElement.value)
        {
            follower.value.classList.add('on-interactive')
            follower.value.style.color = interactionElement.value.color
        }
        else
        {
            follower.value.classList.remove('on-interactive')
            follower.value.style.color = ''
        }

        follower.value.style.transform = `translate(${followerPosition.value.x}px, ${followerPosition.value.y}px)`
    }
    
    function animate()
    {
        // Interpolate current position of follower
        followerPosition.value.x += (currentMousePosition.value.x - followerPosition.value.x) * interpolationMultiplier
        followerPosition.value.y += (currentMousePosition.value.y - followerPosition.value.y) * interpolationMultiplier

        // Calculate delta follower position
        deltaFollowerPosition.value = {
            x: followerPosition.value.x - lastFollowerPosition.value.x,
            y: followerPosition.value.y - lastFollowerPosition.value.y,
        }

        // Store last position of follower
        lastFollowerPosition.value = {
            x: followerPosition.value.x,
            y: followerPosition.value.y,
        }
        
        // Calculate velocity, angle and stretch of follower
        velocity.value = Math.min(Math.sqrt(deltaFollowerPosition.value.x ** 2 + deltaFollowerPosition.value.y ** 2) * velocityMultiplier, maxVelocity)
        angle.value = Math.atan2(deltaFollowerPosition.value.y, deltaFollowerPosition.value.x) * 180 / Math.PI
        stretch.value = velocity.value / maxVelocity * maxStretch
        
        // Update follower
        updateFollower()

        // Request next frame
        requestAnimationFrame(animate)
    }


    
    onMounted(() => {
        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseenter', onMouseEnter)
        document.addEventListener('mouseleave', onMouseLeave)
        animate()
    })

    onUnmounted(() => {
        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseenter', onMouseEnter)
        document.removeEventListener('mouseleave', onMouseLeave)
    })
</script>

<style lang="sass" scoped>
    .follower
        --size: 10px

        position: fixed
        top: calc(var(--size) / -2)
        left: calc(var(--size) / -2)
        width: var(--size)
        height: var(--size)
        pointer-events: none
        user-select: none
        z-index: 9999
        transform-origin: center
        will-change: transform
        color: var(--color-text)
        transition: opacity .1s ease-out, height 200ms, width 200ms, top 200ms, left 200ms, border-radius 200ms, color 200ms
        opacity: 0

        &.show
            opacity: 1

        &.on-interactive
            --size: 6rem
            filter: drop-shadow(0 .5rem 1.5rem #00000030)

            .text
                transform: scale(1)

            .background
                background-color: var(--color-background)

        .text
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
            display: flex
            align-items: center
            justify-content: center
            text-align: center
            font-weight: 600
            font-size: .8rem
            padding: 1rem
            font-family: var(--font-heading)
            overflow: hidden
            transform: scale(0)
            transition: transform 200ms

        .background
            content: ''
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
            border-radius: 50%
            background-color: currentColor
            transform-origin: center
            will-change: transform
            transition: background 200ms
</style>