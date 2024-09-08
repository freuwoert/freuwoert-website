<template>
    <div class="grid-lines">
        <HeLimiter>
            <div class="line left-line"></div>
            <div class="line center-line"></div>
            <div class="line right-line"></div>
        </HeLimiter>
    </div>
</template>

<style lang="sass" scoped>
    .grid-lines
        position: absolute
        width: 100%
        height: 100%
        top: 0
        left: 0
        pointer-events: none

        &.masked-start
            mask-image: linear-gradient(to bottom, #00000000 0%, #000000 10rem, #000000 100%)

        &.masked-end
            mask-image: linear-gradient(to top, #000000 0%, #000000 calc(100% - 10rem), #00000000 100%)

        &.masked
            mask-image: linear-gradient(to bottom, #00000000 0%, #000000 10rem, #000000 calc(100% - 10rem), #00000000 100%)

    .he-limiter
        position: relative
        height: 100%

        .line
            position: absolute
            top: 0
            width: 0
            height: 100%
            border-left: 1px solid var(--color-border)

            &.left-line
                left: 1.5rem

            &.center-line
                left: 50%

            &.right-line
                right: 1.5rem



    @media (max-width: 768px)
        .he-limiter .line
            &.left-line
                left: 1rem

            &.center-line
                display: none

            &.right-line
                right: 1rem

    @media (max-width: 480px)
        .he-limiter .line
            display: none
</style>