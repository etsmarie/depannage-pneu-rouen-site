/**
 * Pages services transversales — silo cross-linké depuis chaque city page.
 * Chaque service vise un mot-clé tête de serveur unique pour éviter
 * la cannibalisation avec les city pages (intent ≠ géographie).
 *
 * Descriptions ancrées dans le terrain rouennais (quais de Seine, rive gauche
 * industrielle, coteaux, ponts, A13/A28/A150) pour se démarquer du réseau.
 */
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
  },
  {
    slug: "crevaison-reparation",
    title: "Réparation de crevaison sur place",
    shortLabel: "Crevaison",
    primaryKw: "réparation crevaison sur place",
    metaDescription: "Crevaison réparée au point de panne dans l'agglo rouennaise : mèche ou champignon selon la norme NF U85-200 quand la bande de roulement le permet, remplacement par paire sinon.",
    hookLine: "Un clou ramassé sur un chantier de la rive gauche, une vis attrapée le long des quais : tout se joue à l'examen, pas au jugé. Roue déposée, Lucas repère par où l'air s'échappe, sonde l'intérieur de la carcasse et regarde où le mal s'est logé. Perforation nette au centre de la bande de roulement ? Mèche ou champignon posé selon la norme NF U85-200, et la route reprend. Entaille sur le flanc ou l'épaulement ? Aucun remède ne tient : cap sur le remplacement, par paire sur l'essieu, dans la même halte.",
    bullets: [
      "Roue déposée, fuite localisée et carcasse sondée de l'intérieur",
      "Mèche ou champignon selon la norme NF U85-200 si la bande de roulement s'y prête",
      "Flanc ou épaulement entamé : on remplace, par paire, sans vous refixer un rendez-vous",
      "Gonflage remis à la préconisation constructeur et valve contrôlée avant de rendre la route",
    ],
    priceFrom: 49,
    priceNote: "réparation sur place",
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
  },
  {
    slug: "roue-de-secours",
    title: "Pose de roue de secours",
    shortLabel: "Roue de secours",
    primaryKw: "pose roue de secours",
    metaDescription: "Pose de roue de secours ou galette à Rouen : écrous serrés au couple, pneu d'origine inspecté. Lucas vient, vous reprenez la route.",
    hookLine: "Desserrer des écrous grippés avec le cric d'origine, accroupi sur la bande d'arrêt de l'A28 dans le vent, ce n'est pas une partie de plaisir. Lucas s'en occupe : votre roue de secours est montée dans les règles, chaque écrou serré au couple constructeur, et le pneu d'origine passe à l'inspection avant que vous ne repreniez la route.",
    bullets: [
      "Galette ou roue de secours pleine dimension, montée proprement",
      "Écrous serrés au couple prescrit par le constructeur",
      "Pneu d'origine examiné : réparable ou bon pour le remplacement",
      "Conseil clair pour la suite, remplacement toujours par paire",
    ],
    priceFrom: 39,
    priceNote: "pose et contrôle du serrage",
  },
];
