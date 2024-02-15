<template>
    <div class="grid-lines">
        <div class="limiter">
            <div class="line left-line"></div>
            <div class="line center-line"></div>
            <div class="line right-line"></div>
        </div>
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

    .limiter
        position: relative
        height: 100%

        .line
            position: absolute
            top: 0
            width: 0
            height: 100%
            border-left: 1px solid var(--color-border)

            &.left-line
                left: 1rem

            &.center-line
                left: 50%

            &.right-line
                right: 1rem



    @media (max-width: 700px)
        .limiter .line.center-line
            display: none

    @media (max-width: 400px)
        .limiter .line
            display: none
</style>