/**
 * FAQ centralisée — alimente l'accordéon <details> ET le schema FAQPage.
 *
 * Stratégie SEO Rouen :
 *   - FAQ_GENERALE reprend les questions People-Also-Ask telles que les gens
 *     les tapent (« qui appeler », « quel tarif », « mèche légale »,
 *     « prix réparation ») avec des réponses ancrées agglo rouennaise.
 *   - cityFaq() pioche dans un pool de générateurs de façon déterministe
 *     (hash du slug, arithmétique non signée) : chaque commune reçoit 4 à 6
 *     questions dans un ordre et une sélection qui lui sont propres,
 *     ce qui casse la similarité entre city pages.
 *   - serviceFaq() dérive ses réponses des champs du service (hookLine,
 *     bullets, prix) pour rester cohérent avec la page.
 *
 * Ancrage local : quais de Seine, rive gauche industrielle, coteaux,
 * ponts Flaubert/Guillaume, A13/A28/A150, densité et congestion de l'agglo.
 * Service 100 % mobile (persona Lucas) : aucune base fixe ouverte au public.
 */
import type { City } from '~/data/cities-83.ts';
import { EPCI_LABEL } from '~/data/cities-83.ts';
import type { Service } from '~/data/services.ts';
import { NAP } from '~/data/nap.ts';

export interface FaqItem {
  q: string;
  a: string;
}

/** « de Oissel » → « d'Oissel », « de Le Grand-Quevilly » → « du Grand-Quevilly ». */
function deVille(name: string): string {
  if (name.startsWith('Le ')) return `du ${name.slice(3)}`;
  if (name.startsWith('Les ')) return `des ${name.slice(4)}`;
  return /^[AEIOUYÉÈÊÎÔH]/i.test(name) ? `d'${name}` : `de ${name}`;
}

/** « à Le Grand-Quevilly » → « au Grand-Quevilly », « à Les X » → « aux X ». */
function aVille(name: string): string {
  if (name.startsWith('Le ')) return `au ${name.slice(3)}`;
  if (name.startsWith('Les ')) return `aux ${name.slice(4)}`;
  return `à ${name}`;
}

/**
 * FAQ générale — page « comment ça marche ».
 * Les quatre premières questions collent aux People-Also-Ask observées ;
 * les suivantes traitent les angles rouennais (congestion, coteaux,
 * humidité de la vallée de Seine, majorations, périmètre 76).
 */
export const FAQ_GENERALE: FaqItem[] = [
  {
    q: 'Qui appeler quand on a un pneu crevé à Rouen ?',
    a: `Composez le ${NAP.phoneDisplay} : Lucas décroche 24h/24 et l'atelier roule jusqu'à vous. Pas de garage où pousser la voiture, pas de dépanneuse à charger — le fourgon équipé se gare à côté de la vôtre, que vous soyez bloqué rue du Gros-Horloge, sur un parking de la rive gauche ou garé sur un parking à la sortie de l'A28. Diagnostic fait sur le trottoir, puis réparation ou remplacement de la gomme immédiatement : vous remontez au volant, jamais sur un plateau.`,
  },
  {
    q: 'Quel tarif pour un dépannage de pneu à domicile ?',
    a: `Trois curseurs fixent l'addition : où vous êtes dans l'agglo (le déplacement), quand vous appelez (la nuit, le dimanche et les jours fériés sont majorés) et ce qu'il y a à faire (une mèche coûte moins qu'une paire montée neuve). Lucas additionne le tout et vous donne un chiffre ferme au téléphone, fourniture comprise s'il faut un pneu — donc vous savez avant qu'il démarre. Rien de plus ne s'ajoute une fois sur place.`,
  },
  {
    q: 'Est-il légal de réparer un pneu avec une mèche ?',
    a: `Oui, à une condition : que le trou soit réparable. Concrètement, il doit percer la bande de roulement (jamais le flanc ni l'épaulement), rester de petit diamètre, et la carcasse doit ressortir saine de l'inspection intérieure après démontage. Si ces cases sont cochées, la réparation homologuée tient la route. Sinon, aucun bricolage : le pneu est condamné et remplacé — et comme un essieu se raisonne à deux, la monte se fait par paire pour un freinage droit.`,
  },
  {
    q: "Quel est le prix d'une réparation de pneu ?",
    a: `Toujours bien en dessous d'un pneu neuf. Ce que vous payez, c'est le démontage, la localisation exacte de la fuite, le contrôle de l'intérieur de la carcasse, la réparation aux normes puis le regonflage à la pression constructeur — le tout au pied de la voiture. Le chiffre précis dépend de votre secteur et de l'heure ; Lucas vous l'annonce avant de prendre la route. Et si l'inspection condamne le pneu, vous avez le devis du remplacement en main avant qu'un outil ne bouge.`,
  },
  {
    q: "Je suis coincé dans les bouchons sur les quais ou entre deux ponts : vous venez quand même ?",
    a: `C'est le quotidien de l'agglo, alors oui. Entre les quais bas saturés aux heures de pointe, les ponts Flaubert et Mathilde et les trois rocades A13, A28 et A150, une crevaison tombe rarement au calme. Mettez-vous à l'abri d'abord — bande d'arrêt, place libre, entrée de parking — feux allumés, puis lâchez votre repère le plus parlant (dernière sortie, nom de pont, enseigne). Le trafic est déjà compté dans le créneau que Lucas vous donne : l'heure annoncée est l'heure tenue.`,
  },
  {
    q: "L'humidité de la vallée de Seine abîme-t-elle vraiment les batteries ?",
    a: `Nettement. Une voiture qui dort dehors dans l'air humide de la vallée, qui n'enchaîne que de courts trajets d'agglo sans jamais recharger à fond, use sa batterie plus vite qu'ailleurs — et ça se paie un matin frais, démarreur muet. D'où le réflexe de Lucas : mesurer d'abord la tension et la charge de l'alternateur avant de vendre quoi que ce soit. Souvent, un nettoyage de cosses et une recharge suffisent ; sinon la batterie neuve se pose sur place, sans bouger le véhicule.`,
  },
  {
    q: 'Une intervention de nuit ou le dimanche coûte-t-elle plus cher ?',
    a: `Oui : entre 22 h et 7 h, le dimanche et les jours fériés, une majoration s'applique — c'est la contrepartie d'une ligne qui répond quand tous les garages sont clos. Mais elle n'a rien de caché : le montant complet, supplément inclus, vous est dit au téléphone avant le départ du fourgon. Si la voiture peut patienter sans risque, libre à vous de décaler au lendemain matin. ${NAP.hoursLabel}.`,
  },
  {
    q: "Jusqu'où vous déplacez-vous autour de Rouen ?",
    a: `Sur ${NAP.area}. Les deux rives du centre d'abord, puis toute la couronne : la rive gauche de Sotteville à Saint-Étienne-du-Rouvray, les coteaux et plateaux du nord vers Mont-Saint-Aignan et Bois-Guillaume, les vallées du Cailly et du Robec, jusqu'aux boucles de Seine d'Oissel et d'Elbeuf. Comme le service est entièrement mobile, seule la distance joue sur le délai — il vous est précisé dès l'appel au ${NAP.phoneDisplay}, selon l'heure et votre position.`,
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ par ville — sélection déterministe dans un pool de générateurs */
/* ------------------------------------------------------------------ */

type FaqGenerator = (city: City) => FaqItem;

/**
 * Hash FNV-ish du slug, forcé en arithmétique NON SIGNÉE (>>> 0).
 * ⚠️ Ne jamais laisser ce hash devenir négatif : un modulo sur un entier
 * signé négatif produit des index négatifs et casse le build.
 */
function hashSlug(slug: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < slug.length; i++) {
    h = ((h ^ slug.charCodeAt(i)) * 16777619) >>> 0;
  }
  return h >>> 0;
}

/** Pool de questions localisées. Chaque générateur n'utilise que des faits portés par la fiche ville. */
const CITY_FAQ_POOL: FaqGenerator[] = [
  // Délai d'arrivée
  (city) => ({
    q: `En combien de temps arrivez-vous ${aVille(city.name)} ?`,
    a: `L'atelier mobile sillonne l'agglo en continu : pour ${city.name} (${city.postalCode}), Lucas vous donne un créneau ferme dès l'appel au ${NAP.phoneDisplay}, calculé selon l'heure, le trafic et l'endroit exact où se trouve la voiture. La congestion aux heures de pointe et sur les axes de l'agglo peut rallonger le trajet — c'est intégré dans l'annonce, pas découvert en route.`,
  }),
  // Vente par paire
  (city) => ({
    q: `Pourquoi me proposez-vous deux pneus alors qu'un seul est crevé ${aVille(city.name)} ?`,
    a: `Parce qu'un essieu qui porte deux gommes d'usure différente ne freine pas droit, surtout sur les pavés du centre, les côtes des coteaux et les chaussées d'agglo détrempées par une averse. Les pneus sont donc montés par paire — 2, 4 ou 6 —, équilibrage compris, pour que la voiture reste saine au freinage. Et si votre pneu est réparable, Lucas le répare : vous n'achetez rien du tout.`,
  }),
  // Batterie
  (city) => ({
    q: `Ma voiture refuse de démarrer ${aVille(city.name)} : vous changez la batterie sur place ?`,
    a: `Oui, et sans précipitation : Lucas commence par mesurer la tension de la batterie et la charge délivrée par l'alternateur, parce qu'une batterie vide n'est pas forcément une batterie morte. Si elle est bien en fin de vie, il pose la référence 12V adaptée (standard, Start & Stop, AGM ou EFB) là où la voiture dort, et emporte l'ancienne pour recyclage. L'humidité de la vallée de Seine et les courts trajets d'agglo usent les batteries plus vite qu'ailleurs — aucun remorquage à prévoir : tout se règle sur place.`,
  }),
  // Nuit / dimanche
  (city) => ({
    q: `Vous intervenez aussi la nuit ou le dimanche ${aVille(city.name)} ?`,
    a: `Oui : ${NAP.hoursLabel.toLowerCase()}, ${city.name} compris. Une majoration s'applique entre 22 h et 7 h, les dimanches et les jours fériés, et elle est incluse dans le montant annoncé au téléphone avant que l'atelier mobile ne prenne la route. Vous savez donc exactement à quoi vous engager — ou vous choisissez d'attendre le matin si la voiture peut patienter.`,
  }),
  // Bord de route / axes
  (city) => {
    const axe = city.axes && city.axes.length > 0 ? `la ${city.axes[0]}` : "un grand axe de l'agglo";
    return {
      q: `Je suis arrêté sur ${axe}, près ${deVille(city.name)} : vous venez sur le bas-côté ?`,
      a: `Oui, dès lors que vous êtes en sécurité : voiture rangée le plus à droite possible, feux de détresse, gilet enfilé avant de sortir, occupants en retrait de la chaussée et hors de la circulation. Indiquez le sens de circulation et le dernier repère vu (sortie, pont, rond-point, enseigne) : Lucas arrive avec son balisage et traite la roue sur place, sans déplacer le véhicule.`,
    };
  },
  // Stationnement / repères locaux
  (city) => {
    const reperes =
      city.landmarks.length > 0 ? city.landmarks.slice(0, 3).join(', ') : 'le centre';
    return {
      q: `À quel endroit pouvez-vous intervenir ${aVille(city.name)} ?`,
      a: `Partout où la voiture peut stationner sans gêner : ${reperes}, une cour, un parking d'entreprise ou la place devant chez vous. Le fourgon embarque démonte-pneu, équilibreuse, batteries et un stock de pneus dans les dimensions courantes — c'est l'atelier qui se déplace dans ${city.name}, pas l'inverse.`,
    };
  },
  // Réparable ou pas
  (city) => ({
    q: `Comment savoir si mon pneu crevé ${aVille(city.name)} est réparable ?`,
    a: `Impossible de trancher sans démonter : Lucas retire l'objet fautif, examine l'intérieur de la carcasse et vérifie où se situe la perforation. Sur la bande de roulement, avec un petit diamètre et une carcasse saine, une réparation homologuée est posée sur place ${aVille(city.name)}. Sur le flanc ou l'épaulement, aucun rafistolage n'est acceptable : le pneu est remplacé, par paire sur l'essieu, dans la même intervention.`,
  }),
  // Secteur / EPCI
  (city) => ({
    q: `${city.name} fait-elle partie de votre zone d'intervention habituelle ?`,
    a: `Oui : ${city.name} appartient à la ${EPCI_LABEL[city.epci]}, que l'atelier mobile couvre au même titre que Rouen intra-muros. Le service est entièrement mobile, donc seul le temps de route change selon votre position ; le tarif de déplacement correspondant vous est détaillé au ${NAP.phoneDisplay} avant toute intervention, sans supplément découvert sur place.`,
  }),
  // Pas de remorquage
  (city) => ({
    q: `Si la panne est plus grave qu'un pneu, vous pouvez emmener ma voiture ${deVille(city.name)} au garage ?`,
    a: `Non — aucun véhicule n'est tracté ni chargé sur plateau, ce n'est pas le métier de Lucas. Sa spécialité, c'est de remettre la voiture en état de rouler là où elle se trouve : crevaison, pneus, roue de secours, batterie. Si le diagnostic ${aVille(city.name)} révèle un problème mécanique qui dépasse ce cadre, il vous le dit sans détour et vous laisse la main pour organiser la suite avec votre assurance ou votre garagiste.`,
  }),
];

/** Strides premiers avec la taille du pool (9) → permutations variées. */
const STRIDES = [1, 2, 4, 5, 7, 8] as const;

/**
 * FAQ localisée par ville — 4 à 6 questions tirées du pool, dans un ordre
 * propre à la commune. Déterministe : même slug ⇒ même FAQ à chaque build.
 */
export function cityFaq(city: City): FaqItem[] {
  const h = hashSlug(city.slug);
  const poolSize = CITY_FAQ_POOL.length;
  const count = 4 + (h % 3); // 4, 5 ou 6 questions
  const start = (h >>> 4) % poolSize;
  const stride = STRIDES[(h >>> 8) % STRIDES.length];

  const items: FaqItem[] = [];
  for (let i = 0; i < count; i++) {
    const index = (start + i * stride) % poolSize;
    items.push(CITY_FAQ_POOL[index](city));
  }
  return items;
}

/* ------------------------------------------------------------------ */
/*  FAQ par service — dérivée des champs du service                     */
/* ------------------------------------------------------------------ */

export function serviceFaq(service: Service): FaqItem[] {
  const items: FaqItem[] = [
    {
      q: `Concrètement, comment se déroule un « ${service.shortLabel} » sur place ?`,
      a: service.hookLine,
    },
    {
      q: `Qu'est-ce qui est inclus dans ${service.primaryKw} ?`,
      a: `Dans le détail : ${service.bullets.join(' ; ').toLowerCase()}. Rien ne part au garage : tout se fait au pied de la voiture, là où elle s'est arrêtée.`,
    },
    {
      q: `Quel budget prévoir pour ${service.primaryKw} dans l'agglo rouennaise ?`,
      a: `Le point de départ est ${service.priceFrom} € (${service.priceNote ?? 'intervention sur place'}). Ce qui bouge ensuite : votre secteur, l'heure de l'appel et, s'il faut une pièce, la fourniture. Lucas fait le total au ${NAP.phoneDisplay} avant de rouler — et c'est ce total, pas un autre, qui figure sur la facture.`,
    },
    {
      q: `Sur quel secteur assurez-vous ${service.primaryKw} ?`,
      a: `Partout sur ${NAP.area} : chez vous, au bureau, sur un parking de la rive gauche ou arrêté le long d'une rocade. ${NAP.hoursLabel} — et à la fin, la voiture s'en va par ses propres roues, jamais sur un plateau.`,
    },
  ];
  return items;
}
