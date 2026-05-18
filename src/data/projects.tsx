import type { ReactNode } from 'react';

export type ProjectMetric = {
    label: string;
    value: string;
};

export type Project = {
    slug: string;
    title: string;
    tag: string;
    href: string;
    image: string;
    imageAlt: string;
    width: number;
    height: number;
    summary: string;
    duration: string;
    role: string;
    stack: string[];
    metrics: ProjectMetric[];
    context: ReactNode;
    challenge: ReactNode;
    solution: ReactNode;
    results: ReactNode;
};

export const projects: Project[] = [
    {
        slug: 'simsar',
        title: 'Simsar.ma',
        tag: 'Immobilier',
        href: 'https://simsar.ma',
        image: '/assets/portfolio-simsar.webp',
        imageAlt: 'Simsar.ma - Plateforme immobilière',
        width: 1024,
        height: 595,
        summary:
            "Plateforme d'annonces immobilières pensée pour le marché marocain : recherche par ville, fiches détaillées et mise en relation directe.",
        duration: '6 semaines',
        role: 'Conception produit, design et développement complet',
        stack: ['Next.js', 'React', 'TypeScript', 'Base de données', 'Recherche par filtres', 'Mobile-first'],
        metrics: [
            { label: 'Temps de chargement', value: '< 2s' },
            { label: 'Trafic mobile', value: '70 %' },
            { label: 'Annonces référencées', value: '500+' }
        ],
        context: (
            <>
                <p>
                    Le marché immobilier marocain repose encore largement sur des intermédiaires (les simsars) et des
                    groupes WhatsApp. L&apos;objectif du projet était simple : offrir une vraie plateforme en ligne,
                    claire et rapide, qui rassemble les annonces sérieuses et permet aux acheteurs et locataires de
                    chercher sans friction.
                </p>
            </>
        ),
        challenge: (
            <>
                <p>Trois difficultés principales sur ce projet :</p>
                <ul>
                    <li>✓ Afficher beaucoup d&apos;annonces sans ralentir le site</li>
                    <li>✓ Permettre une recherche fine (ville, type, budget) accessible aussi sur mobile</li>
                    <li>✓ Donner un aspect rassurant et professionnel sur un marché souvent perçu comme opaque</li>
                </ul>
            </>
        ),
        solution: (
            <>
                <p>
                    J&apos;ai construit le site avec un rendu côté serveur pour que chaque fiche soit rapide à charger
                    et bien référencée sur Google. La recherche utilise des filtres simples (ville, type de bien,
                    fourchette de prix) qui restent utilisables au pouce sur mobile.
                </p>
                <p>
                    Les fiches d&apos;annonces sont normalisées : photos optimisées, informations clés mises en avant,
                    contact direct par WhatsApp en un clic.
                </p>
            </>
        ),
        results: (
            <>
                <p>
                    Le site charge en moins de 2 secondes même sur connexion 4G, ce qui est essentiel sur le marché
                    marocain où le mobile représente la majorité du trafic. La structure SEO permet d&apos;être trouvé
                    sur des recherches locales du type «&nbsp;appartement à louer Meknès&nbsp;» ou «&nbsp;villa
                    Marrakech&nbsp;».
                </p>
            </>
        )
    },
    {
        slug: 'myprestige',
        title: 'My Prestige',
        tag: 'Conciergerie',
        href: 'https://myprestige.vercel.app',
        image: '/assets/portfolio-myprestige.webp',
        imageAlt: 'My Prestige - Conciergerie de luxe',
        width: 1024,
        height: 590,
        summary:
            'Site vitrine premium pour une conciergerie de luxe : design élégant, prise de contact directe et présentation des services haut de gamme.',
        duration: '2 semaines',
        role: 'Design, copywriting et développement',
        stack: ['Next.js', 'Design premium', 'SEO local', 'Mobile-first', 'Contact direct'],
        metrics: [
            { label: 'Délai de livraison', value: '2 semaines' },
            { label: 'Score Lighthouse', value: '95+' },
            { label: 'Pages clés', value: 'Services + Contact' }
        ],
        context: (
            <>
                <p>
                    My Prestige propose des services de conciergerie haut de gamme : organisation d&apos;événements,
                    chauffeur privé, réservations exclusives. Le client avait besoin d&apos;une vitrine qui inspire
                    confiance dès la première seconde et permette aux prospects de prendre contact très simplement.
                </p>
            </>
        ),
        challenge: (
            <>
                <p>L&apos;enjeu n&apos;était pas technique mais de positionnement&nbsp;:</p>
                <ul>
                    <li>✓ Communiquer un univers premium sans tomber dans le cliché</li>
                    <li>✓ Garder un site rapide malgré des visuels riches</li>
                    <li>✓ Faciliter la prise de contact sans formulaire à rallonge</li>
                </ul>
            </>
        ),
        solution: (
            <>
                <p>
                    J&apos;ai construit un site mono-page très visuel, avec des sections claires&nbsp;: services,
                    univers de marque, témoignages, contact. Les images sont optimisées en WebP et chargées en différé.
                    Le contact se fait en un clic via WhatsApp ou un formulaire court, sans inscription.
                </p>
            </>
        ),
        results: (
            <>
                <p>
                    Le site charge en moins d&apos;une seconde sur fibre et reste fluide sur mobile. Le rendu premium
                    est obtenu sans alourdir la page&nbsp;: typographie soignée, palette restreinte, micro-animations
                    discrètes. Le client peut le faire évoluer lui-même via un fichier de contenu.
                </p>
            </>
        )
    },
    {
        slug: 'loumrhari-agency',
        title: 'Loumrhari Agency',
        tag: 'Portfolio',
        href: 'https://loumrharimehdi.com',
        image: '/assets/portfolio-loumrhari.webp',
        imageAlt: 'Loumrhari Agency - Site portfolio',
        width: 1024,
        height: 590,
        summary:
            'Mon propre site de présentation : portfolio, blog et conversion. Bac à sable pour pousser les bonnes pratiques performance, SEO et accessibilité.',
        duration: 'Itération continue',
        role: 'Tout : design, code, contenu',
        stack: ['Next.js 16', 'React 19', 'TypeScript', 'CSS modulaire', 'JSON-LD', 'PWA'],
        metrics: [
            { label: 'Pages générées', value: '10' },
            { label: 'JS embarqué', value: 'Minimal' },
            { label: 'Score Lighthouse cible', value: '95+' }
        ],
        context: (
            <>
                <p>
                    Mon site personnel sert plusieurs objectifs : présenter mes services, héberger un blog SEO, et
                    démontrer concrètement le niveau de qualité que je livre à mes clients. C&apos;est aussi
                    l&apos;endroit où je teste les dernières évolutions de Next.js avant de les recommander.
                </p>
            </>
        ),
        challenge: (
            <>
                <p>
                    Un site portfolio est trompeur en apparence&nbsp;: il doit être visuellement marquant tout en
                    restant irréprochable techniquement. Les enjeux :
                </p>
                <ul>
                    <li>✓ Garder une excellente performance malgré les animations</li>
                    <li>✓ Optimiser le SEO sur les requêtes «&nbsp;création site web Maroc&nbsp;»</li>
                    <li>✓ Servir une PWA installable, sans casser le mode dark/light</li>
                </ul>
            </>
        ),
        solution: (
            <>
                <p>
                    Architecture App Router avec Server Components par défaut, client isolé en petits composants pour la
                    navigation, le thème, le curseur et les effets de scroll. JSON-LD enrichi (ProfessionalService,
                    FAQPage, BreadcrumbList, Article) pour maximiser la visibilité sur Google. CSS découpé en couches
                    (tokens, base, navigation, sections, utilitaires).
                </p>
            </>
        ),
        results: (
            <>
                <p>
                    Le site est statiquement généré côté articles, l&apos;app reste légère, et la base de code est prête
                    à évoluer (tests Playwright, Lighthouse CI, ajout d&apos;articles). C&apos;est aussi la vitrine de
                    mes standards de qualité&nbsp;: ce que vous voyez ici est ce que je livre à mes clients.
                </p>
            </>
        )
    }
];

export function getProject(slug: string) {
    return projects.find((project) => project.slug === slug);
}
