<template>
    <svg class="brand-item brand-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
        <path :fill="color" d="M30,10H60a0,0,0,0,1,0,0v0A10,10,0,0,1,50,20H20a0,0,0,0,1,0,0v0A10,10,0,0,1,30,10Z" />
        <path :fill="color" d="M20,30H50a0,0,0,0,1,0,0v0A10,10,0,0,1,40,40H20a0,0,0,0,1,0,0V30a0,0,0,0,1,0,0Z" />
        <path :fill="color" d="M20,50H30a0,0,0,0,1,0,0V60A10,10,0,0,1,20,70h0a0,0,0,0,1,0,0V50A0,0,0,0,1,20,50Z" />
    </svg>
</template>

<script>
    export default {
        props: {
            color: {
                type: String,
                default: '#fff'
            }
        },
    }
</script>

<style lang="sass" scoped>
    .brand-item
        display: block
        
        path
            transition: fill 100ms ease-in-out
</style>