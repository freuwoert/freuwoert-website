<template>
    <Section id="start">
        <template #effects>
            <EffectGridLines class="masked-start"/>
        </template>

        <HeLimiter class="extra-padding">
            <div class="start-wrapper">
                <h1 class="super">Hi, ich bin Alyx!</h1>
                <StaggeredText class="title" is="h1" text="Ich entwickle und gestalte Software" stagger forward :delay="400" />
                <IodButton class="animated-button" :is="NuxtLink" to="/#projects" label="Ein Einblick in meine Arbeit" size="l" corner="pill" data-cf data-cf-text="Meine Projekte" />
            </div>
        </HeLimiter>
    </Section>


    <Section id="about" class="elevated-l">
        <template #effects>
            <EffectGridLines class="masked"/>
        </template>
        
        <HeLimiter>
            <div class="flex flex-col gap-8 lg:gap-12 py-24 lg:py-40">
                <div class="feature-content-block">
                    <h2 class="super">Über mich</h2>
                    <StaggeredText class="title" is="h2" text="Aus Leidenschaft und Liebe zur Entwicklung" stagger forward :delay="300"/>
                    <div class="content flex flex-col gap-6">
                        <StaggeredText class="m-0" is="p" text="Ich bin Alyx Freuwört — Software Developer und UI Designer aus Braunschweig. Seit 2017 entwickle und gestalte ich mit Technologien wie Laravel, SQL, Vue, TypeScript und Sass full stack Applikationen und Software-Benutzeroberflächen." stagger forward :delay="300"/>
                        <div class="flex items-center gap-4">
                            <IodButton :is="NuxtLink" label="GitHub" icon-right="open_in_new" variant="contained" corner="pill" to="https://github.com/freuwoert" target="_blank"/>
                        </div>
                    </div>
                </div>
            </div>
        </HeLimiter>
    </Section>
    

    <Section id="projects">
        <template #effects>
            <EffectGridLines />
        </template>
        
        <HeLimiter class="extra-padding">
            <div class="flex flex-col gap-16 lg:gap-24 py-24 lg:py-40">
                <div class="feature-content-block">
                    <h2 class="super">Meine Projekte</h2>
                    <StaggeredText class="title" is="h2" text="Ein Einblick in meine Arbeit" stagger forward :delay="300"/>
                    <div class="content">
                        <StaggeredText class="m-0" is="p" text="Eine Auswahl meiner Projekte — relevante, interessante und spannende Anwendungen, Webseiten und Projekte, die ich in den letzten Jahren entwickelt habe." stagger forward :delay="300"/>
                    </div>
                </div>

                <div class="mansory-grid-block">
                    <ProjectCard
                        title="Helium – Intuitives cloud based Content Management"
                        client="Helium"
                        color="#3737fa"
                        href="/projects/helium"
                        thumbnail="/images/projects/helium/thumbnail.png"
                        :tags="['Development', 'UI Design', 'Backend', 'WIP']"
                    />
                    <ProjectCard
                        title="FDBS – Rebranding für den Braunschweiger Großhandel"
                        client="FDBS"
                        color="#d80044"
                        href="/projects/fdbs"
                        thumbnail="/images/projects/fdbs/thumbnail.png"
                        :tags="['Development', 'Webdesign', 'Branding']"
                    />
                    <ProjectCard
                        title="Billz – schnell und einfach Rechnungen erstellen"
                        client="Billz"
                        color="#191919"
                        href="/projects/billz"
                        thumbnail="/images/projects/billz/thumbnail.png"
                        :tags="['Development', 'Backend']"
                    />
                    <ProjectCard
                        title="KinderKlassik – Webseite für den Braunschweiger Musikverein"
                        client="KinderKlassik.com"
                        color="#126871"
                        href="/projects/kinderklassik"
                        thumbnail="/images/projects/kinderklassik/thumbnail.png"
                        :tags="['Development', 'Webdesign']"
                    />
                    <ProjectCard
                        title="Spritt – schlanker, mobiler Spritkostenrechner"
                        client="Spritt"
                        color="#16a085"
                        href="/projects/spritt"
                        thumbnail="/images/projects/spritt/thumbnail.png"
                        :tags="['Development', 'UI Design', 'Backend', 'Mobile']"
                    />
                </div>
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
    #start
        height: calc(100svh - 4rem)
        display: flex
        align-items: center

        .start-wrapper
            display: flex
            flex-direction: column
            align-items: center
            justify-content: center
            text-align: center
            max-width: 800px
            margin-inline: auto

        .super
            margin-block: 0 .5em
            font-size: clamp(1.25rem, 4vw, 2rem)
            letter-spacing: 0em
            line-height: 1.5

        .title
            margin-block: 0 1em
            color: var(--color-text)
            font-size: clamp(2rem, 6vw, 4.2rem)
            letter-spacing: -.02em
            line-height: 1.3
            font-weight: 600
            text-align: inherit

        .animated-button
            height: 3.5rem
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



    @media (max-width: 768px)
        #start
            height: 70svh



    @media (max-width: 480px)
        #start
            height: 60svh
</style>
