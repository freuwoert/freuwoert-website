<template>
    <Section id="hero">
        <img class="hero-block" src="/images/projects/fdbs/header.png">
    </Section>



    <Section id="info">
        <template #effects>
            <EffectGridLines />
        </template>

        <HeLimiter class="extra-padding">
            <div class="flex flex-col gap-16 lg:gap-24 py-24 lg:py-40">
                <div class="feature-content-block">
                    <h1 class="super">Projekt FDBS</h1>
                    <StaggeredText class="title" is="h1" text="Rebranding für den Braunschweiger Großhandel" stagger forward :delay="0"/>
    
                    <div class="content flex flex-col gap-6">
                        <StaggeredText class="m-0" is="p" text="Ziel dieses Projektes — ein modernisiertes Branding samt Logo zusammen mit einer neuen Webseite einschließlich Medien-Manager, Blog, Kundenportal und Intranet." stagger forward :delay="300"/>
                        <div class="flex items-center gap-4">
                            <IodButton :is="NuxtLink" label="Webseite" icon-right="open_in_new" variant="contained" corner="pill" to="https://fdbs.de" target="_blank"/>
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
                    <TechCard type="sass" />
                    <TechCard type="github" />
                    <TechCard type="figma" />
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
                        <img src="/images/projects/fdbs/feature_1.png" class="aspect-video rounded-xl">
                    </div>
                    <div class="end">
                        <StaggeredText class="mt-0" is="h3" stagger forward :delay="0" text="Neue Farben, neues Logo, neuer Slogan"/>
                        <StaggeredText class="m-0" is="p" stagger forward :delay="200" text="Um die modernen Werte des FDBS widerzuspiegeln, wurden ein neues Logo, ein neuer Slogan und eine neue Farbpalette entwickelt. Das vorige Rot würde knalliger und der Name wurde gekürzt."/>
                    </div>
                </div>

                <div class="side-by-side-block reversed">
                    <div class="start">
                        <img src="/images/projects/fdbs/feature_2.png" class="aspect-video rounded-xl">
                    </div>
                    <div class="end">
                        <StaggeredText class="mt-0" is="h3" stagger forward :delay="0" text="Das Website-Redesign"/>
                        <StaggeredText class="m-0" is="p" stagger forward :delay="200" text="Zusammen mit dem Redesign wurde die Webseite komplett neu aufgesetzt. Die Struktur wurde überarbeitet, die Inhalte neu sortiert und die Technik auf den neuesten Stand gebracht."/>
                    </div>
                </div>

                <div class="side-by-side-block">
                    <div class="start">
                        <img src="/images/projects/fdbs/feature_3.png" class="aspect-video rounded-xl">
                    </div>
                    <div class="end">
                        <StaggeredText class="mt-0" is="h3" stagger forward :delay="0" text="Das Kundenportal und Intranet"/>
                        <StaggeredText class="m-0" is="p" stagger forward :delay="200" text="Für die Kunden und Mitarbeiter wurde ein Portal entwickelt, das es ermöglicht, Dokumente, die über 10.000 Produktspezifikationen und Informationen zu teilen. Hierbei wurden die alten Joomla-Seiten für die Hausmessen, die Hauptseite und das Intranet zu einem Custom Made System zusammengeführt."/>
                    </div>
                </div>
            </div>
        </HeLimiter>
    </Section>
</template>

<script lang="ts" setup>
    const NuxtLink = defineNuxtLink({})

    useSeoMeta({
        title: 'Projekt FDBS',
        description: 'Mit Leidenschaft und Liebe zum Detail entwickle ich Anwendungen und Webseiten, die begeistern. Mein Name ist Alyx Freuwört und ich bin ein Software Developer und UI Designer aus Braunschweig.',
    })
</script>