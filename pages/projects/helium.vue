<template>
    <Section id="hero">
        <img src="https://placeholder.co/2000x500">
    </Section>



    <Section id="info">
        <template #effects>
            <EffectGridLines />
        </template>

        <HeLimiter>
            <div class="flex flex-col gap-24 py-40">
                <div class="feature-content-block">
                    <h2 class="super">Projekt Helium</h2>
                    <StaggeredText class="title" is="h2" text="Intuitives cloud-based Content Management" stagger forward :delay="0"/>
    
                    <div class="content flex flex-col gap-6">
                        <StaggeredText class="m-0" is="p" text="Ziel dieses Projektes — eine intuitive und modulares open-source Software, welche es Nutzern ermöglicht Medien, Events, digitale Formulare und Blog-Inhalte granuliert via Permission Management in der Cloud zu verwalten." stagger forward :delay="300"/>
                        <div class="flex items-center gap-4">
                            <IodButton :is="NuxtLink" label="GitHub" icon-right="open_in_new" variant="contained" corner="pill" to="https://github.com/freuwort/helium-backend" target="_blank"/>
                        </div>
                    </div>
                </div>
            </div>
        </HeLimiter>
    </Section>



    <Section id="tech">
        <HeLimiter>
            <div class="flex flex-col gap-8 py-24">
                <h2 class="super my-0 mr-auto">Technologien</h2>
                
                <div class="grid-block">
                    <TechCard type="laravel" />
                    <TechCard type="php" />
                    <TechCard type="sql" />
                    <TechCard type="vuejs" />
                    <TechCard type="sass" />
                    <TechCard type="docker" />
                    <TechCard type="github" />
                </div>
            </div>
        </HeLimiter>
    </Section>



    <Section id="features">
        <template #effects>
            <EffectGridLines />
        </template>

        <HeLimiter>
            <div class="flex flex-col gap-24 py-40">
                <h2 class="super mr-auto">Einblicke</h2>

                <div class="side-by-side-block">
                    <div class="start">
                        <img src="https://placeholder.co/1000x1000" class="aspect-video rounded-xl">
                    </div>
                    <div class="end">
                        <StaggeredText class="mt-0" is="h2" text="Intuitives cloud-based Content Management" stagger forward :delay="0"/>
                        <StaggeredText class="m-0" is="p" text="Ziel dieses Projektes — eine intuitive und modulares open-source Software, welche es Nutzern ermöglicht, Medien, Events, digitale Formulare und Blog-Inhalte granuliert via Permission Management in der Cloud zu verwalten." stagger forward :delay="300"/>
                    </div>
                </div>

                <div class="side-by-side-block reversed">
                    <div class="start">
                        <img src="https://placeholder.co/1000x1000" class="aspect-video rounded-xl">
                    </div>
                    <div class="end">
                        <StaggeredText class="mt-0" is="h2" text="Intuitives cloud-based Content Management" stagger forward :delay="0"/>
                        <StaggeredText class="m-0" is="p" text="Ziel dieses Projektes — eine intuitive und modulares open-source Software, welche es Nutzern ermöglicht, Medien, Events, digitale Formulare und Blog-Inhalte granuliert via Permission Management in der Cloud zu verwalten." stagger forward :delay="300"/>
                    </div>
                </div>

                <div class="side-by-side-block">
                    <div class="start">
                        <img src="https://placeholder.co/1000x1000" class="aspect-video rounded-xl">
                    </div>
                    <div class="end">
                        <StaggeredText class="mt-0" is="h2" text="Intuitives cloud-based Content Management" stagger forward :delay="0"/>
                        <StaggeredText class="m-0" is="p" text="Ziel dieses Projektes — eine intuitive und modulares open-source Software, welche es Nutzern ermöglicht, Medien, Events, digitale Formulare und Blog-Inhalte granuliert via Permission Management in der Cloud zu verwalten." stagger forward :delay="300"/>
                    </div>
                </div>
            </div>
        </HeLimiter>
    </Section>
</template>

<script lang="ts" setup>
    const NuxtLink = defineNuxtLink({})

    useSeoMeta({
        title: 'Projekt Helium',
        description: 'Mit Leidenschaft und Liebe zum Detail entwickle ich Anwendungen und Webseiten, die begeistern. Mein Name ist Alyx Freuwört und ich bin ein Software Developer und UI Designer aus Braunschweig.',
    })
</script>

<style lang="sass" scoped>
    .super
        font-weight: 400
        color: var(--color-primary)
        background: linear-gradient(90deg, var(--color-secondary), var(--color-tertiary))
        -webkit-background-clip: text
        -webkit-text-fill-color: transparent

    .feature-content-block
        display: grid
        grid-template-columns: 1fr 1fr
        grid-template-rows: auto auto
        grid-template-areas: "super super" "title content"
        gap: 0 3rem

        .super
            grid-area: super
            margin-block: 0 .25em
            margin-right: auto
            font-size: clamp(1.25rem, 4vw, 1.75rem)

        .title
            grid-area: title
            margin-block: 0 1em
            font-size: var(--size-heading-m)
            font-weight: 500

        .content
            grid-area: content
            margin-block: 0

    .side-by-side-block
        display: grid
        grid-template-columns: 1fr 1fr
        grid-template-rows: auto
        grid-template-areas: "start end"
        align-items: center
        gap: 0 3rem

        &.reversed
            grid-template-areas: "end start"

        .start
            grid-area: start

        .end
            grid-area: end

    .grid-block
        display: grid
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr))
        grid-auto-rows: 1fr
        gap: 1rem



    #hero
        img
            width: 100%
            aspect-ratio: 4
            min-height: 250px
            object-fit: cover
            border-bottom: 1px solid var(--color-border)

    #tech
        background: var(--color-background)
        box-shadow: 0 1rem 2rem #650db420



    @media (max-width: 700px)
        .feature-content-block
            grid-template-columns: 1fr
            grid-template-rows: auto auto auto
            grid-template-areas: "super" "title" "content"
            gap: 0

        .side-by-side-block
            grid-template-columns: 1fr
            grid-template-rows: auto auto
            grid-template-areas: "start" "end" !important
            gap: 2rem 0

        #ueber-mich
            padding-block: 6rem

                

    @media (max-width: 400px)
        #ueber-mich
            padding-block: 4rem
</style>
