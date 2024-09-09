<template>
    <Section id="hero">
        <img class="hero-block" src="/images/projects/kinderklassik/header.png">
    </Section>



    <Section id="info">
        <template #effects>
            <EffectGridLines />
        </template>

        <HeLimiter class="extra-padding">
            <div class="flex flex-col gap-16 lg:gap-24 py-24 lg:py-40">
                <div class="feature-content-block">
                    <h1 class="super">Projekt KinderKlassik</h1>
                    <StaggeredText class="title" is="h1" text="Webseite für den Braunschweiger Musikverein" stagger forward :delay="0"/>
    
                    <div class="content flex flex-col gap-6">
                        <StaggeredText class="m-0" is="p" text="Ziel dieses Projektes — eine übersichtliche Web-Präsenz, welche eine einfache und flexible Einbindung von aktuellen Inhalten ermöglicht." stagger forward :delay="300"/>
                        <div class="flex items-center gap-4">
                            <IodButton :is="NuxtLink" label="Webseite" icon-right="open_in_new" variant="contained" corner="pill" to="https://kinderklassik.com" target="_blank"/>
                        </div>
                    </div>
                </div>
            </div>
        </HeLimiter>
    </Section>



    <Section id="tech" class="elevated-m">
        <HeLimiter class="extra-padding">
            <div class="flex flex-col gap-8 lg:gap-12 py-12 lg:py-24">
                <div class="flex flex-col">
                    <h2 class="super m-0 mr-auto">Technologien</h2>
                    <StaggeredText class="m-0" is="h2" text="Was wird in diesem Projekt verwendet" stagger forward :delay="0"/>
                </div>
                
                <div class="grid-block min-150">
                    <TechCard type="joomla" />
                    <TechCard type="php" />
                    <TechCard type="css" />
                    <TechCard type="figma" />
                </div>
            </div>
        </HeLimiter>
    </Section>



    <!-- <Section id="features">
        <template #effects>
            <EffectGridLines />
        </template>

        <HeLimiter class="extra-padding">
            <div class="flex flex-col gap-16 lg:gap-24 py-24 lg:py-40">
                <div class="flex flex-col">
                    <h2 class="super m-0 mr-auto">Einblicke</h2>
                    <StaggeredText class="m-0" is="h2" text="Was macht dieses Projekt aus" stagger forward :delay="0"/>
                </div>

                <div class="side-by-side-block">
                    <div class="start">
                        <img src="/images/projects/kinderklassik/feature_1.png" class="aspect-video rounded-xl">
                    </div>
                    <div class="end">
                        <StaggeredText class="mt-0" is="h3" stagger forward :delay="0" text="Lorem ipsum dolor sit amet"/>
                        <StaggeredText class="m-0" is="p" stagger forward :delay="200" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore ullam at vitae tempora similique nostrum sit a molestias ipsam fuga libero aperiam minus, nisi voluptas magni consectetur qui dicta rerum!"/>
                    </div>
                </div>

                <div class="side-by-side-block reversed">
                    <div class="start">
                        <img src="/images/projects/kinderklassik/feature_2.png" class="aspect-video rounded-xl">
                    </div>
                    <div class="end">
                        <StaggeredText class="mt-0" is="h3" stagger forward :delay="0" text="Lorem ipsum dolor sit amet"/>
                        <StaggeredText class="m-0" is="p" stagger forward :delay="200" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore ullam at vitae tempora similique nostrum sit a molestias ipsam fuga libero aperiam minus, nisi voluptas magni consectetur qui dicta rerum!"/>
                    </div>
                </div>

                <div class="side-by-side-block">
                    <div class="start">
                        <img src="/images/projects/kinderklassik/feature_3.png" class="aspect-video rounded-xl">
                    </div>
                    <div class="end">
                        <StaggeredText class="mt-0" is="h3" stagger forward :delay="0" text="Lorem ipsum dolor sit amet"/>
                        <StaggeredText class="m-0" is="p" stagger forward :delay="200" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore ullam at vitae tempora similique nostrum sit a molestias ipsam fuga libero aperiam minus, nisi voluptas magni consectetur qui dicta rerum!"/>
                    </div>
                </div>
            </div>
        </HeLimiter>
    </Section> -->
</template>

<script lang="ts" setup>
    const NuxtLink = defineNuxtLink({})

    useSeoMeta({
        title: 'Projekt KinderKlassik',
        description: 'Mit Leidenschaft und Liebe zum Detail entwickle ich Anwendungen und Webseiten, die begeistern. Mein Name ist Alyx Freuwört und ich bin ein Software Developer und UI Designer aus Braunschweig.',
    })
</script>
