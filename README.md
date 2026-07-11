# depannage-pneu-rouen.fr

Site vitrine SEO local **Lucas Dépannage Pneu Rouen** (ETS MARIE SARL) —
dépannage pneu et batterie à domicile 24h/24 sur Rouen et toute la
Seine-Maritime (76). Charte « Version C — Port de Seine industriel »
(ardoise/gris acier bleuté + accent vert signal).

## Stack

- Astro 5 statique + TypeScript (alias `~` = `src/`)
- Saira Condensed + Archivo via Fontsource (woff2 self-hosted)
- Cloudflare Pages (cible de déploiement)

## Commandes

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # build statique dans dist/
npm run preview
```

## Important : noindex

Le domaine `depannage-pneu-rouen.fr` n'est **pas encore acheté** : le site est
servi en `X-Robots-Tag: noindex, nofollow` via `public/_headers`, et le build
de préversion émet aussi `<meta name="robots" noindex>` (`PUBLIC_PREVIEW=true`).
Retirer ces deux garde-fous au moment de la mise en ligne sur le domaine définitif.

## Repères

- NAP unique dans `src/data/nap.ts` (ne jamais écrire téléphone en dur). Service
  100 % mobile : pas d'adresse d'atelier ouverte au public.
- Villes et EPCI dans `src/data/cities-83.ts` (nom de fichier historique) —
  15 communes de la Métropole Rouen Normandie.
- Aucun avis client sur le site : bloc garanties (`src/components/Guarantees.astro`).
  La note Google (5,0/5) peut être citée en texte, jamais en `AggregateRating`.
- Pas de remorquage ; pneus vendus par paire uniquement.
- `ETS MARIE SARL` n'apparaît QUE dans les mentions légales, jamais dans le footer.
