import posthog from "posthog-js"

type CookieService = {
    name: string
    description: string
    type: 'analytics' | 'marketing' | 'preferences'
    privacy?: string
    legal?: string
    setConsent: (consent: 'yes' | 'no') => void
}

export function useCookieServices() {
    return ref<CookieService[]>([
        {
            name: "PostHog",
            description: "PostHog is a product analytics tool that helps you understand how users interact with your website.",
            type: "analytics",
            privacy: 'https://posthog.com/privacy',
            setConsent(consent) {
                posthog.set_config({ persistence: consent === 'yes' ? 'cookie' : 'memory', })
                localStorage.setItem('cc_posthog', consent)
            },
        },
    ])
}