<template>
    <Section id="datenschutz">
        <template #effects>
            <EffectGridLines />
        </template>
        
        <div class="limiter extra-padding">
            <div v-html="text"></div>
            <noscript>
                Sie können diesen Rechtstext nicht sehen, weil Sie JavaScript deaktiviert haben.
                Folgen Sie bitte diesem
                <a target="_blank" href="https://app.cockpit.legal/api/cockpit/resources/legaldocumentshare/9c101eb4e6342e37c2ae08c427fcf3f3/document/render/html?language=de">Link</a>,
                um den Rechtstext anzuzeigen.
            </noscript>
        </div>
    </Section>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Datenschutzerklärung',
        description: 'Datenschutzerklärung zu dieser Webseite.',
    })



    const text = ref('')

    fetch(`https://app.cockpit.legal/api/cockpit/resources/legaldocumentshare/9c101eb4e6342e37c2ae08c427fcf3f3/document/render/html?language=de`)
    .then((result) => { return result.text() })
    .then((content) => { text.value = content })
</script>

<style lang="sass" scoped>
    #datenschutz
        padding-block: 10rem 8rem

        .grid-lines
            mask-image: linear-gradient(to bottom, #00000000 0%, #000000 20rem)

    @media (max-width: 400px)
        #datenschutz
            padding-block: 4rem 2rem
</style>
