/**
 * Avis — Lucas Dépannage Pneu Rouen
 *
 * Le profil Google affiche 5,0/5 sur 22 avis, mais AUCUN verbatim n'a été
 * fourni : on ne recopie aucun témoignage et on n'expose PAS d'aggregateRating
 * dans le JSON-LD (interdit sans avis vérifiables sur la page). La note peut
 * être citée honnêtement en TEXTE dans les pages, jamais en donnée structurée.
 *
 * AUCUN avis réel à ce jour : on n'invente jamais de témoignage.
 * REVIEWS reste vide et REVIEWS_AGGREGATE neutre (rating null, count 0).
 * Les composants n'affichent aucune note tant que REVIEWS.length === 0,
 * et le JSON-LD n'expose ni aggregateRating ni review.
 * À la place, le site met en avant le bloc « garanties » (Guarantees.astro).
 */
export interface Review {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  dateRelative: string;
  text: string;
  hasPhotos?: boolean;
  ownerResponse?: string | null;
}

export const REVIEWS_AGGREGATE = {
  rating: null as number | null,
  count: 0,
} as const;

export const REVIEWS: Review[] = [];
