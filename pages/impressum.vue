<template>
    <Section id="impressum">
        <template #effects>
            <EffectGridLines />
        </template>

        <div class="limiter extra-padding">
            <div v-html="text"></div>
            <noscript>
                Sie können diesen Rechtstext nicht sehen, weil Sie JavaScript deaktiviert haben.
                Folgen Sie bitte diesem
                <a target="_blank" href="https://app.cockpit.legal/api/cockpit/resources/legaldocumentshare/a33432e82a795072ba5aa7a16eeee170/document/render/html?language=de">Link</a>,
                um den Rechtstext anzuzeigen.
            </noscript>
        </div>
    </Section>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Impressum',
        description: 'Impressum und rechtliche Informationen zu dieser Webseite.',
    })



    const text = ref('')

    fetch(`https://app.cockpit.legal/api/cockpit/resources/legaldocumentshare/a33432e82a795072ba5aa7a16eeee170/document/render/html?language=de`)
    .then((result) => { return result.text() })
    .then((content) => { text.value = content })
</script>

<style lang="sass" scoped>
    #impressum
        padding-block: 10rem 8rem

        .grid-lines
            mask-image: linear-gradient(to bottom, #00000000 0%, #000000 20rem)

    @media (max-width: 400px)
        #impressum
            padding-block: 4rem 2rem
</style>
