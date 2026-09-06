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
    a: `C'est le quotidien de l'agglo, alors oui. Entre les quais bas saturés aux heures de pointe, les ponts Flaubert et Mathilde et les trois rocades A13, A28 et A150, une crevaison tombe rarement au calme. Mettez-vous à l'abri d'abord — place libre, entrée de parking, jamais sur la bande d'arrêt d'urgence, réservée aux dépanneurs agréés (borne orange, 112) — feux allumés, puis lâchez votre repère le plus parlant (dernière sortie, nom de pont, enseigne). Le trafic est déjà compté dans le créneau que Lucas vous donne : l'heure annoncée est l'heure tenue.`,
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

/**
 * FAQ accueil — dédiée à la page d'accueil, distincte de FAQ_GENERALE
 * (page « comment ça marche ») pour éviter tout contenu dupliqué entre
 * les deux pages. Angles : délai réel par secteur, périmètre du métier,
 * nuit/week-end, pose par paire, limite autoroute.
 */
export const FAQ_ACCUEIL: FaqItem[] = [
  {
    q: 'Quel est le délai d\'attente réel à Rouen ?',
    a: `Il n'y a pas un chiffre unique : l'hyper-centre et les hauteurs de Bonsecours ou de Canteleu ne se traversent pas à la même vitesse. Comptez une petite demi-heure intra-muros, un peu plus vers les boucles d'Oissel ou d'Elbeuf selon le trafic des ponts. Lucas vous donne un créneau ferme dès l'appel au ${NAP.phoneDisplay}, pas une moyenne théorique.`,
  },
  {
    q: 'Que fait Lucas, et que ne fait-il pas ?',
    a: `Son métier : remettre la voiture en état de rouler là où elle est immobilisée — pneu réparé ou remplacé, batterie changée, roue de secours posée. Il ne charge aucun véhicule sur plateau et ne le dépose dans aucun garage. Si le diagnostic révèle un problème mécanique qui dépasse ce cadre, il vous le dit sans détour.`,
  },
  {
    q: 'Intervenez-vous vraiment la nuit et le week-end à Rouen ?',
    a: `Oui, sans exception : la ligne répond 24h/24, dimanches et jours fériés compris. Une majoration s'applique entre 22h et 7h ainsi que le dimanche, mais elle est annoncée au téléphone avant que le fourgon ne prenne la route, jamais découverte sur la facture.`,
  },
  {
    q: 'Pourquoi remplacez-vous toujours les pneus par paire ?',
    a: `Parce que deux pneus d'usure différente sur un même essieu déséquilibrent le freinage, un vrai risque dans les descentes des coteaux rouennais sous la pluie. Le remplacement se fait donc par paire — jamais à l'unité — et si votre pneu est réparable, Lucas le répare : vous n'achetez rien du tout.`,
  },
  {
    q: "Intervenez-vous sur l'autoroute ou la rocade ?",
    a: `Sur la chaussée elle-même, non : une fois arrêté sur une voie rapide ou la bande d'arrêt d'urgence, seuls les dépanneurs agréés, joignables via la borne orange ou le 112, sont habilités à intervenir. Rangez-vous dès que possible sur une aire, une sortie ou un parking : c'est là, hors de la circulation, que Lucas prend le relais.`,
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
    q: `${city.name} est à combien de temps quand j'appelle ?`,
    a: `Il n'existe pas de chiffre unique pour tout le secteur : selon que vous êtes en fond de vallée, sur un plateau ou près du centre de Rouen, le trajet du fourgon n'est pas le même. Au ${NAP.phoneDisplay}, Lucas situe votre position exacte à ${city.name} (${city.postalCode}) et annonce un horaire d'arrivée réaliste, en tenant compte du trafic du moment plutôt que d'une moyenne théorique. Un exemple concret : depuis un point de départ proche du centre, un secteur logé en fond de vallée demande souvent un peu plus de route qu'un point posé sur un axe direct, simplement parce que la voirie serpente davantage entre les coteaux.`,
  }),
  // Vente par paire
  (city) => ({
    q: `Un seul de mes pneus est crevé ${aVille(city.name)} : pourquoi m'en proposer deux ?`,
    a: `Un essieu ne doit jamais porter deux gommes d'usure différente : le freinage devient inégal entre les deux roues, un vrai risque dans une côte mouillée ou sur les pavés du vieux Rouen. C'est pourquoi le remplacement se fait toujours en binôme sur le même essieu, jamais à l'unité, équilibrage compris. Et tant que la carcasse le permet, Lucas privilégie la réparation : rien n'est vendu qui ne soit nécessaire. Ce principe s'applique de la même façon à une petite citadine qu'à un utilitaire chargé, sur n'importe laquelle des communes couvertes par le fourgon.`,
  }),
  // Batterie
  (city) => ({
    q: `La voiture ne démarre plus ${aVille(city.name)} : la batterie se change directement sur place ?`,
    a: `Avant de proposer quoi que ce soit, Lucas vérifie si la batterie tient encore une charge et si l'alternateur recharge normalement — un moteur muet n'est pas toujours synonyme de batterie morte. Si le remplacement s'impose, il pose la référence 12V qui convient (classique, AGM, EFB ou Start & Stop) à l'endroit même où la voiture est garée, et récupère l'ancienne pour recyclage. Les écarts d'humidité propres à la vallée de Seine n'arrangent rien : ils fatiguent les batteries plus vite qu'ailleurs. Ce contrôle initial prend quelques minutes à peine, et évite bien souvent d'acheter une pièce neuve pour un problème qui ne vient que d'un mauvais contact ou d'une cosse oxydée.`,
  }),
  // Nuit / dimanche
  (city) => ({
    q: `Vous répondez aussi la nuit ou un dimanche ${aVille(city.name)} ?`,
    a: `Sans exception : ${NAP.hoursLabel.toLowerCase()} concerne aussi ${city.name}. Entre 22 h et 7 h, ainsi que les dimanches et jours fériés, une majoration s'ajoute, mais elle figure dans le montant annoncé au téléphone avant que le fourgon ne se mette en route — jamais une surprise sur place. Si la voiture peut patienter sans risque, rien n'empêche d'attendre le matin. Cette disponibilité complète répond à une réalité simple : une panne ne prévient jamais de l'heure à laquelle elle va tomber.`,
  }),
  // Bord de route / axes
  (city) => {
    const axe = city.axes && city.axes.length > 0 ? `la ${city.axes[0]}` : "un grand axe de l'agglo";
    return {
      q: `Immobilisé ${deVille(city.name)} sur ${axe}, dois-je patienter sur le bas-côté ?`,
      a: `Mettez-vous d'abord en sécurité : voiture rangée au plus loin de la circulation, feux de détresse allumés, gilet enfilé avant de sortir du véhicule, occupants à l'écart de la chaussée. Donnez ensuite un repère net — un pont, un rond-point, une sortie, une enseigne — et Lucas arrive avec son propre balisage pour traiter la roue sans déplacer la voiture. Ce protocole reste identique quel que soit l'axe concerné, qu'il s'agisse d'une départementale de l'agglo ou d'une rue plus tranquille en cœur de commune.`,
    };
  },
  // Stationnement / repères locaux
  (city) => {
    const reperes =
      city.landmarks.length > 0 ? city.landmarks.slice(0, 3).join(', ') : 'le centre';
    return {
      q: `Où exactement intervenez-vous ${aVille(city.name)} ?`,
      a: `N'importe où la voiture peut rester stationnée sans gêner personne : ${reperes}, une cour, un parking d'entreprise ou simplement la rue devant chez vous. Tout le nécessaire — démonte-pneu, équilibreuse, batteries, pneus dans les dimensions les plus courantes — voyage dans le fourgon ; c'est lui qui vient à ${city.name}, jamais l'inverse. Aucune adresse n'est trop excentrée : du fond d'une impasse à un parking fermé au public, le fourgon s'adapte à la configuration des lieux.`,
    };
  },
  // Réparable ou pas
  (city) => ({
    q: `Mon pneu crevé ${aVille(city.name)} peut-il être réparé, ou faut-il le changer ?`,
    a: `Seul le démontage permet de trancher : Lucas localise précisément la perforation et inspecte l'intérieur de la carcasse. Une crevaison sur la bande de roulement, de petit diamètre et sans dommage caché, se répare dans les règles et repart sous pression. Dès que la coupure touche le flanc ou l'épaulement, en revanche, aucune réparation ne tient dans la durée : le pneu est changé, avec son jumeau du même essieu, pendant la même visite. Cette vérification systématique évite à la fois de jeter un pneu encore bon et de repartir sur une réparation qui ne tiendrait pas dans la durée.`,
  }),
  // Secteur / EPCI
  (city) => ({
    q: `${city.name} entre-t-elle dans votre zone habituelle, ou est-ce un déplacement exceptionnel ?`,
    a: `${city.name} fait pleinement partie de la ${EPCI_LABEL[city.epci]}, un secteur que le fourgon parcourt aussi régulièrement que le centre de Rouen. Le service étant entièrement mobile, seul le temps de trajet varie selon votre position ; ce délai, comme le tarif de déplacement, est précisé au ${NAP.phoneDisplay} avant que quoi que ce soit ne soit engagé. Aucune commune du secteur n'est traitée comme secondaire : le même atelier, le même niveau d'équipement et les mêmes délais de réponse s'appliquent partout.`,
  }),
  // Pas de remorquage
  (city) => ({
    q: `Si le problème dépasse le pneu, embarquez-vous la voiture ${deVille(city.name)} jusqu'à un garage ?`,
    a: `Non, ce n'est pas ce que fait Lucas : aucun véhicule n'est chargé sur plateau ni tracté. Sa mission tient en une phrase : redonner à la voiture la capacité de rouler, à l'endroit précis où elle a calé — pneu, batterie, roue de secours. Si l'examen ${aVille(city.name)} révèle une panne mécanique plus profonde, il vous le dit clairement, sans détour, et vous laisse organiser la suite avec votre assurance ou un garage de votre choix. Ce choix n'est pas qu'une question de méthode : il évite l'attente d'un plateau pour un véhicule qu'on aurait pu, la plupart du temps, remettre en route sur place.`,
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
  const count = 7 + (h % 3); // 7, 8 ou 9 questions
  const start = (h >>> 4) % poolSize;
  const stride = STRIDES[(h >>> 8) % STRIDES.length];

  const items: FaqItem[] = [];
  for (let i = 0; i < count; i++) {
    const index = (start + i * stride) % poolSize;
    items.push(CITY_FAQ_POOL[index](city));
  }
  return items;
}

