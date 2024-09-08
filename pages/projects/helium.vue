<template>
    <Section id="hero">
        <img class="hero-block" src="/images/projects/helium/header.png">
    </Section>



    <Section id="info">
        <template #effects>
            <EffectGridLines />
        </template>

        <HeLimiter class="extra-padding">
            <div class="flex flex-col gap-16 lg:gap-24 py-24 lg:py-40">
                <div class="feature-content-block">
                    <h1 class="super">Projekt Helium</h1>
                    <StaggeredText class="title" is="h1" text="Intuitives cloud-based Content Management" stagger forward :delay="0"/>
    
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



    <Section id="tech" class="elevated-m">
        <HeLimiter class="extra-padding">
            <div class="flex flex-col gap-8 lg:gap-12 py-12 lg:py-24">
                <div class="flex flex-col">
                    <h2 class="super m-0 mr-auto">Technologien</h2>
                    <StaggeredText class="m-0" is="h2" text="Was wird in diesem Projekt verwendet" stagger forward :delay="0"/>
                </div>
                
                <div class="grid-block min-150">
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

        <HeLimiter class="extra-padding">
            <div class="flex flex-col gap-16 lg:gap-24 py-24 lg:py-40">
                <div class="flex flex-col">
                    <h2 class="super m-0 mr-auto">Einblicke</h2>
                    <StaggeredText class="m-0" is="h2" text="Was macht dieses Projekt aus" stagger forward :delay="0"/>
                </div>

                <div class="side-by-side-block">
                    <div class="start">
                        <img src="/images/projects/helium/feature_1.png" class="aspect-video rounded-xl">
                    </div>
                    <div class="end">
                        <StaggeredText class="mt-0" is="h3" stagger forward :delay="0" text="Nutzer anlegen und verwalten"/>
                        <StaggeredText class="m-0" is="p" stagger forward :delay="200" text="Nutzer können sich selber oder via Admin-Unterstützung in das Benutzer-System eintragen. Einmal eingetragen können Administratoren diverse Einstellungen vornehmen, um Berechtigungen zuzuweisen, Daten zu ändern, oder Benachrichtigungen zu senden."/>
                    </div>
                </div>

                <div class="side-by-side-block reversed">
                    <div class="start">
                        <img src="/images/projects/helium/feature_2.png" class="aspect-video rounded-xl">
                    </div>
                    <div class="end">
                        <StaggeredText class="mt-0" is="h3" stagger forward :delay="0" text="Berechtigungen anpassen"/>
                        <StaggeredText class="m-0" is="p" stagger forward :delay="200" text="In Berechtigungsgruppen (Rollen) können Administratoren granuliert Zugriff auf die Funktionen von Helium vergeben und diese Nutzern zuweisen."/>
                    </div>
                </div>

                <div class="side-by-side-block">
                    <div class="start">
                        <img src="/images/projects/helium/feature_3.png" class="aspect-video rounded-xl">
                    </div>
                    <div class="end">
                        <StaggeredText class="mt-0" is="h3" stagger forward :delay="0" text="Medien hochladen"/>
                        <StaggeredText class="m-0" is="p" stagger forward :delay="200" text="Nutzer mit der benötigten Berechtigung können eigenständig Medien wie Videodateien, Audiodateien, Bilder und PDFs hochladen und diese wiederum anderen Nutzern oder Rollen freigeben. Im Hintergrund erstellt das System via Queue Vorschaubilder. Alle Medien werden zugunsten der Performance in der Datenbank gecached."/>
                    </div>
                </div>

                <div class="side-by-side-block reversed">
                    <div class="start">
                        <img src="/images/projects/helium/feature_4.png" class="aspect-video rounded-xl">
                    </div>
                    <div class="end">
                        <StaggeredText class="mt-0" is="h3" stagger forward :delay="0" text="Einfache Eingaben durch eigene Komponenten"/>
                        <StaggeredText class="m-0" is="p" stagger forward :delay="200" text="Um Eingaben so einfach und intuitiv wie möglich zu gestalten, besitzt Helium eine eigene Komponentenbibliothek mit präzise abgestimmten Eingabekomponenten."/>
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
