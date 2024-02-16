<template>
    <div class="canvas-wrapper" ref="wrapper">
        <canvas class="canvas" ref="canvas"></canvas>
    </div>
</template>

<script lang="ts" setup>
    import * as THREE from 'three'
    
    
    // HTML references
    const wrapper = ref<HTMLElement | null>(null)
    const canvas = ref<HTMLCanvasElement | null>(null)


    // Sizes
    const width = ref(0)
    const height = ref(0)
    const aspect = computed(() => width.value / height.value)


    // Renderer
    const renderer = ref<THREE.WebGLRenderer | null>(null)


    // Scene setup
    const scene = new THREE.Scene()
    

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    camera.position.set(5, 5, 5)
    camera.lookAt(0, 0, 0)
    scene.add(camera)
    
    
    // Light setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2)
    scene.add(directionalLight)
    

    // Object setup
    const subject = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5), new THREE.MeshStandardMaterial({ color: 0x650db4 }))
    scene.add(subject)
    

    
    function render()
    {
        renderer.value.render(scene, camera)
        
        subject.rotation.y += 0.01
        subject.rotation.x += 0.01

        requestAnimationFrame(render)
    }



    function onResize()
    {
        // Update sizes
        width.value = wrapper.value?.getBoundingClientRect().width || 0
        height.value = wrapper.value?.getBoundingClientRect().height || 0

        // Update camera
        camera.aspect = aspect.value
        camera.updateProjectionMatrix()

        // Update renderer
        renderer.value.setSize(width.value, height.value)
    }


    
    onMounted(() => {
        renderer.value = new THREE.WebGLRenderer({
            canvas: canvas.value as HTMLCanvasElement,
            antialias: true,
            alpha: true,
        })
        
        renderer.value.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        
        addEventListener('resize', onResize)
        onResize()
        render()
    })

    onUnmounted(() => {
        removeEventListener('resize', onResize)
        
        if (renderer.value) renderer.value.dispose()
    })
</script>

<style lang="sass" scoped>
    .canvas-wrapper
        position: relative
        display: flex

        .canvas
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
</style>