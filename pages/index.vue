<template>
    <Section id="start">
        <template #effects>
            <EffectGridLines class="masked-start"/>
        </template>

        <HeLimiter>
            <div class="grid hero-grid">
                <h1 class="super">Hi, ich bin Alyx!</h1>
                <StaggeredText class="title" is="h1" text="Ich entwickle und gestalte Software" stagger forward :delay="400" />
                <IodButton class="animated-button" :is="NuxtLink" to="/#projekte" label="Ein Einblick in meine Arbeit" size="l" corner="pill" data-cf data-cf-text="Meine Projekte" />
                <div class="hero-canvas-wrapper">
                    <HeroCanvas class="hero-canvas" />
                </div>
            </div>
        </HeLimiter>
    </Section>


    <Section id="ueber-mich">
        <template #effects>
            <EffectGridLines />
        </template>

        <HeLimiter>
            <div class="grid super-title-text-grid">
                <h2 class="super">Über mich</h2>
                <StaggeredText class="title" is="h2" text="Aus Leidenschaft und Liebe zur Entwicklung" stagger forward :delay="300"/>
                <StaggeredText class="text" is="p" text="Ich bin Alyx Freuwört — Software Developer und UI Designer aus Braunschweig. Seit 2017 entwickle und gestalte ich mit Technologien wie Laravel, SQL, Vue, TypeScript und Sass full stack Applikationen und benutzerorientierte Webseiten." stagger forward :delay="300"/>
            </div>
        </HeLimiter>
    </Section>
    

    <Section id="projekte">
        <template #effects>
            <EffectGridLines />
        </template>
        
        <HeLimiter>
            <div class="grid super-title-text-grid">
                <h2 class="super">Meine Projekte</h2>
                <StaggeredText class="title" is="h2" text="Ein Einblick in meine Arbeit" stagger forward :delay="300"/>
                <StaggeredText class="text" is="p" text="Eine Auswahl meiner Projekte — Anwendungen, Webseiten und relevante, interessante und spannende Projekte, die ich in den letzten Jahren entwickelt habe." stagger forward :delay="300"/>
            </div>
            <div class="grid project-grid">
                <ProjectCard
                    title="Helium – Intuitives cloud based Content Management"
                    client="Helium"
                    color="#3737fa"
                    href="/projects/helium"
                    thumbnail="/images/helium_thumbnail.webp"
                    :tags="['Development', 'UI Design', 'Backend', 'WIP']"
                />
                <ProjectCard
                    title="Website und Branding für den Braunschweiger Großhandel FDBS"
                    client="FDBS"
                    color="#d80044"
                    href="/projects/fdbs"
                    thumbnail="/images/fdbs_thumbnail.webp"
                    :tags="['Development', 'Webdesign', 'Branding']"
                />
                <ProjectCard
                    title="Website für den Braunschweiger Musikverein KinderKlassik"
                    client="KinderKlassik.com"
                    color="#126871"
                    href="/projects/kinderklassik"
                    thumbnail="/images/kinderklassik_thumbnail.webp"
                    :tags="['Development', 'Webdesign']"
                />
                <ProjectCard
                    title="Gencestor – eine Webanwendung zur Verwaltung von Ahnentafeln und Stammbäumen"
                    client="DRV e.V."
                    color="#254392"
                    href="/projects/gencestor"
                    thumbnail="/images/gencestor_thumbnail.webp"
                    :tags="['Development', 'UI Design', 'Backend']"
                />
            </div>
        </HeLimiter>
    </Section>
</template>

<script lang="ts" setup>
    const NuxtLink = defineNuxtLink({})

    useSeoMeta({
        title: 'Software Developer & UI Designer',
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

    .super-title-text-grid
        display: grid
        grid-template-columns: 1fr 1fr
        grid-template-rows: auto 1fr
        grid-template-areas: "super text" "title text"
        gap: 0 4rem

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

        .text
            grid-area: text
            margin-block: 0



    #start
        height: 100svh
        display: flex
        align-items: center

        .hero-grid
            display: grid
            grid-template-columns: 1fr 1fr
            grid-template-rows: auto auto auto
            grid-template-areas: "super canvas" "title canvas" "button canvas"
            gap: 0 4rem

        .hero-canvas-wrapper
            grid-area: canvas
            width: 100%
            height: 100%
            display: flex
            align-items: center
            justify-content: center

            .hero-canvas
                width: 100%
                aspect-ratio: 1

        .super
            grid-area: super
            margin-block: 0 .5em
            margin-right: auto
            font-size: clamp(1.25rem, 4vw, 2rem)
            letter-spacing: 0em
            line-height: 1.5  

        .title
            grid-area: title
            margin-block: 0 1em
            color: var(--color-text)
            font-size: clamp(2rem, 6vw, 4.2rem)
            letter-spacing: -.02em
            line-height: 1.3
            font-weight: 600

        .animated-button
            grid-area: button
            height: 3.5rem
            margin-right: auto
            padding-inline: 3.5em !important
            box-shadow: 0 .5rem 4rem .5rem #650db450
            overflow: hidden
            text-transform: none
            letter-spacing: 0
            font-weight: 500
            --local-font-size: 1rem
            --local-color-background: linear-gradient(45deg, var(--color-secondary), var(--color-tertiary)) !important

            &::before
                content: ''
                top: 0
                left: 0
                right: 0
                bottom: 0
                position: absolute
                z-index: 1
                background-image: linear-gradient(to top, currentColor, transparent)
                clip-path: polygon(0 0, 100% 0, 100% 60%, 50% 100%, 0 60%)
                opacity: 0
                animation: slideDown 3s 1s infinite

            @keyframes slideDown
                0%
                    transform: translateY(-100%)
                    opacity: 0
                50%
                    opacity: .2
                100%
                    transform: translateY(100%)
                    opacity: 0

    #ueber-mich
        padding-block: 12rem
        background: var(--color-background)
        box-shadow: 0 1rem 4rem #650db430

        .grid-lines
            mask-image: linear-gradient(to bottom, #00000000 0%, #000000 10rem, #000000 calc(100% - 10rem), #00000000 100%)

    #projekte
        padding-block: 14rem

        .grid-lines
            mask-image: linear-gradient(to bottom, #00000000 0%, #000000 10rem)

        .limiter
            position: relative
            z-index: 1

        .super-title-text-grid
            margin-bottom: 10rem

        .project-grid
            display: grid
            grid-template-columns: 1fr 1fr
            grid-auto-rows: 6rem auto
            gap: 4rem

            .project-card
                grid-row: span 2

            .project-card:nth-child(2)
                grid-row: 2 / span 2
                grid-column: 2



    @media (max-width: 700px)
        .super-title-text-grid
            grid-template-columns: 1fr
            grid-template-rows: auto auto auto
            grid-template-areas: "super" "title" "text"
            gap: 0

        #start
            .limiter
                height: 100%

            .hero-grid
                height: 100%
                padding-block: 3rem
                gap: 0
                grid-template-columns: auto 1fr auto
                grid-template-rows: 1fr auto auto auto
                grid-template-areas: "left canvas right" "left super right" "left title right" "left button right"

            .super
                text-align: center
                margin-inline: auto

            .title
                text-align: center

            .animated-button
                margin-inline: 0
                padding-inline: 0 !important
                box-shadow: 0 .5rem 3rem 0rem #650db440

        #ueber-mich
            padding-block: 6rem

        #projekte
            padding-block: 6rem

            .super-title-text-grid
                margin-bottom: 6rem

            .project-grid
                grid-template-columns: 1fr
                grid-auto-rows: auto
                gap: 3rem

                .project-card:nth-child(2)
                    grid-row: auto
                    grid-column: auto

                

    @media (max-width: 400px)
        #start
            .hero-grid
                padding-block: 2rem

            .animated-button
                width: 100%

        #ueber-mich
            padding-block: 4rem

        #projekte
            padding-block: 4rem

            .super-title-text-grid
                margin-bottom: 4rem

            .project-grid
                gap: 3rem
</style>
