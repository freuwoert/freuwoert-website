export const useMenu = (menu: 'main'|'legal') => {
    const menus = ref({
        'main': [
            { id: '1000', label: "Startseite", href: "/" },
            { id: "2000", label: "Projekte", href: "/projects/helium", children: [
                { id: "2100", label: "Projekt Helium", href: "/projects/helium" },
                { id: "2200", label: "Projekt FDBS", href: "/projects/fdbs" },
                { id: "2300", label: "Projekt Billz", href: "/projects/billz" },
                { id: "2400", label: "Projekt KinderKlassik", href: "/projects/kinderklassik" },
                { id: "2500", label: "Projekt Spritt", href: "/projects/spritt" },
            ]},
            { id: "6000", label: "Kontakt", href: "/contact" },
        ],
        'legal': [
            { id: '1000', label: "Impressum", href: "/legal" },
            { id: "2000", label: "Datenschutz", href: "/privacy" },
        ],
    })

    return menus.value[menu]
}
