import type { ReactNode } from 'react';
import { site } from './site';

export type Article = {
    slug: string;
    tag: string;
    title: ReactNode;
    plainTitle: string;
    description: string;
    date: string;
    readTime: string;
    ctaTitle: string;
    ctaText: string;
    ctaLabel: string;
    body: ReactNode;
};

export const articles: Article[] = [
    {
        slug: 'pourquoi-site-web-2025',
        tag: 'Business',
        plainTitle: 'Pourquoi avoir un site web en 2025 est essentiel',
        description:
            'Découvrez pourquoi avoir un site web professionnel en 2025 est devenu indispensable pour votre entreprise.',
        date: '16 Décembre 2025',
        readTime: '5 min de lecture',
        title: (
            <>
                Pourquoi avoir un site web en 2025 est <span className="accent">essentiel</span>
            </>
        ),
        ctaTitle: 'Prêt à créer votre site web ?',
        ctaText: 'Design gratuit, livraison rapide, tarif transparent.',
        ctaLabel: 'Discuter de mon projet',
        body: (
            <>
                <p className="article-intro">
                    En 2025, la question n&apos;est plus de savoir si vous devez avoir un site web, mais plutôt pourquoi
                    vous n&apos;en avez pas encore. Dans un monde où le digital est devenu le premier point de contact
                    entre une entreprise et ses clients, votre présence en ligne est votre vitrine principale.
                </p>
                <h2>1. Votre crédibilité en dépend</h2>
                <p>
                    Imaginez rencontrer quelqu&apos;un qui vous recommande un prestataire. Votre premier réflexe ?
                    Chercher son site web. <strong>87% des consommateurs</strong>{' '}font des recherches en ligne avant de
                    prendre une décision d&apos;achat. Sans site web, vous perdez instantanément en crédibilité face à
                    vos concurrents qui, eux, sont visibles.
                </p>
                <p>
                    Un site professionnel montre que vous prenez votre activité au sérieux. Il rassure vos prospects et
                    leur donne confiance pour passer à l&apos;action.
                </p>
                <h2>2. Disponible 24h/24, 7j/7</h2>
                <p>
                    Contrairement à un magasin physique ou à vos horaires de bureau, votre site web ne dort jamais. Il
                    présente vos services, répond aux questions fréquentes et génère des leads même pendant que vous
                    dormez.
                </p>
                <p>
                    C&apos;est votre <strong>commercial infatigable</strong>{' '}qui travaille sans relâche pour vous.
                </p>
                <h2>3. Un investissement rentable</h2>
                <p>
                    Comparé aux moyens de communication traditionnels (flyers, publicités, salons), un site web offre un
                    retour sur investissement incomparable :
                </p>
                <ul>
                    <li>✓ Coût unique de création + maintenance minimale</li>
                    <li>✓ Portée illimitée (locale ou internationale)</li>
                    <li>✓ Mesurable : vous savez exactement combien de personnes vous visitent</li>
                    <li>✓ Évolutif : ajoutez des fonctionnalités selon vos besoins</li>
                </ul>
                <h2>4. Votre concurrent en a déjà un</h2>
                <p>
                    Si vous n&apos;êtes pas en ligne, vos concurrents le sont. Chaque jour sans site web, c&apos;est des
                    clients potentiels qui se tournent vers eux. En 2025, ne pas avoir de site web, c&apos;est comme ne
                    pas avoir de numéro de téléphone dans les années 90.
                </p>
                <h2>5. Le SEO : être trouvé sur Google</h2>
                <p>
                    Un site web optimisé vous permet d&apos;apparaître dans les résultats de recherche Google. Quand
                    quelqu&apos;un cherche &quot;développeur web Maroc&quot; ou &quot;création site Casablanca&quot;,
                    vous voulez être visible.
                </p>
                <p>
                    C&apos;est du trafic <strong>gratuit et qualifié</strong>{' '}:{' '}des personnes qui cherchent activement ce
                    que vous proposez.
                </p>
            </>
        )
    },
    {
        slug: 'application-web-vs-site',
        tag: 'Tech',
        plainTitle: 'Application web vs site vitrine : que choisir ?',
        description:
            'Application web ou site vitrine ? Découvrez les différences clés pour faire le bon choix selon vos besoins.',
        date: '14 Décembre 2025',
        readTime: '7 min de lecture',
        title: (
            <>
                Application web vs site vitrine : <span className="accent">que choisir ?</span>
            </>
        ),
        ctaTitle: "Besoin d'aide pour choisir ?",
        ctaText: 'Discutons de votre projet gratuitement. Je vous conseillerai la meilleure solution.',
        ctaLabel: 'Discuter gratuitement',
        body: (
            <>
                <p className="article-intro">
                    &quot;J&apos;ai besoin d&apos;un site web&quot; - c&apos;est souvent la première phrase que
                    j&apos;entends de mes clients. Mais derrière cette demande se cache une question essentielle :
                    avez-vous besoin d&apos;un simple site vitrine ou d&apos;une véritable application web ? La réponse
                    impacte directement le budget, les délais et les fonctionnalités de votre projet.
                </p>
                <h2>Qu&apos;est-ce qu&apos;un site vitrine ?</h2>
                <p>
                    Un <strong>site vitrine</strong>{' '}est comme une carte de visite digitale améliorée. Il présente votre
                    entreprise, vos services, vos réalisations et permet aux visiteurs de vous contacter. C&apos;est
                    principalement informatif et unidirectionnel.
                </p>
                <p>
                    <strong>Exemples :</strong>
                </p>
                <ul>
                    <li>✓ Portfolio de photographe</li>
                    <li>✓ Site d&apos;un restaurant avec menu et réservation</li>
                    <li>✓ Landing page d&apos;une entreprise de services</li>
                    <li>✓ Site d&apos;un coach ou consultant</li>
                </ul>
                <h2>Qu&apos;est-ce qu&apos;une application web ?</h2>
                <p>
                    Une <strong>application web</strong>{' '}va bien au-delà. Elle permet aux utilisateurs d&apos;interagir,
                    de créer du contenu, de gérer des données. C&apos;est un outil que vos utilisateurs utilisent
                    activement, pas juste qu&apos;ils consultent.
                </p>
                <p>
                    <strong>Exemples :</strong>
                </p>
                <ul>
                    <li>✓ Plateforme de réservation en ligne</li>
                    <li>✓ Dashboard de gestion client (CRM)</li>
                    <li>✓ Marketplace ou e-commerce avancé</li>
                    <li>✓ Outil SaaS (logiciel en ligne)</li>
                    <li>✓ Réseau social de niche</li>
                </ul>
                <h2>Tableau comparatif</h2>
                <div className="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Critère</th>
                                <th>Site Vitrine</th>
                                <th>Application Web</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Objectif</strong>
                                </td>
                                <td>Informer, présenter</td>
                                <td>Interagir, automatiser</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Base de données</strong>
                                </td>
                                <td>Optionnelle / Simple</td>
                                <td>Essentielle / Complexe</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Compte utilisateur</strong>
                                </td>
                                <td>Rarement</td>
                                <td>Souvent</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Budget</strong>
                                </td>
                                <td>1 500€ - 3 000€</td>
                                <td>5 000€ - 50 000€+</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Délai</strong>
                                </td>
                                <td>1 - 3 semaines</td>
                                <td>1 - 6 mois</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Maintenance</strong>
                                </td>
                                <td>Faible</td>
                                <td>Régulière</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h2>Comment choisir ?</h2>
                <p>Posez-vous ces questions simples :</p>
                <ol>
                    <li>
                        <strong>Mes visiteurs doivent-ils créer un compte ?</strong>{' '}→ Si oui, application web
                    </li>
                    <li>
                        <strong>Dois-je stocker et gérer des données utilisateurs ?</strong>{' '}→ Si oui, application web
                    </li>
                    <li>
                        <strong>Mon site doit-il automatiser des tâches ?</strong>{' '}→ Si oui, application web
                    </li>
                    <li>
                        <strong>Je veux juste présenter mon activité ?</strong>{' '}→ Site vitrine
                    </li>
                </ol>
                <h2>Mon conseil</h2>
                <p>
                    Si vous débutez ou si votre objectif principal est de <strong>générer des leads</strong>{' '}(contacts,
                    demandes de devis), commencez par un site vitrine bien conçu. C&apos;est plus rapide, moins cher, et
                    souvent suffisant dans un premier temps.
                </p>
                <p>Vous pourrez toujours évoluer vers une application web une fois que votre activité le justifie.</p>
            </>
        )
    },
    {
        slug: 'erreurs-creation-site',
        tag: 'Conseils',
        plainTitle: '5 erreurs à éviter lors de la création de votre site',
        description:
            'Découvrez les 5 erreurs les plus courantes à éviter lors de la création de votre site web.',
        date: '10 Décembre 2025',
        readTime: '4 min de lecture',
        title: (
            <>
                5 erreurs à éviter lors de la création de <span className="accent">votre site</span>
            </>
        ),
        ctaTitle: 'Évitez ces erreurs avec un pro',
        ctaText: 'Je crée des sites optimisés, rapides et qui convertissent.',
        ctaLabel: 'Discuter de mon projet',
        body: (
            <>
                <p className="article-intro">
                    Après avoir créé des dizaines de sites web pour mes clients, j&apos;ai identifié les erreurs qui
                    reviennent le plus souvent. Voici les 5 pièges à éviter absolument pour que votre site soit
                    réellement efficace.
                </p>
                <h2>❌ Erreur #1 : Négliger le mobile</h2>
                <p>
                    <strong>Plus de 60% du trafic web</strong>{' '}vient désormais des smartphones. Si votre site
                    n&apos;est pas parfaitement lisible sur mobile, vous perdez la majorité de vos visiteurs.
                </p>
                <p>
                    <strong>La solution :</strong>{' '}Adoptez une approche &quot;mobile-first&quot;. Testez
                    systématiquement votre site sur différents appareils avant la mise en ligne.
                </p>
                <h2>❌ Erreur #2 : Un site trop lent</h2>
                <p>
                    3 secondes. C&apos;est le temps maximum qu&apos;un utilisateur accepte d&apos;attendre avant de
                    quitter votre site. Au-delà, vous perdez <strong>40% de vos visiteurs</strong>.
                </p>
                <p>
                    <strong>La solution :</strong>{' '}Optimisez vos images, choisissez un hébergement performant, et évitez
                    de surcharger votre site avec des plugins inutiles.
                </p>
                <h2>❌ Erreur #3 : Pas de call-to-action clair</h2>
                <p>
                    Votre visiteur arrive sur votre site... et ensuite ? S&apos;il ne sait pas quoi faire, il partira.
                    Un site sans objectif clair est un site inefficace.
                </p>
                <p>
                    <strong>La solution :</strong>{' '}Définissez UN objectif principal (prise de contact, demande de devis,
                    achat) et guidez le visiteur vers cette action avec des boutons visibles et des appels à
                    l&apos;action convaincants.
                </p>
                <h2>❌ Erreur #4 : Contenu copié ou générique</h2>
                <p>
                    &quot;Nous sommes une entreprise dynamique et innovante...&quot; Si votre texte pourrait
                    s&apos;appliquer à n&apos;importe quelle entreprise, il n&apos;a aucun impact.
                </p>
                <p>
                    <strong>La solution :</strong>{' '}Parlez de VOS clients, de LEURS problèmes, et de comment VOUS les
                    résolvez. Soyez spécifique et authentique. Utilisez des témoignages réels.
                </p>
                <h2>❌ Erreur #5 : Ignorer le SEO</h2>
                <p>
                    Un beau site que personne ne trouve sur Google, c&apos;est comme un magasin magnifique au fond
                    d&apos;une ruelle sans panneau.
                </p>
                <p>
                    <strong>La solution :</strong>{' '}Intégrez dès le départ les bases du SEO : titres optimisés, meta
                    descriptions, contenu de qualité, et surtout un site techniquement propre.
                </p>
                <h2>✅ Le bonus : Ne pas avoir de site du tout</h2>
                <p>
                    La plus grande erreur reste de repousser indéfiniment la création de votre site. Chaque jour sans
                    présence en ligne, c&apos;est des opportunités manquées.
                </p>
                <p>
                    Un site imparfait vaut mieux que pas de site du tout. Et avec le bon accompagnement, votre site peut
                    être à la fois beau ET efficace dès le premier jour.
                </p>
            </>
        )
    }
];

export function getArticle(slug: string) {
    return articles.find((article) => article.slug === slug);
}

export function getShareUrls(article: Article) {
    const articleUrl = `${site.url}/articles/${article.slug}`;
    const encodedTitle = encodeURIComponent(article.plainTitle);
    const encodedUrl = encodeURIComponent(articleUrl);

    return {
        twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`
    };
}
