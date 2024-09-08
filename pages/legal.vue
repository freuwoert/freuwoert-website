<template>
    <Section>
        <template #effects>
            <EffectGridLines class="masked-start"/>
        </template>

        <HeLimiter class="extra-padding">
            <div class="py-24 lg:py-40">
                <h1>Impressum</h1>
                <p>
                    <b>Anbieterin: Alyx Freuwört</b>
                </p>
                <p>
                    Hinter den Gärten 1<br>
                    38729 Wallmoden
                </p>
                <p>
                    Telefonnummer: <NuxtLink to="tel:+4953125738323" target="_blank">+49 531 2573 8323</NuxtLink><br>
                    Email: <NuxtLink to="mailto:alyx@freuwoert.com" target="_blank">alyx@freuwoert.com</NuxtLink>
                </p>
            </div>
        </HeLimiter>
    </Section>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Impressum',
        description: 'Impressum und rechtliche Informationen zu dieser Webseite.',
    })
</script>