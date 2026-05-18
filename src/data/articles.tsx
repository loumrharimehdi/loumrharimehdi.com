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
        slug: 'prix-site-web-maroc-2026',
        tag: 'Tarifs',
        plainTitle: 'Combien coûte un site web au Maroc en 2026 ?',
        description:
            'Tarifs réels d’un site web au Maroc en 2026 : fourchettes par type de projet et ce qui fait vraiment varier le prix.',
        date: '5 Janvier 2026',
        readTime: '6 min de lecture',
        title: (
            <>
                Combien coûte un site web au <span className="accent">Maroc en 2026 ?</span>
            </>
        ),
        ctaTitle: 'Vous voulez un devis honnête ?',
        ctaText: 'Je vous donne une fourchette claire en moins de 24h, sans engagement.',
        ctaLabel: 'Demander un devis gratuit',
        body: (
            <>
                <p className="article-intro">
                    «&nbsp;Combien ça coûte un site web ?&nbsp;» — c&apos;est la première question que me posent presque
                    tous mes prospects. La réponse honnête, c&apos;est «&nbsp;ça dépend&nbsp;», mais ce n&apos;est pas
                    une réponse utile. Voici donc des vraies fourchettes pour 2026 au Maroc, par type de projet, et
                    surtout ce qui fait vraiment varier le prix.
                </p>

                <h2>Les grandes fourchettes en 2026</h2>
                <p>Voici ce que vous pouvez attendre pour un projet correctement réalisé :</p>
                <ul>
                    <li>
                        ✓ <strong>Site one-page (landing) :</strong> 3 000 – 8 000 MAD
                    </li>
                    <li>
                        ✓ <strong>Site vitrine 4-6 pages :</strong> 6 000 – 15 000 MAD
                    </li>
                    <li>
                        ✓ <strong>Site vitrine + blog SEO :</strong> 12 000 – 25 000 MAD
                    </li>
                    <li>
                        ✓ <strong>E-commerce simple :</strong> 15 000 – 35 000 MAD
                    </li>
                    <li>
                        ✓ <strong>Application web sur mesure :</strong> 40 000 – 200 000 MAD+
                    </li>
                </ul>
                <p>
                    Ces fourchettes correspondent à un prestataire freelance sérieux. Une agence facturera 30 à
                    80&nbsp;% de plus pour le même livrable. Une plateforme «&nbsp;à 500 DH&nbsp;» ne livre pas la même
                    chose : on y revient plus bas.
                </p>

                <h2>Ce qui fait vraiment varier le prix</h2>

                <h3>1. Le nombre de pages réelles</h3>
                <p>
                    Une page d&apos;accueil + 3 pages internes, ce n&apos;est pas la même charge que 12 pages. Le
                    contenu à intégrer prend du temps, et chaque page doit être pensée pour mobile, optimisée SEO et
                    testée.
                </p>

                <h3>2. Le design : modèle vs sur mesure</h3>
                <p>
                    Un design adapté d&apos;un template moderne coûte beaucoup moins cher qu&apos;un design entièrement
                    sur mesure. La différence visible&nbsp;? Un site sur mesure est immédiatement identifiable comme
                    professionnel.
                </p>

                <h3>3. Les fonctionnalités</h3>
                <ul>
                    <li>✓ Formulaire de contact simple : inclus</li>
                    <li>✓ Réservation en ligne : +3 000 à 8 000 MAD</li>
                    <li>✓ Paiement en ligne : +5 000 à 15 000 MAD</li>
                    <li>✓ Espace client connecté : +10 000 MAD et plus</li>
                    <li>✓ Multilingue (FR/AR/EN) : +20 à 40&nbsp;% du prix global</li>
                </ul>

                <h3>4. Le contenu</h3>
                <p>
                    Si vous fournissez les textes et les photos, le projet avance vite. Si je dois faire la rédaction et
                    trouver les visuels, comptez 1 500 à 5 000 MAD supplémentaires.
                </p>

                <h3>5. Le SEO et la performance</h3>
                <p>
                    Un site rapide, bien référencé sur Google, qui apparaît sur les requêtes locales comme «&nbsp;coach
                    sportif Casablanca&nbsp;» ou «&nbsp;restaurant Marrakech&nbsp;», ça se travaille. Ce n&apos;est pas
                    «&nbsp;en plus&nbsp;» pour moi, mais beaucoup de prestataires facturent ça à part.
                </p>

                <h2>Pourquoi un site à 500 DH, c&apos;est un piège</h2>
                <p>On en voit partout sur les groupes Facebook. Pour ce prix, vous obtenez :</p>
                <ul>
                    <li>✗ Un thème WordPress générique installé en 2 heures</li>
                    <li>✗ Aucune optimisation SEO réelle</li>
                    <li>✗ Aucun suivi après la livraison</li>
                    <li>✗ Souvent : pas d&apos;hébergement fiable, pas de sauvegardes</li>
                    <li>✗ Un site lent qui n&apos;apparaît jamais sur Google</li>
                </ul>
                <p>
                    Le problème n&apos;est pas le prix bas, c&apos;est ce que vous obtenez en échange. Un site invisible
                    sur Google ne génère aucun client : 500 DH ou 5 000 DH, le retour est de zéro.
                </p>

                <h2>Les coûts récurrents à prévoir</h2>
                <p>Au-delà de la création, comptez chaque année :</p>
                <ul>
                    <li>
                        ✓ <strong>Nom de domaine :</strong> 100 – 250 MAD/an
                    </li>
                    <li>
                        ✓ <strong>Hébergement :</strong> 0 – 1 500 MAD/an selon la solution
                    </li>
                    <li>
                        ✓ <strong>Maintenance optionnelle :</strong> 200 – 800 MAD/mois
                    </li>
                    <li>
                        ✓ <strong>Email professionnel :</strong> 0 – 60 MAD/mois
                    </li>
                </ul>
                <p>
                    Pour un site vitrine bien pensé, on peut tomber à moins de 500 MAD/an de frais récurrents en
                    utilisant des solutions modernes (Vercel, hébergement statique).
                </p>

                <h2>Comment obtenir un devis honnête</h2>
                <p>Avant de demander un devis, soyez prêt à répondre à&nbsp;:</p>
                <ol>
                    <li>Quelle est votre activité et qui sont vos clients&nbsp;?</li>
                    <li>L&apos;objectif principal du site&nbsp;: contact, vente, présentation&nbsp;?</li>
                    <li>Avez-vous déjà des textes, photos, identité visuelle&nbsp;?</li>
                    <li>Avez-vous un budget en tête&nbsp;? (même approximatif)</li>
                    <li>Quel est le délai&nbsp;?</li>
                </ol>
                <p>
                    Un bon prestataire vous donne une fourchette en 24-48h. S&apos;il refuse, c&apos;est mauvais signe.
                </p>
            </>
        )
    },
    {
        slug: 'referencement-local-google-maroc',
        tag: 'SEO',
        plainTitle: 'Référencement local : apparaître sur Google et Google Maps',
        description:
            'Le guide pratique pour qu’une entreprise marocaine apparaisse sur Google Maps et les recherches locales en 2026.',
        date: '20 Janvier 2026',
        readTime: '7 min de lecture',
        title: (
            <>
                Référencement local&nbsp;: apparaître sur <span className="accent">Google Maps</span>
            </>
        ),
        ctaTitle: 'Vous voulez un site qui ranke localement ?',
        ctaText: 'Je conçois des sites pensés SEO local dès la première ligne de code.',
        ctaLabel: 'Discuter de mon projet',
        body: (
            <>
                <p className="article-intro">
                    Quand un client cherche «&nbsp;coiffeur Meknès&nbsp;» ou «&nbsp;réparation iPhone Rabat&nbsp;»,
                    Google affiche d&apos;abord une carte avec trois entreprises locales. Apparaître dans ce
                    «&nbsp;Local Pack&nbsp;» peut littéralement doubler les appels d&apos;un commerce. Voici comment y
                    arriver, sans payer de pub.
                </p>

                <h2>Étape 1&nbsp;: Google Business Profile (l&apos;essentiel)</h2>
                <p>
                    C&apos;est le point de départ obligatoire. Sans fiche Google Business Profile, vous
                    n&apos;apparaîtrez jamais dans le Local Pack ni sur Google Maps.
                </p>
                <p>À faire&nbsp;:</p>
                <ul>
                    <li>
                        ✓ Créer la fiche sur{' '}
                        <a href="https://business.google.com" target="_blank" rel="noopener">
                            business.google.com
                        </a>
                    </li>
                    <li>✓ Renseigner nom exact, adresse, téléphone (NAP) sans abréviation</li>
                    <li>✓ Choisir la catégorie principale la plus précise possible</li>
                    <li>✓ Ajouter horaires, photos réelles, lien vers votre site</li>
                    <li>✓ Vérifier la fiche par carte postale ou téléphone</li>
                </ul>

                <h2>Étape 2&nbsp;: la cohérence NAP</h2>
                <p>
                    NAP = Nom, Adresse, Numéro de téléphone. Ces trois informations doivent être{' '}
                    <strong>strictement identiques</strong> partout&nbsp;: site web, Google Business, Facebook,
                    annuaires, Pages Jaunes Maroc, Avito...
                </p>
                <p>
                    Une virgule mal placée ou un numéro avec/sans indicatif peut suffire à brouiller Google. Faites un
                    tableau, vérifiez tout.
                </p>

                <h2>Étape 3&nbsp;: les avis clients</h2>
                <p>
                    Le nombre et la qualité des avis Google est <strong>le facteur n°1</strong> pour ranker localement.
                    Sans avis, vous n&apos;êtes nulle part. Avec 50+ avis 4,5/5, vous passez devant des concurrents
                    pourtant mieux situés.
                </p>
                <p>Comment en obtenir naturellement&nbsp;:</p>
                <ul>
                    <li>✓ Demander à chaque client satisfait, oralement, sur le moment</li>
                    <li>✓ Envoyer un lien direct vers l&apos;avis (court, prêt à cliquer)</li>
                    <li>✓ Répondre à TOUS les avis, positifs et négatifs</li>
                    <li>✓ Jamais d&apos;achat d&apos;avis&nbsp;: Google détecte et pénalise</li>
                </ul>

                <h2>Étape 4&nbsp;: optimiser votre site pour le local</h2>
                <p>Côté site web, plusieurs éléments font la différence&nbsp;:</p>

                <h3>Mentionner la ville dans les bonnes balises</h3>
                <p>
                    La ville cible doit apparaître dans&nbsp;: le titre de la page d&apos;accueil, la balise H1, la meta
                    description, et au moins une fois dans le texte visible. Exemple&nbsp;:
                </p>
                <ul>
                    <li>❌ «&nbsp;Coiffeur professionnel — vos cheveux entre de bonnes mains&nbsp;»</li>
                    <li>✓ «&nbsp;Coiffeur à Meknès — coupe homme et femme | Salon Loumrhari&nbsp;»</li>
                </ul>

                <h3>Schema.org LocalBusiness</h3>
                <p>
                    C&apos;est un petit bloc de données invisible qui dit à Google&nbsp;: «&nbsp;voici mon nom, mon
                    adresse, mes horaires, mon téléphone&nbsp;». Indispensable. Je l&apos;intègre sur tous les sites de
                    mes clients commerçants.
                </p>

                <h3>Une page par ville si vous opérez sur plusieurs zones</h3>
                <p>
                    Si vous travaillez à Meknès, Fès et Ifrane, créez une page dédiée par ville avec un contenu
                    spécifique (pas dupliqué). Google ne classera pas une page générique sur «&nbsp;coiffeur
                    Meknès&nbsp;» et «&nbsp;coiffeur Fès&nbsp;» en même temps.
                </p>

                <h2>Étape 5&nbsp;: les backlinks locaux</h2>
                <p>
                    Les liens depuis des sites marocains pertinents renforcent votre autorité locale. Sources
                    intéressantes&nbsp;:
                </p>
                <ul>
                    <li>✓ Annuaires marocains (Pages Jaunes, Hespress Annonces)</li>
                    <li>✓ Sites de presse locale</li>
                    <li>✓ Partenariats avec d&apos;autres commerces de votre ville</li>
                    <li>✓ Mentions par des blogueurs/influenceurs locaux</li>
                </ul>

                <h2>Les erreurs qui plombent un SEO local</h2>
                <ol>
                    <li>
                        <strong>Plusieurs fiches Google Business pour la même entreprise</strong> — supprimez les
                        doublons.
                    </li>
                    <li>
                        <strong>Adresse boîte postale au lieu d&apos;une adresse physique</strong> — Google refuse.
                    </li>
                    <li>
                        <strong>Site lent ou mal optimisé mobile</strong> — Google déclasse.
                    </li>
                    <li>
                        <strong>Pas de SSL (HTTPS)</strong> — automatique aujourd&apos;hui, mais à vérifier.
                    </li>
                    <li>
                        <strong>Photos volées sur Google Images</strong> — utilisez vos vraies photos.
                    </li>
                </ol>

                <h2>Combien de temps avant de voir des résultats&nbsp;?</h2>
                <p>
                    Pour le Local Pack, les premiers résultats arrivent en général en 2 à 3 mois après avoir fait
                    correctement les bases. Un commerce avec 20+ avis et un site bien optimisé peut atteindre le top 3
                    local en 6 mois. C&apos;est du trafic <strong>gratuit, qualifié et durable</strong>, contrairement à
                    la pub.
                </p>
            </>
        )
    },
    {
        slug: 'wix-wordpress-vs-sur-mesure',
        tag: 'Comparatif',
        plainTitle: 'Wix, WordPress ou site sur mesure : que choisir vraiment ?',
        description:
            'Comparatif honnête entre Wix, WordPress et un site développé sur mesure. Avantages, limites, coûts réels.',
        date: '3 Février 2026',
        readTime: '6 min de lecture',
        title: (
            <>
                Wix, WordPress ou <span className="accent">sur mesure&nbsp;?</span>
            </>
        ),
        ctaTitle: 'Vous hésitez encore ?',
        ctaText: 'Je vous aide à choisir la solution adaptée à votre activité, gratuitement.',
        ctaLabel: 'Demander conseil',
        body: (
            <>
                <p className="article-intro">
                    Trois familles de solutions dominent la création de sites&nbsp;: les plateformes glisser-déposer
                    (Wix, Squarespace, Shopify), les CMS open source (WordPress en tête), et le développement sur
                    mesure. Aucune n&apos;est «&nbsp;meilleure&nbsp;» dans l&apos;absolu. Voici un comparatif honnête
                    pour choisir selon votre situation.
                </p>

                <h2>Wix, Squarespace, Webflow (les plateformes)</h2>

                <h3>Avantages</h3>
                <ul>
                    <li>✓ Vous pouvez démarrer seul, sans aide</li>
                    <li>✓ Hébergement et sécurité inclus</li>
                    <li>✓ Templates prêts à l&apos;emploi</li>
                    <li>✓ Coût initial faible (à partir de 100 MAD/mois)</li>
                </ul>

                <h3>Limites</h3>
                <ul>
                    <li>✗ Vous ne possédez pas vraiment votre site (vous louez)</li>
                    <li>✗ Performance souvent moyenne (sites lourds)</li>
                    <li>✗ SEO limité, surtout en concurrence</li>
                    <li>✗ Personnalisation plafonnée</li>
                    <li>✗ Coût qui grimpe vite avec les modules</li>
                </ul>

                <h3>Pour qui&nbsp;?</h3>
                <p>
                    Wix et compagnie sont parfaits pour&nbsp;: un projet de test, un site personnel, une petite activité
                    sans concurrence locale, ou quelqu&apos;un qui veut maintenir lui-même son site sans aucune
                    intervention extérieure.
                </p>

                <h2>WordPress (le CMS roi)</h2>
                <p>
                    WordPress fait tourner plus de 40&nbsp;% des sites web du monde. C&apos;est un compromis entre
                    flexibilité et facilité.
                </p>

                <h3>Avantages</h3>
                <ul>
                    <li>✓ Très flexible grâce aux milliers de plugins</li>
                    <li>✓ Communauté énorme, beaucoup de ressources</li>
                    <li>✓ Convient à la plupart des projets&nbsp;: vitrine, blog, e-commerce (WooCommerce)</li>
                    <li>✓ Bon SEO si bien configuré (Yoast, Rank Math)</li>
                </ul>

                <h3>Limites</h3>
                <ul>
                    <li>✗ Performance souvent décevante sans optimisation poussée</li>
                    <li>✗ Maintenance régulière obligatoire (sécurité, mises à jour)</li>
                    <li>✗ Vulnérabilités fréquentes via plugins mal maintenus</li>
                    <li>✗ Beaucoup de prestataires «&nbsp;WordPress&nbsp;» livrent du travail médiocre</li>
                </ul>

                <h3>Pour qui&nbsp;?</h3>
                <p>
                    WordPress reste un bon choix pour&nbsp;: un blog actif, un site vitrine que vous voulez modifier
                    régulièrement vous-même, un e-commerce de taille moyenne. À condition de payer un développeur
                    sérieux pour l&apos;installation et la maintenance.
                </p>

                <h2>Le sur mesure (Next.js, React, etc.)</h2>
                <p>
                    Un site sur mesure est construit ligne par ligne pour votre activité. C&apos;est ce que je propose
                    par défaut.
                </p>

                <h3>Avantages</h3>
                <ul>
                    <li>✓ Performance maximale (les sites se chargent en moins d&apos;une seconde)</li>
                    <li>✓ SEO de premier niveau, structure pensée pour Google</li>
                    <li>✓ Aucun plugin tiers à maintenir, sécurité naturelle</li>
                    <li>✓ Design 100&nbsp;% à votre image</li>
                    <li>✓ Hébergement quasi gratuit sur des plateformes modernes (Vercel)</li>
                    <li>✓ Évolutif&nbsp;: on peut ajouter exactement ce qui manque, sans surcouche</li>
                </ul>

                <h3>Limites</h3>
                <ul>
                    <li>✗ Coût initial plus élevé qu&apos;un Wix</li>
                    <li>✗ Modifications de contenu plus techniques sans interface dédiée</li>
                    <li>✗ Dépend du sérieux du prestataire&nbsp;: un mauvais dev sur mesure = catastrophe</li>
                </ul>

                <h3>Pour qui&nbsp;?</h3>
                <p>
                    Le sur mesure est idéal pour&nbsp;: une activité commerciale sérieuse, un site qui doit ranker sur
                    des requêtes concurrentielles, un projet où l&apos;image de marque compte, ou n&apos;importe quel
                    site qui doit charger vite et bien convertir.
                </p>

                <h2>Tableau comparatif</h2>
                <div className="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Critère</th>
                                <th>Wix / Squarespace</th>
                                <th>WordPress</th>
                                <th>Sur mesure</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Coût initial</strong>
                                </td>
                                <td>Faible</td>
                                <td>Moyen</td>
                                <td>Élevé</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Coût annuel</strong>
                                </td>
                                <td>1 500 – 5 000 MAD</td>
                                <td>500 – 3 000 MAD</td>
                                <td>0 – 1 000 MAD</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Performance</strong>
                                </td>
                                <td>Moyenne</td>
                                <td>Variable</td>
                                <td>Excellente</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>SEO</strong>
                                </td>
                                <td>Limité</td>
                                <td>Bon si optimisé</td>
                                <td>Optimal</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Modifications quotidiennes</strong>
                                </td>
                                <td>Très facile</td>
                                <td>Facile</td>
                                <td>Selon mise en place</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Propriété du site</strong>
                                </td>
                                <td>Limitée</td>
                                <td>Totale</td>
                                <td>Totale</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>Mon conseil concret</h2>
                <p>En général&nbsp;:</p>
                <ul>
                    <li>
                        ✓ Vous testez un projet, budget mini, pas de concurrence locale → <strong>Wix</strong>
                    </li>
                    <li>
                        ✓ Vous voulez publier souvent du contenu et garder la main → <strong>WordPress</strong>
                    </li>
                    <li>
                        ✓ Votre site doit ramener des clients sérieusement, ranker sur Google et représenter votre
                        marque → <strong>Sur mesure</strong>
                    </li>
                </ul>
                <p>
                    Et surtout&nbsp;: peu importe la techno choisie, c&apos;est la qualité du prestataire qui fait la
                    différence. Un mauvais dev livre un mauvais site, qu&apos;il s&apos;appuie sur Wix, WordPress ou
                    React.
                </p>
            </>
        )
    },
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
                    Chercher son site web. <strong>87% des consommateurs</strong> font des recherches en ligne avant de
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
                    C&apos;est votre <strong>commercial infatigable</strong> qui travaille sans relâche pour vous.
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
                    C&apos;est du trafic <strong>gratuit et qualifié</strong> : des personnes qui cherchent activement
                    ce que vous proposez.
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
                    Un <strong>site vitrine</strong> est comme une carte de visite digitale améliorée. Il présente votre
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
                    Une <strong>application web</strong> va bien au-delà. Elle permet aux utilisateurs d&apos;interagir,
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
                        <strong>Mes visiteurs doivent-ils créer un compte ?</strong> → Si oui, application web
                    </li>
                    <li>
                        <strong>Dois-je stocker et gérer des données utilisateurs ?</strong> → Si oui, application web
                    </li>
                    <li>
                        <strong>Mon site doit-il automatiser des tâches ?</strong> → Si oui, application web
                    </li>
                    <li>
                        <strong>Je veux juste présenter mon activité ?</strong> → Site vitrine
                    </li>
                </ol>
                <h2>Mon conseil</h2>
                <p>
                    Si vous débutez ou si votre objectif principal est de <strong>générer des leads</strong> (contacts,
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
        description: 'Découvrez les 5 erreurs les plus courantes à éviter lors de la création de votre site web.',
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
                    <strong>Plus de 60% du trafic web</strong> vient désormais des smartphones. Si votre site n&apos;est
                    pas parfaitement lisible sur mobile, vous perdez la majorité de vos visiteurs.
                </p>
                <p>
                    <strong>La solution :</strong> Adoptez une approche &quot;mobile-first&quot;. Testez
                    systématiquement votre site sur différents appareils avant la mise en ligne.
                </p>
                <h2>❌ Erreur #2 : Un site trop lent</h2>
                <p>
                    3 secondes. C&apos;est le temps maximum qu&apos;un utilisateur accepte d&apos;attendre avant de
                    quitter votre site. Au-delà, vous perdez <strong>40% de vos visiteurs</strong>.
                </p>
                <p>
                    <strong>La solution :</strong> Optimisez vos images, choisissez un hébergement performant, et évitez
                    de surcharger votre site avec des plugins inutiles.
                </p>
                <h2>❌ Erreur #3 : Pas de call-to-action clair</h2>
                <p>
                    Votre visiteur arrive sur votre site... et ensuite ? S&apos;il ne sait pas quoi faire, il partira.
                    Un site sans objectif clair est un site inefficace.
                </p>
                <p>
                    <strong>La solution :</strong> Définissez UN objectif principal (prise de contact, demande de devis,
                    achat) et guidez le visiteur vers cette action avec des boutons visibles et des appels à
                    l&apos;action convaincants.
                </p>
                <h2>❌ Erreur #4 : Contenu copié ou générique</h2>
                <p>
                    &quot;Nous sommes une entreprise dynamique et innovante...&quot; Si votre texte pourrait
                    s&apos;appliquer à n&apos;importe quelle entreprise, il n&apos;a aucun impact.
                </p>
                <p>
                    <strong>La solution :</strong> Parlez de VOS clients, de LEURS problèmes, et de comment VOUS les
                    résolvez. Soyez spécifique et authentique. Utilisez des témoignages réels.
                </p>
                <h2>❌ Erreur #5 : Ignorer le SEO</h2>
                <p>
                    Un beau site que personne ne trouve sur Google, c&apos;est comme un magasin magnifique au fond
                    d&apos;une ruelle sans panneau.
                </p>
                <p>
                    <strong>La solution :</strong> Intégrez dès le départ les bases du SEO : titres optimisés, meta
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
