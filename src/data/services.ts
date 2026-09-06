/**
 * Pages services transversales — silo cross-linké depuis chaque city page.
 * Chaque service vise un mot-clé tête de serveur unique pour éviter
 * la cannibalisation avec les city pages (intent ≠ géographie).
 *
 * Descriptions ancrées dans le terrain rouennais (quais de Seine, rive gauche
 * industrielle, coteaux, ponts, A13/A28/A150) pour se démarquer du réseau.
 */
export interface ServiceFaqItem {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  title: string;
  shortLabel: string;
  primaryKw: string;
  metaDescription: string;
  hookLine: string;
  bullets: string[];
  /** Prix d'appel TTC en euros (« à partir de »). ⚠️ PLACEHOLDERS — à valider par Adam avant publication. */
  priceFrom: number;
  /** Précision affichée à côté du prix (assiette, exclusions). */
  priceNote?: string;
  /** FAQ propre à la prestation, ancrée Rouen — 3 questions, rédigées à neuf. */
  faq: ServiceFaqItem[];
}

export const SERVICES: Service[] = [
  {
    slug: "depannage-pneu-urgence-24-7",
    title: "Dépannage pneu en urgence 24h/24, 7j/7",
    shortLabel: "Urgence 24/7",
    primaryKw: "dépannage pneu urgence 24/7",
    metaDescription: "Dépannage pneu urgence 24/7 à Rouen et en Seine-Maritime : réparé ou remplacé sur place, sans remorquage. Lucas intervient, vous repartez roulant.",
    hookLine: "Un pneu qui rend l'âme sur les quais de Seine à minuit, une gomme qui éclate sur l'A13 en rentrant, une crevaison au pied des coteaux : un appel suffit, Lucas débarque avec l'atelier dans le fourgon. Tout se règle là où la voiture s'est immobilisée — rien n'est tracté, vous repartez au volant.",
    bullets: [
      "Rouen et toute la Seine-Maritime couverts, de jour comme en pleine nuit",
      "Ligne joignable les dimanches, les jours fériés et à toute heure",
      "Selon l'état du pneu : réparation homologuée ou monte de gommes neuves",
      "Aucun remorquage : le véhicule repart roulant, par ses propres moyens",
    ],
    priceFrom: 79,
    priceNote: "déplacement + intervention, hors fourniture",
    faq: [
      {
        q: "Un pneu explose sur l'A13 en pleine nuit à hauteur de Rouen : que faire en premier ?",
        a: "Rangez-vous d'abord en sécurité — gilet, feux de détresse — puis rejoignez la première aire ou sortie : sur la voie elle-même, seuls les dépanneurs agréés via la borne orange ou le 112 interviennent. Une fois hors circulation, appelez Lucas : il termine le trajet jusqu'à vous et répare sur place.",
      },
      {
        q: 'Le dimanche à 2h du matin, la ligne répond vraiment ?',
        a: "Oui, sans standard ni renvoi : c'est directement Lucas qui décroche, dimanche ou pas, 22h ou 3h. La majoration de nuit s'applique, mais elle est dite avant le départ du fourgon, jamais découverte sur la note.",
      },
      {
        q: 'Vous intervenez dans tout Rouen ou seulement en centre-ville ?',
        a: "Sur toute la Seine-Maritime, pas seulement le centre : le fourgon roule aussi bien devant le Gros-Horloge que jusqu'aux boucles d'Oissel ou d'Elbeuf. Seul le temps de trajet change avec la distance, et il est annoncé dès l'appel.",
      },
    ],
  },
  {
    slug: "changement-pneu-domicile",
    title: "Changement de pneus à domicile sur RDV",
    shortLabel: "Pose sur RDV",
    primaryKw: "changement pneu à domicile",
    metaDescription: "Changement de pneus à domicile sur RDV à Rouen : montage et équilibrage devant chez vous, pneus fournis par paire, jamais à l'unité.",
    hookLine: "Inutile de sacrifier une matinée en salle d'attente : le matériel de montage tient dans le fourgon de Lucas. Il intervient là où votre voiture est garée — cour pavillonnaire sur les coteaux, parking d'entreprise en rive gauche industrielle, place au pied d'un pont — et repart en laissant des roues équilibrées, prêtes pour l'A150 comme pour les ronds-points de l'agglo.",
    bullets: [
      "Citadines, berlines, SUV, 4×4 et utilitaires, runflat inclus",
      "Pneus fournis par paire — 2, 4 ou 6 — pour un essieu homogène, jamais à l'unité",
      "Équilibrage de chaque roue et valves neuves posées d'office",
      "Vos anciens pneus repartent en filière de recyclage agréée",
    ],
    priceFrom: 35,
    priceNote: "par pneu posé, hors prix du pneu",
    faq: [
      {
        q: 'Faut-il être présent pendant le montage des pneus à domicile ?',
        a: "Idéalement oui, au moins pour l'état des lieux avant et après : Lucas vérifie l'usure des pneus, valide la dimension avec vous, puis lance le montage sur le parking ou devant chez vous, à Rouen comme dans les communes alentour. Comptez une trentaine de minutes pour un train de deux pneus.",
      },
      {
        q: 'Puis-je choisir la marque des pneus posés à domicile ?',
        a: "Oui : au téléphone, Lucas propose plusieurs gammes — entrée, milieu ou haut de gamme — selon votre budget et l'usage du véhicule, en respectant la dimension d'origine. Le choix se fait avant le rendez-vous, pas une fois le fourgon garé devant chez vous.",
      },
      {
        q: 'Le montage à domicile fonctionne aussi pour un utilitaire ou un SUV rouennais ?',
        a: "Oui, le fourgon embarque du matériel pour citadines, berlines, SUV et utilitaires. Sur les modèles à jantes larges ou runflat, plus fréquents sur les zones d'activité de la rive gauche, le temps de montage est simplement un peu plus long.",
      },
    ],
  },
  {
    slug: "crevaison-reparation",
    title: "Réparation de crevaison sur place",
    shortLabel: "Crevaison",
    primaryKw: "réparation crevaison sur place",
    metaDescription: "Crevaison réparée au point de panne à Rouen, mèche ou champignon selon la norme NF U85-200, ou remplacement par paire si besoin.",
    hookLine: "Un clou ramassé sur un chantier de la rive gauche, une vis attrapée le long des quais : tout se joue à l'examen, pas au jugé. Roue déposée, Lucas repère par où l'air s'échappe, sonde l'intérieur de la carcasse et regarde où le mal s'est logé. Perforation nette au centre de la bande de roulement ? Mèche ou champignon posé selon la norme NF U85-200, et la route reprend. Entaille sur le flanc ou l'épaulement ? Aucun remède ne tient : cap sur le remplacement, par paire sur l'essieu, dans la même halte.",
    bullets: [
      "Roue déposée, fuite localisée et carcasse sondée de l'intérieur",
      "Mèche ou champignon selon la norme NF U85-200 si la bande de roulement s'y prête",
      "Flanc ou épaulement entamé : on remplace, par paire, sans vous refixer un rendez-vous",
      "Gonflage remis à la préconisation constructeur et valve contrôlée avant de rendre la route",
    ],
    priceFrom: 49,
    priceNote: "réparation sur place",
    faq: [
      {
        q: "J'ai crevé sur les pavés du Vieux-Marché, la réparation est possible directement là ?",
        a: "Souvent oui : le pavé et les bordures hautes du centre marquent surtout le flanc, mais tant que le trou est sur la bande de roulement et de petit diamètre, la réparation NF U85-200 se fait sur place, pavés ou pas. Si la carcasse est touchée sur le flanc, direction le remplacement, par paire.",
      },
      {
        q: 'Combien de temps dure une réparation de crevaison chez moi ?',
        a: "Une vingtaine de minutes une fois le fourgon garé : démontage, localisation de la fuite, pose de la mèche ou du champignon et regonflage à la pression constructeur. Le temps de trajet jusqu'à votre adresse dans l'agglo s'ajoute à part.",
      },
      {
        q: 'Une crevaison lente répétée sur la rocade A150, ça se répare aussi ?',
        a: "Oui, et c'est même le cas le plus fréquent : un objet ramassé sur la rocade se loge souvent au centre de la bande de roulement, réparable sans changer le pneu. Lucas démonte, contrôle l'intérieur de la carcasse et pose la réparation homologuée avant de vous rendre la route.",
      },
    ],
  },
  {
    slug: "changement-batterie",
    title: "Changement de batterie 12V à domicile",
    shortLabel: "Batterie",
    primaryKw: "changement batterie voiture domicile",
    metaDescription: "Changement de batterie voiture à domicile à Rouen : test batterie et alternateur, Start&Stop, AGM, EFB. Le moteur redémarre sur place.",
    hookLine: "L'humidité qui remonte de la vallée de Seine, les hivers gris et des trajets d'agglo souvent trop courts pour recharger : les batteries rouennaises s'usent plus vite qu'ailleurs. Avant d'en poser une neuve, Lucas mesure la tension de la vôtre et la charge de l'alternateur, puis installe la référence exacte devant chez vous, d'un quartier des coteaux jusqu'aux quais.",
    bullets: [
      "Test de la batterie et contrôle de la charge alternateur systématiques",
      "Toutes technos 12V : standard, Start & Stop, AGM, EFB, hybrides",
      "Remplacement réalisé sur place, sans bouger le véhicule",
      "Reprogrammation BMS quand le modèle l'exige, ancienne batterie recyclée",
    ],
    priceFrom: 59,
    priceNote: "pose, hors prix de la batterie",
    faq: [
      {
        q: 'Comment savoir si c\'est la batterie et pas l\'alternateur, ma voiture calant souvent dans les côtes de Bonsecours ?',
        a: "Impossible à trancher à l'oreille : Lucas mesure d'abord la tension de la batterie puis la charge réellement délivrée par l'alternateur avant de vendre quoi que ce soit. Si l'alternateur est en cause, il vous le dit clairement plutôt que de poser une batterie neuve pour rien.",
      },
      {
        q: 'La batterie de ma voiture Start & Stop se change comme une batterie classique ?',
        a: "Non, elle demande une référence spécifique (AGM ou EFB selon les modèles) et parfois une reprogrammation du calculateur après la pose. Lucas identifie la techno exacte au téléphone avant de charger la bonne batterie dans le fourgon.",
      },
      {
        q: "L'humidité de la vallée de Seine use vraiment plus vite les batteries à Rouen ?",
        a: "C'est un facteur réel : une voiture qui dort dehors dans l'air humide et n'enchaîne que de courts trajets d'agglo recharge mal sa batterie, qui rend l'âme plus tôt qu'ailleurs. D'où l'intérêt de faire contrôler tension et alternateur dès les premiers signes de faiblesse, avant la panne complète.",
      },
    ],
  },
  {
    slug: "roue-de-secours",
    title: "Pose de roue de secours",
    shortLabel: "Roue de secours",
    primaryKw: "pose roue de secours",
    metaDescription: "Pose de roue de secours ou galette à Rouen : écrous serrés au couple, pneu d'origine inspecté. Lucas vient, vous reprenez la route.",
    hookLine: "Desserrer des écrous grippés avec le cric d'origine, immobilisé sur le bas-côté dans le vent, ce n'est pas une partie de plaisir. Une fois la voiture rangée en sécurité, Lucas s'en occupe : votre roue de secours est montée dans les règles, chaque écrou serré au couple constructeur, et le pneu d'origine passe à l'inspection avant que vous ne repreniez la route.",
    bullets: [
      "Galette ou roue de secours pleine dimension, montée proprement",
      "Écrous serrés au couple prescrit par le constructeur",
      "Pneu d'origine examiné : réparable ou bon pour le remplacement",
      "Conseil clair pour la suite, remplacement toujours par paire",
    ],
    priceFrom: 39,
    priceNote: "pose et contrôle du serrage",
    faq: [
      {
        q: 'Mes écrous sont grippés, la roue de secours est-elle quand même récupérable seul ?',
        a: "Mieux vaut ne pas insister avec le cric d'origine : un écrou qui résiste peut casser ou arracher le goujon. Lucas embarque une clé à choc et respecte le couple de serrage constructeur pour déposer proprement la roue et reposer la roue de secours sans rien abîmer.",
      },
      {
        q: "Ma voiture n'a qu'une galette étroite, elle suffit jusqu'où à Rouen ?",
        a: "Une galette limite la vitesse (souvent 80 km/h) et n'est pas faite pour durer : elle dépanne pour rejoindre un point où traiter le pneu d'origine, pas pour rouler des jours sur les rocades A13 ou A28. Lucas la monte proprement et vous conseille sur le délai avant remplacement.",
      },
      {
        q: 'Une fois la roue de secours posée, que devient mon pneu crevé ?',
        a: "Il repart avec Lucas pour inspection : si la perforation est réparable, il revient monté et regonflé lors d'un second passage ; sinon, le remplacement se fait par paire sur l'essieu concerné. Dans les deux cas, rien n'est décidé sans vous en parler au téléphone.",
      },
    ],
  },
];
