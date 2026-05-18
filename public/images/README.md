# Images

Dossier centralisé pour toutes les images du site. Toutes les images placées ici sont accessibles directement à `/images/...` dans le navigateur.

## Structure

```
public/images/
├── portfolio/   → screenshots de projets clients (ex. /images/portfolio/simsar.webp)
├── articles/    → images de couverture des articles de blog
├── team/        → photos personnelles (Mehdi, équipe)
├── services/    → illustrations pour les sections services
└── misc/        → tout le reste (logos clients, icônes custom, etc.)
```

## Comment utiliser une image dans le code

```tsx
import Image from 'next/image';

<Image
    src="/images/portfolio/simsar.webp"
    alt="Simsar.ma - Plateforme immobilière"
    width={1024}
    height={595}
    sizes="(max-width: 768px) 100vw, 33vw"
/>;
```

## Bonnes pratiques

- **Format recommandé** : `.webp` (compression 30-50 % plus efficace que JPG/PNG)
- **Tailles raisonnables** : 1920px de large maximum pour les hero images, 1024px pour les cards
- **Compression** : passer chaque image dans https://squoosh.app avant de la committer
- **Nommage** : kebab-case, descriptif (`portrait-mehdi-2026.webp` plutôt que `IMG_1234.webp`)
- **Toujours indiquer width + height** dans `<Image>` pour éviter le CLS (Cumulative Layout Shift)
- **Ne PAS committer** les fichiers > 500 KB sans raison ; optimiser avant
