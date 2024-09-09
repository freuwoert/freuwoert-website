<template>
    <Section id="hero">
        <img class="hero-block" src="/images/projects/spritt/header.png">
    </Section>



    <Section id="info">
        <template #effects>
            <EffectGridLines />
        </template>

        <HeLimiter class="extra-padding">
            <div class="flex flex-col gap-16 lg:gap-24 py-24 lg:py-40">
                <div class="feature-content-block">
                    <h1 class="super">Projekt Spritt</h1>
                    <StaggeredText class="title" is="h1" text="Schlanker, mobiler Spritkostenrechner" stagger forward :delay="0"/>
    
                    <div class="content flex flex-col gap-6">
                        <StaggeredText class="m-0" is="p" text="Ziel dieses Projektes — eine handliche, schlanke und intuitive Mobile-Web-App, welche das Errechnen der Spritkosten für den nächsten Urlaub erleichtert." stagger forward :delay="300"/>
                        <div class="flex items-center gap-4">
                            <IodButton :is="NuxtLink" label="GitHub" icon-right="open_in_new" variant="contained" corner="pill" to="https://github.com/freuwoert/spritt" target="_blank"/>
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
                    <TechCard type="php" />
                    <TechCard type="sql" />
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

        <HeLimiter class="extra-padding">
            <div class="flex flex-col gap-16 lg:gap-24 py-24 lg:py-40">
                <div class="flex flex-col">
                    <h2 class="super m-0 mr-auto">Einblicke</h2>
                    <StaggeredText class="m-0" is="h2" text="Was macht dieses Projekt aus" stagger forward :delay="0"/>
                </div>

                <div class="side-by-side-block">
                    <div class="start">
                        <img src="/images/projects/spritt/feature_1.png" class="aspect-video rounded-xl">
                    </div>
                    <div class="end">
                        <StaggeredText class="mt-0" is="h3" stagger forward :delay="0" text="Mitfahrer hinzufügen"/>
                        <StaggeredText class="m-0" is="p" stagger forward :delay="200" text="Zu Beginn eines Ausflugs können Mitfahrer hinzugefügt werden, welche später die Spritkosten teilen."/>
                    </div>
                </div>

                <div class="side-by-side-block reversed">
                    <div class="start">
                        <img src="/images/projects/spritt/feature_2.png" class="aspect-video rounded-xl">
                    </div>
                    <div class="end">
                        <StaggeredText class="mt-0" is="h3" stagger forward :delay="0" text="Autos und Spritverbrauch einspeichern"/>
                        <StaggeredText class="m-0" is="p" stagger forward :delay="200" text="Ebenfalls können Autos und deren Spritverbrauch gespeichert werden, um Ausflüge mit mehreren Autos abbilden zu können."/>
                    </div>
                </div>

                <div class="side-by-side-block">
                    <div class="start">
                        <img src="/images/projects/spritt/feature_3.png" class="aspect-video rounded-xl">
                    </div>
                    <div class="end">
                        <StaggeredText class="mt-0" is="h3" stagger forward :delay="0" text="Fahrten anlegen und Kosten berechnen"/>
                        <StaggeredText class="m-0" is="p" stagger forward :delay="200" text="Zuletzt können Fahrten erstellt werden, bei denen das Auto, die Mitfahrer und die Strecke ausgewählt werden. Die App berechnet anschließend die Spritkosten pro Person und Auto."/>
                    </div>
                </div>
            </div>
        </HeLimiter>
    </Section>
</template>

<script lang="ts" setup>
    const NuxtLink = defineNuxtLink({})

    useSeoMeta({
        title: 'Projekt Spritt',
        description: 'Mit Leidenschaft und Liebe zum Detail entwickle ich Anwendungen und Webseiten, die begeistern. Mein Name ist Alyx Freuwört und ich bin ein Software Developer und UI Designer aus Braunschweig.',
    })
</script>
