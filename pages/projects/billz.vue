<template>
    <Section id="hero">
        <img class="hero-block" src="/images/projects/billz/header.png">
    </Section>



    <Section id="info">
        <template #effects>
            <EffectGridLines />
        </template>

        <HeLimiter>
            <div class="flex flex-col gap-16 lg:gap-24 py-24 lg:py-40">
                <div class="feature-content-block">
                    <h1 class="super">Projekt Billz</h1>
                    <StaggeredText class="title" is="h1" text="schnell und einfach Rechnungen erstellen" stagger forward :delay="0"/>
    
                    <div class="content flex flex-col gap-6">
                        <StaggeredText class="m-0" is="p" text="Ziel dieses Projektes — eine schnelle und einfache Möglichkeit, rechtlich konforme Rechnungen zu erstellen und diese als PDF an den Kunden senden zu können." stagger forward :delay="300"/>
                        <div class="flex items-center gap-4">
                            <IodButton :is="NuxtLink" label="GitHub" icon-right="open_in_new" variant="contained" corner="pill" to="https://github.com/freuwort/billz" target="_blank"/>
                        </div>
                    </div>
                </div>
            </div>
        </HeLimiter>
    </Section>



    <Section id="tech" class="elevated-m">
        <HeLimiter>
            <div class="flex flex-col gap-8 lg:gap-12 py-12 lg:py-24">
                <div class="flex flex-col">
                    <h2 class="super m-0 mr-auto">Technologien</h2>
                    <StaggeredText class="m-0" is="h2" text="Was wird in diesem Projekt verwendet" stagger forward :delay="0"/>
                </div>
                
                <div class="grid-block min-150">
                    <TechCard type="laravel" />
                    <TechCard type="php" />
                    <TechCard type="sql" />
                    <TechCard type="tailwind" />
                    <TechCard type="sass" />
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
            <div class="flex flex-col gap-16 lg:gap-24 py-24 lg:py-40">
                <div class="flex flex-col">
                    <h2 class="super m-0 mr-auto">Einblicke</h2>
                    <StaggeredText class="m-0" is="h2" text="Was macht dieses Projekt aus" stagger forward :delay="0"/>
                </div>

                <div class="side-by-side-block">
                    <div class="start">
                        <img src="/images/projects/billz/feature_1.png" class="aspect-video rounded-xl">
                    </div>
                    <div class="end">
                        <StaggeredText class="mt-0" is="h3" stagger forward :delay="0" text="Übersicht und Auswertungen"/>
                        <StaggeredText class="m-0" is="p" stagger forward :delay="200" text="Die minimalistische Übersicht zeigt alle Rechnungen und deren Status. Mit einem Klick können Rechnungen bearbeitet, gelöscht, als PDF exportiert oder als Vorlage für eine neue Rechnung verwendet werden."/>
                    </div>
                </div>

                <div class="side-by-side-block reversed">
                    <div class="start">
                        <img src="/images/projects/billz/feature_2.png" class="aspect-video rounded-xl">
                    </div>
                    <div class="end">
                        <StaggeredText class="mt-0" is="h3" stagger forward :delay="0" text="Der Rechnungseditor"/>
                        <StaggeredText class="m-0" is="p" stagger forward :delay="200" text="Das Herzstück des Projektes ist der Rechnungseditor. Hier können alle notwendigen Informationen für eine Rechnung eingetragen werden. Der Editor beschränkt sich auf das Wesentliche und ist intuitiv bedienbar."/>
                    </div>
                </div>

                <div class="side-by-side-block">
                    <div class="start">
                        <img src="/images/projects/billz/feature_3.png" class="aspect-video rounded-xl">
                    </div>
                    <div class="end">
                        <StaggeredText class="mt-0" is="h3" stagger forward :delay="0" text="Die exportierte PDF"/>
                        <StaggeredText class="m-0" is="p" stagger forward :delay="200" text="Die exportierte PDF-Rechnung entspricht den gesetzlichen Anforderungen und kann direkt an den Kunden gesendet werden. Die Rechnung enthält alle notwendigen Informationen und ist optisch ansprechend gestaltet. Der Export läuft hierbei über einen eigenen server-side PDF-Renderer."/>
                    </div>
                </div>
            </div>
        </HeLimiter>
    </Section>
</template>

<script lang="ts" setup>
    const NuxtLink = defineNuxtLink({})

    useSeoMeta({
        title: 'Projekt Billz',
        description: 'Mit Leidenschaft und Liebe zum Detail entwickle ich Anwendungen und Webseiten, die begeistern. Mein Name ist Alyx Freuwört und ich bin ein Software Developer und UI Designer aus Braunschweig.',
    })
</script>
