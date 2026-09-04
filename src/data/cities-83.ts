/**
 * Maillage SEO de l'agglomération rouennaise (Métropole Rouen Normandie,
 * Seine-Maritime, 76) — un tier par poids de commune pour éviter la
 * cannibalisation entre pages.
 *   tier 1 : Rouen, page riche avec contexte détaillé
 *   tier 2 : communes de la métropole, pages plus courtes
 * (nom de fichier historique cities-83.ts conservé pour limiter la diff réseau)
 *
 * Les 15 communes listées appartiennent toutes à la Métropole Rouen Normandie.
 * Aucune ne chevauche le pays dieppois : Rouen est l'agglo, à ~60 km de Dieppe.
 */

export type EpciSlug = 'metropole-rouen-normandie';

export type CityTier = 1 | 2;

export interface CityKeywords {
  primary: string;
  secondary: string;
  tertiary: string;
}

export interface City {
  slug: string;
  name: string;
  postalCode: string;
  population: number;
  tier: CityTier;
  epci: EpciSlug;
  axes?: string[];
  keywords: CityKeywords;
  hookLine: string;
  /** Quartiers / repères réels, pour différencier le contenu (anti-duplicate). */
  landmarks: string[];
  /** Paragraphes de contexte local UNIQUES par commune (faits : axes, relief, saison). */
  localContext: string[];
  /**
   * Maillage interne contextuel (HTML) : 2-3 liens naturels vers d'autres pages
   * du MÊME site (communes voisines, service pertinent), ancres variées.
   * Rendu via set:html dans la section « côté terrain ».
   */
  internalLinks?: string;
}

export const CITIES_83: City[] = [
  {
    slug: "rouen",
    name: "Rouen",
    postalCode: "76000",
    population: 111360,
    tier: 1,
    epci: 'metropole-rouen-normandie',
    axes: ["A13", "A28", "A150", "quais bas de Seine"],
    keywords: {
      primary: "dépannage pneu Rouen",
      secondary: "crevaison Rouen",
      tertiary: "changement pneu à domicile Rouen",
    },
    hookLine: "Un pneu qui rend l'âme sur les pavés de la rue du Gros-Horloge ou une batterie muette au pied de la cathédrale : Lucas déboule avec l'atelier mobile et remet la voiture debout sur place, sans remorquage.",
    landmarks: [
      "le centre médiéval à pans de bois",
      "la rue piétonne du Gros-Horloge",
      "la place du Vieux-Marché",
      "les quais bas de Seine et le pont Flaubert",
      "les coteaux Sainte-Catherine et de Bonsecours",
      "les rocades A13, A28 et A150",
    ],
    localContext: [
      "Le vieux Rouen ne pardonne rien aux pneus. Entre les pavés disjoints de la rue du Gros-Horloge, les ruelles étroites autour de l'aître Saint-Maclou et les bordures agressives de la place du Vieux-Marché, un flanc se déchire vite et une jante prend cher. Ajoute le stationnement ultra-contraint du centre médiéval, où manœuvrer contre un trottoir haut est un classique. Quand ça lâche, l'atelier mobile vient à vous, sur place, dans la ruelle même. On répare la crevaison ou on remplace par paire sur le bon essieu, sans remorquage, et la voiture repart roulante.",
      "Grimper vers les coteaux Sainte-Catherine ou la côte de Bonsecours, ça sollicite. Ces montées raides qui dominent la Seine mettent la gomme et les freins à rude épreuve, et une usure déjà entamée finit par céder en pleine côte. Redescendre avec un pneu à plat vers le centre n'est pas une option. Lucas intervient directement où vous êtes stationné, en haut du coteau comme en bas, avec tout le matériel dans le fourgon. Diagnostic, réparation ou pose par paire même essieu : tout se règle sur place, sans plateau ni dépanneuse à attendre.",
      "Sur les rocades A13, A28 et A150, ou coincé dans la congestion des quais bas de Seine, un pépin pneu tourne vite au cauchemar. Le trafic dense entre les ponts Flaubert, Mathilde et Guillaume-le-Conquérant laisse peu de place pour s'arrêter, et rejoindre la rive gauche ou le quartier Saint-Sever avec une roue morte est risqué. On se déplace jusqu'à votre point d'immobilisation dès qu'il est hors autoroute : sortie, parking, rue. Crevaison réparée, roue de secours montée ou pneus posés par paire, batterie relancée si elle a rendu les armes : l'intervention se fait sur place, sans remorquage.",
    ],
    internalLinks: "<a href=\"/services/crevaison-reparation\">réparer une crevaison</a> ou faire poser vos pneus lors d'un <a href=\"/services/changement-pneu-domicile\">changement de pneu à domicile</a>, à Rouen comme à <a href=\"/sotteville-les-rouen\">Sotteville-lès-Rouen</a> ou <a href=\"/mont-saint-aignan\">Mont-Saint-Aignan</a>",
  },
  {
    slug: "sotteville-les-rouen",
    name: "Sotteville-lès-Rouen",
    postalCode: "76300",
    population: 29000,
    tier: 2,
    epci: 'metropole-rouen-normandie',
    axes: ["rive gauche", "abords du triage", "boulevards"],
    keywords: {
      primary: "dépannage pneu Sotteville-lès-Rouen",
      secondary: "crevaison Sotteville-lès-Rouen 76300",
      tertiary: "changement batterie voiture domicile Sotteville-lès-Rouen",
    },
    hookLine: "Batterie muette sur un parking le long du triage, pneu crevé en remontant vers l'hippodrome des Bruyères : donnez-nous l'adresse, l'atelier mobile arrive et repart sans jamais toucher à une dépanneuse.",
    landmarks: [
      "la gare de triage et le Technicentre SNCF de la Rotonde",
      "l'hippodrome des Bruyères",
      "le parc du Champ-de-Courses",
      "le Jardin des Plantes qui borde la commune",
      "les grands boulevards de la rive gauche",
      "les quartiers pavillonnaires cheminots",
    ],
    localContext: [
      "Cité cheminote façonnée par le rail, Sotteville-lès-Rouen s'étire sur la rive gauche autour de son immense gare de triage et du Technicentre SNCF de la Rotonde. Entre les grands boulevards, les rues pavillonnaires ouvrières et les abords du faisceau ferroviaire, une voiture immobilisée coince vite tout un carrefour. Un pneu à plat devant chez vous ou une batterie qui ne répond plus au petit matin, et l'atelier mobile vient jusqu'à la place de stationnement. On répare sur place, sans remorquage : le véhicule repart en roulant, sans passer par la case garage.",
      "Le trafic ne manque pas ici : proximité immédiate du centre de Rouen par les ponts, flux vers l'hippodrome des Bruyères et le parc du Champ-de-Courses, allées bordant le Jardin des Plantes. Les bordures serrées des quartiers denses entaillent les flancs, et les nids-de-poule des vieux boulevards achèvent une gomme fatiguée. Quand un pneu est trop abîmé pour être sauvé, on le remplace par paire sur le même essieu, directement dans votre rue ou sur un parking, sans plateau ni attente à l'atelier.",
    ],
    internalLinks: "<a href=\"/services/changement-batterie\">Une batterie à remplacer</a> se règle dans votre cour, et le fourgon file ensuite vers <a href=\"/le-petit-quevilly\">Le Petit-Quevilly</a> ou <a href=\"/saint-etienne-du-rouvray\">Saint-Étienne-du-Rouvray</a> ; les prix sont détaillés sur la page <a href=\"/tarifs\">tarifs indicatifs</a>.",
  },
  {
    slug: "le-grand-quevilly",
    name: "Le Grand-Quevilly",
    postalCode: "76120",
    population: 25000,
    tier: 2,
    epci: 'metropole-rouen-normandie',
    axes: ["A13", "pont Flaubert", "boulevard industriel"],
    keywords: {
      primary: "dépannage pneu Le Grand-Quevilly",
      secondary: "crevaison Le Grand-Quevilly",
      tertiary: "changement pneu domicile Le Grand-Quevilly",
    },
    hookLine: "Un pneu à plat sur le boulevard industriel, à deux pas du Zénith ? On débarque avec l'atelier mobile et on répare sur place, sans plateau ni remorquage.",
    landmarks: [
      "le boulevard industriel",
      "le pont Flaubert",
      "l'A13",
      "le Zénith de Rouen et le Parc des expositions",
      "le palais des sports Amable-Lozai",
      "la lisière de la forêt du Rouvray",
    ],
    localContext: [
      "Rive gauche tournée vers le port de Rouen, Le Grand-Quevilly aligne zones portuaires, dépôts pétrochimiques et un boulevard industriel où circulent poids lourds et utilitaires. Sur ces chaussées chargées, éclats de métal et débris de chantier tranchent un flanc en une seconde. Un camion se met en travers d'une entrée de dépôt, une roue crevée bloque tout. On arrive sur place avec le nécessaire : réparation de la crevaison ou remplacement du pneu monté et équilibré au pied du véhicule, qui repart roulant sans remorquage ni immobilisation à rallonge.",
      "Côté vie locale, le trafic explose les soirs de concert au Zénith ou de salon au Parc des expositions, tout comme autour du palais des sports Amable-Lozai. Ajoutez l'accès direct au pont Flaubert et à l'A13, plus l'écoquartier récent en lisière de la forêt du Rouvray : une batterie qui lâche sur un parking bondé ou un pneu à changer avant de reprendre l'autoroute, c'est vite l'urgence. On intervient à domicile comme sur site. Rappel utile : un pneu de remplacement se pose toujours par paire, sur le même essieu, pour garder l'équilibre.",
    ],
    internalLinks: "<a href=\"/services/depannage-pneu-urgence-24-7\">notre dépannage pneu 24h/24</a> couvre aussi <a href=\"/le-petit-quevilly\">Le Petit-Quevilly</a> et <a href=\"/canteleu\">Canteleu</a>, et pour connaître nos prix à l'avance, consultez <a href=\"/tarifs\">la grille tarifaire</a>.",
  },
  {
    slug: "le-petit-quevilly",
    name: "Le Petit-Quevilly",
    postalCode: "76140",
    population: 22000,
    tier: 2,
    epci: 'metropole-rouen-normandie',
    axes: ["pont Guillaume-le-Conquérant", "boulevards", "tramway"],
    keywords: {
      primary: "dépannage pneu Le Petit-Quevilly",
      secondary: "crevaison Le Petit-Quevilly",
      tertiary: "changement pneu domicile Le Petit-Quevilly",
    },
    hookLine: "Un flanc de pneu ouvert sur les boulevards, juste après le pont Guillaume-le-Conquérant ? À Le Petit-Quevilly, je débarque avec l'atelier mobile et votre voiture repart roulante.",
    landmarks: [
      "le pont Guillaume-le-Conquérant",
      "la chapelle Saint-Julien",
      "la scène musicale La Foudre",
      "la place du 8-Mai-1945",
      "la ligne de tramway",
      "les boulevards passants",
    ],
    localContext: [
      "Collée à la rive gauche de Rouen, Le Petit-Quevilly aligne des boulevards passants où le trafic ne faiblit jamais, entre la place du 8-Mai-1945 et le terminus du tramway. Dans ce tissu urbain dense, un pneu qui rend l'âme au bord d'un trottoir bloque vite la circulation. J'interviens sur place, avec l'atelier mobile : démontage, pose des pneus par paire sur le même essieu, équilibrage, et votre voiture repart roulante. Pas de remorquage, pas de plateau, aucun garage à rejoindre. Vous restez à côté de votre véhicule, je m'occupe de tout le reste devant chez vous.",
      "Entre les anciennes usines reconverties, la chapelle Saint-Julien et la scène musicale La Foudre, les rues serrées et les stationnements étroits mettent les flancs de pneu à rude épreuve. Une crevaison au retour d'un concert ou une batterie à plat un matin d'hiver, ça arrive plus souvent qu'on ne croit. Depuis le pont Guillaume-le-Conquérant jusqu'aux boulevards du centre, je me déplace à toute heure. Réparation de crevaison, changement de pneu par paire ou coup de main sur une batterie : tout se règle sur place, sans remorquage, sans immobiliser votre journée ni votre voiture.",
    ],
    internalLinks: "Besoin d'un coup de main au-delà des boulevards ? Je couvre aussi <a href=\"/rouen\">Rouen</a> et <a href=\"/le-grand-quevilly\">Le Grand-Quevilly</a>, avec un <a href=\"/services/depannage-pneu-urgence-24-7\">dépannage pneu en urgence 24h/24</a> partout dans l'agglo.",
  },
  {
    slug: "mont-saint-aignan",
    name: "Mont-Saint-Aignan",
    postalCode: "76130",
    population: 19000,
    tier: 2,
    epci: 'metropole-rouen-normandie',
    axes: ["côte de Mont-Saint-Aignan", "plateau nord"],
    keywords: {
      primary: "dépannage pneu Mont-Saint-Aignan",
      secondary: "crevaison Mont-Saint-Aignan",
      tertiary: "changement pneu domicile Mont-Saint-Aignan",
    },
    hookLine: "Une crevaison au pied de la côte de Mont-Saint-Aignan ou un démarreur muet devant le campus NEOMA ? On monte sur le plateau nord avec l'atelier mobile et on répare sur place, sans plateau.",
    landmarks: [
      "la côte de Mont-Saint-Aignan",
      "le campus de NEOMA Business School",
      "le golf de Rouen-Mont-Saint-Aignan",
      "le quartier Village",
      "le Plateau",
      "le quartier Colbert",
    ],
    localContext: [
      "Perchée sur le coteau nord, Mont-Saint-Aignan se gagne par la côte raide qui grimpe depuis Rouen, et cette montée met les pneus à l'épreuve : un flanc déjà entamé lâche souvent en pleine pente. Entre le quartier Village, le Plateau et Colbert, les rues résidentielles cossues laissent peu de place pour changer une roue au bord du trottoir. On arrive avec l'atelier mobile, on répare ou on remplace sur place, sans remorquage, et votre voiture repart roulante avant même que vous ayez fini votre café.",
      "Ville universitaire par excellence, Mont-Saint-Aignan concentre le campus de NEOMA Business School, les facultés de lettres et de sciences et les cités U, avec un flux d'étudiants qui se gare et redémarre à toute heure. Une batterie vidée après un week-end à l'arrêt, une crevaison sur le parking du golf de Rouen-Mont-Saint-Aignan : on intervient là où vous êtes, de jour comme de nuit. Quand un pneu est mort, on le remplace par paire sur le même essieu, jamais à l'unité, pour garder une tenue de route saine sur le plateau.",
    ],
    internalLinks: "Nous couvrons aussi les communes voisines du plateau nord comme <a href=\"/bois-guillaume\">Bois-Guillaume</a> et <a href=\"/bihorel\">Bihorel</a>, et vous pouvez découvrir notre <a href=\"/services/changement-pneu-domicile\">changement de pneu à domicile</a> pour une intervention sur place.",
  },
  {
    slug: "bois-guillaume",
    name: "Bois-Guillaume",
    postalCode: "76230",
    population: 13000,
    tier: 2,
    epci: 'metropole-rouen-normandie',
    axes: ["côte de Bois-Guillaume", "route de Neufchâtel (D928)"],
    keywords: {
      primary: "dépannage pneu Bois-Guillaume",
      secondary: "crevaison Bois-Guillaume",
      tertiary: "changement pneu domicile Bois-Guillaume",
    },
    hookLine: "Un pneu qui rend l'âme en haut de la côte de Bois-Guillaume ou sur un parking de la route de Neufchâtel : notre atelier mobile arrive sur place et repart le véhicule roulant, sans remorquage.",
    landmarks: [
      "la côte de Bois-Guillaume",
      "la route de Neufchâtel (D928)",
      "le plateau nord résidentiel",
      "les zones commerciales de la D928",
      "les lotissements pavillonnaires",
      "la limite avec Bihorel",
    ],
    localContext: [
      "Perché sur le plateau nord, Bois-Guillaume grimpe depuis Rouen par une rampe raide, la fameuse côte de Bois-Guillaume. C'est justement là qu'un pneu déjà fatigué lâche : la montée sollicite la gomme, chauffe les flancs et fait ressortir la moindre coupure. Sur la route de Neufchâtel (D928), les zones commerciales enchaînent bordures et nids-de-poule qui pincent un pneu contre la jante. Dès l'appel, on vient sur place, devant chez vous ou sur le parking, et on remet le véhicule d'aplomb sans remorquage, sans plateau, sans que vous ayez à bouger.",
      "Entre les lotissements pavillonnaires et les cliniques du secteur, on connaît les rues étroites et les allées résidentielles où stationner un dépanneur relève du casse-tête. Notre atelier mobile se gare au plus près, démonte, répare la crevaison ou pose des pneus neufs directement dans votre allée. Quand la bande de roulement est trop entamée, on remplace par paire sur le même essieu, jamais à l'unité, pour garder une tenue de route franche. Batterie à plat un matin d'hiver au bord du plateau, contre Bihorel ? On teste, on change, et vous repartez roulant sans avoir quitté votre place.",
    ],
    internalLinks: "<a href=\"/services/crevaison-reparation\">réparer une crevaison</a> à Bois-Guillaume, poser un <a href=\"/services/changement-pneu-domicile\">pneu neuf à domicile</a> ou intervenir chez nos voisins de <a href=\"/bihorel\">Bihorel</a> et <a href=\"/mont-saint-aignan\">Mont-Saint-Aignan</a> sur le plateau.",
  },
  {
    slug: "bihorel",
    name: "Bihorel",
    postalCode: "76420",
    population: 8500,
    tier: 2,
    epci: 'metropole-rouen-normandie',
    axes: ["côtes vers Rouen", "plateau"],
    keywords: {
      primary: "dépannage pneu Bihorel",
      secondary: "crevaison Bihorel",
      tertiary: "batterie voiture Bihorel",
    },
    hookLine: "Une roue à plat devant le lycée des Chartreux ou en haut d'une côte qui redescend vers Rouen : notre atelier mobile arrive sur place et votre voiture repart roulante.",
    landmarks: [
      "le quartier des Chartreux",
      "le lycée des Chartreux",
      "les côtes qui redescendent vers Rouen",
      "le plateau nord entre Rouen et Bois-Guillaume",
      "le tissu pavillonnaire et les petits immeubles",
    ],
    localContext: [
      "Coincée sur le plateau nord, entre Rouen et Bois-Guillaume, Bihorel enchaîne les rues en pente qui plongent vers la vallée. Ce relief use les pneus et surprend les batteries : un démarrage à froid en haut du quartier des Chartreux, une bordure prise de travers dans une rue étroite, et le flanc lâche. Ici le stationnement pavillonnaire colle les voitures au trottoir, et personne n'a envie de rouler crevé jusqu'à Rouen. On intervient directement sur place, devant chez vous ou près du lycée des Chartreux, sans remorquage ni plateau. L'atelier mobile arrive équipé, on démonte, on remplace, on remonte, et la voiture redescend la côte sur des pneus sains.",
      "Résidentiel dense, petits immeubles, allées qui montent et redescendent : Bihorel n'est pas fait pour attendre une dépanneuse. Une crevaison au réveil, une batterie morte après une nuit fraîche sur le plateau, et la journée est bloquée. On se déplace 24h/24 sur toute la commune, du secteur des Chartreux aux rues qui filent vers Rouen. Selon l'usure, un pneu se remplace par paire sur le même essieu pour garder une tenue de route franche dans les descentes. Réparation de crevaison, changement de pneu, batterie relancée : tout se fait sur place, sans plateau, pour que vous repreniez la route sans quitter votre rue.",
    ],
    internalLinks: "<a href=\"/services/crevaison-reparation\">réparer une crevaison</a> à Bihorel, on rayonne aussi vers <a href=\"/bois-guillaume\">Bois-Guillaume</a> et <a href=\"/rouen\">Rouen</a> pour un <a href=\"/services/changement-pneu-domicile\">changement de pneu à domicile</a>.",
  },
  {
    slug: "deville-les-rouen",
    name: "Déville-lès-Rouen",
    postalCode: "76250",
    population: 10000,
    tier: 2,
    epci: 'metropole-rouen-normandie',
    axes: ["A150", "D6015 (vallée du Cailly)"],
    keywords: {
      primary: "dépannage pneu Déville-lès-Rouen",
      secondary: "crevaison Déville-lès-Rouen 24/7",
      tertiary: "changement batterie voiture Déville-lès-Rouen",
    },
    hookLine: "Pneu à plat sur la D6015 au fond de la vallée du Cailly, batterie à plat sur un parking de zone commerciale : donnez-nous l'adresse, l'atelier mobile arrive et repart avec vous roulant.",
    landmarks: [
      "l'axe D6015 (ex-RN15) au fond de la vallée du Cailly",
      "la vallée encaissée du Cailly",
      "les zones commerciales et artisanales",
      "la ligne de tramway et le TEOR",
      "la gare de Déville-lès-Rouen",
      "l'échangeur de l'A150 vers Rouen",
    ],
    localContext: [
      "Coincée au fond de la vallée du Cailly, Déville-lès-Rouen concentre son trafic sur la D6015, l'ancienne RN15, qui file droit vers Rouen entre zones commerciales et tissu artisanal. Ce couloir de transit, encaissé et souvent embouteillé, ne pardonne pas une roue qui se dégonfle : impossible de s'arrêter proprement sans gêner tout le monde. On vient sur place, sur le parking d'une enseigne, devant un atelier ou le long de la voie, et on remet le véhicule d'aplomb sans remorquage. Quand le pneu est mort, on remplace par paire sur le même essieu, jamais à l'unité.",
      "Autre réalité dévillaise : les voitures qui dorment dehors près de la gare ou des arrêts de tramway et du TEOR encaissent l'humidité de fond de vallée, et une batterie fatiguée finit par lâcher au démarrage un matin frais. Plutôt que de laisser un conducteur bloqué à côté des rails ou sur une place de zone artisanale, l'atelier mobile se déplace directement à l'adresse indiquée. Test, remplacement de batterie ou réparation de crevaison, tout se règle sur le trottoir ou le parking, et la voiture repart roulante — aucun plateau, aucune dépanneuse dans l'histoire.",
    ],
    internalLinks: "Un pneu crevé sur la D6015 ? On assure la <a href=\"/services/crevaison-reparation\">réparation de crevaison sur place</a> à Déville comme à <a href=\"/maromme\">Maromme</a> plus haut dans la vallée du Cailly, et on file volontiers vers <a href=\"/rouen\">Rouen</a> ou <a href=\"/canteleu\">Canteleu</a> ; les <a href=\"/tarifs\">tarifs indicatifs</a> sont annoncés avant l'intervention.",
  },
  {
    slug: "maromme",
    name: "Maromme",
    postalCode: "76150",
    population: 11000,
    tier: 2,
    epci: 'metropole-rouen-normandie',
    axes: ["vallée du Cailly", "D6015", "D86"],
    keywords: {
      primary: "dépannage pneu Maromme",
      secondary: "crevaison Maromme 24/7",
      tertiary: "changement pneu à domicile Maromme",
    },
    hookLine: "Roue à plat sur la D6015 au fond de la vallée du Cailly, batterie morte au parking des Espaces du Cailly : donnez-nous l'adresse, l'atelier mobile descend jusqu'à vous.",
    landmarks: [
      "la vallée du Cailly et sa rivière",
      "le centre commercial des Espaces du Cailly",
      "la D6015 en fond de vallée",
      "la D86",
      "les côtes qui montent vers le plateau",
      "les anciennes filatures cotonnières",
    ],
    localContext: [
      "Ancienne cité cotonnière blottie dans la vallée du Cailly, Maromme garde ce relief serré entre la rivière et les côtes qui grimpent vers le plateau. La D6015 file en fond de vallée, la D86 raccorde les quartiers hauts, et le stationnement se fait au plus juste devant les anciennes filatures reconverties ou aux Espaces du Cailly. Une roue à plat au retour des courses ou un flanc entaillé sur une bordure, et la journée cale. L'atelier mobile vient sur place, sur le parking ou au pied de l'immeuble, et la voiture repart en roulant, sans remorquage.",
      "Rien ne fatigue plus une batterie ni une gomme que les montées répétées vers le plateau et les redémarrages en côte du secteur. En fond de vallée, l'humidité du Cailly et les nuits fraîches achèvent les batteries qui dorment dehors ; sur les rampes de la D86, un pneu sous-gonflé s'use sans prévenir. On intervient là où vous êtes, cour, rue étroite ou aire de l'A150 toute proche. Quand la bande de roulement est trop attaquée pour une réparation, on remplace les pneus par paire sur le même essieu, réglé au téléphone avant de partir.",
    ],
    internalLinks: "<a href=\"/deville-les-rouen\">Déville-lès-Rouen, juste en aval du Cailly</a>, fait partie du même secteur, tout comme <a href=\"/barentin\">Barentin en remontant vers l'A150</a> ; et quand la gomme est fichue, la <a href=\"/services/changement-pneu-domicile\">pose d'un train de pneus à domicile</a> se règle sans bouger le véhicule.",
  },
  {
    slug: "darnetal",
    name: "Darnétal",
    postalCode: "76160",
    population: 9500,
    tier: 2,
    epci: 'metropole-rouen-normandie',
    axes: ["vallée du Robec", "D42", "D138"],
    keywords: {
      primary: "dépannage pneu Darnétal",
      secondary: "crevaison Darnétal 24/7",
      tertiary: "changement pneu domicile Darnétal",
    },
    hookLine: "Roue à plat au fond de la vallée du Robec, batterie muette un matin d'hiver dans une côte de Longpaon : donnez-nous l'adresse, le fourgon-atelier monte et répare sur place.",
    landmarks: [
      "la vallée du Robec et ses anciens moulins",
      "la confluence de l'Aubette et du Robec",
      "le quartier de Longpaon",
      "le quartier de Carville",
      "la D42 vers le pays de Bray",
      "la D138",
    ],
    localContext: [
      "Ancienne cité drapière collée à l'est de Rouen, Darnétal s'étire au creux des vallées de l'Aubette et du Robec, là où tournaient jadis les moulins du textile. Le relief encaissé, les côtes qui grimpent vers Longpaon ou Carville et les chaussées humides le long des cours d'eau mettent les pneus à rude épreuve : un flanc qui touche une bordure, une crevaison lente au retour du travail, et la voiture reste plantée. Le fourgon-atelier vient jusqu'à la rue, la cour ou le pavillon, et on répare sur place, sans remorquage. Le véhicule repart en roulant.",
      "Ville ouvrière et pavillonnaire, Darnétal voit passer un flux dense sur la D42 et la D138, ces axes qui filent vers le pays de Bray et se resserrent dans le fond de vallée. Le stationnement en pente, les hivers rudes et les batteries qui dorment dehors alimentent notre carnet d'appels : démarrage impossible un matin gelé, pneu éventré sur un nid-de-poule. On intervient sur place, à domicile comme sur un parking, et quand l'usure impose un changement, les pneus se posent toujours par paire sur le même essieu pour garder une tenue de route saine.",
    ],
    internalLinks: "Le fourgon boucle souvent une <a href=\"/services/crevaison-reparation\">crevaison à réparer dans le fond du Robec</a> avant de filer vers <a href=\"/rouen\">notre secteur de Rouen</a> ou de remonter la côte jusqu'à <a href=\"/bois-guillaume\">Bois-Guillaume</a> ; les prix sont détaillés sur la page <a href=\"/tarifs\">tarifs indicatifs</a>.",
  },
  {
    slug: "saint-etienne-du-rouvray",
    name: "Saint-Étienne-du-Rouvray",
    postalCode: "76800",
    population: 28000,
    tier: 2,
    epci: 'metropole-rouen-normandie',
    axes: ["RN338 (Sud III)", "A13", "technopôle du Madrillet"],
    keywords: {
      primary: "dépannage pneu Saint-Étienne-du-Rouvray",
      secondary: "crevaison Saint-Étienne-du-Rouvray",
      tertiary: "batterie voiture Saint-Étienne-du-Rouvray",
    },
    hookLine: "Un pneu à plat sur la RN338 en sortant du technopôle du Madrillet ? Notre atelier mobile débarque sur place et votre voiture repart roulante, sans remorquage.",
    landmarks: [
      "le technopôle du Madrillet",
      "l'INSA Rouen Normandie",
      "la RN338 (Sud III)",
      "la forêt du Rouvray",
      "le quartier du Château Blanc",
    ],
    localContext: [
      "Au technopôle du Madrillet, entre l'INSA Rouen Normandie, l'UFR sciences et les entreprises high-tech, les parkings se remplissent dès l'aube et un pneu à plat cloue vite une voiture au sol. Sur ces grandes emprises, personne n'a le temps de gérer une crevaison entre deux réunions. On arrive sur place, atelier mobile garé juste à côté du véhicule : réparation ou changement de pneu là où vous êtes stationné, sans remorquage. Et quand il faut remplacer, c'est toujours par paire sur le même essieu, pour garder une tenue de route saine à la sortie.",
      "Rive gauche sud, Saint-Étienne-du-Rouvray s'étire le long de la RN338, la Sud III, avec l'A13 toute proche et des zones industrielles qui tournent en continu. Sur ces voies rapides, un impact ou une usure passe inaperçu jusqu'au flanc qui lâche ; du côté du quartier du Château Blanc et des grands ensembles, une batterie fatiguée refuse souvent de démarrer au matin. De la forêt du Rouvray jusqu'aux ateliers du secteur, notre intervention se fait sur place, sans plateau : diagnostic, réparation ou remplacement, et le véhicule repart roulant sans détour par un garage.",
    ],
    internalLinks: "Nous intervenons aussi à <a href=\"/oissel\">Oissel</a> et <a href=\"/sotteville-les-rouen\">Sotteville-lès-Rouen</a>, et vous pouvez consulter à tout moment notre service de <a href=\"/services/crevaison-reparation\">réparation de crevaison</a>.",
  },
  {
    slug: "canteleu",
    name: "Canteleu",
    postalCode: "76380",
    population: 14000,
    tier: 2,
    epci: 'metropole-rouen-normandie',
    axes: ["côte de Canteleu", "D982"],
    keywords: {
      primary: "dépannage pneu Canteleu",
      secondary: "crevaison Canteleu",
      tertiary: "changement pneu domicile Canteleu",
    },
    hookLine: "Pneu à plat en haut de la côte de Canteleu, batterie muette face au panorama sur la boucle de la Seine : donnez-nous l'adresse, l'atelier mobile monte jusqu'à vous.",
    landmarks: [
      "la côte de Canteleu et sa rampe raide",
      "le coteau ouest dominant la boucle de la Seine",
      "la forêt de Roumare",
      "le quartier bas de Bapeaume-lès-Rouen, en bord de Seine",
      "le plateau résidentiel et ses grands ensembles en hauteur",
      "la D982",
    ],
    localContext: [
      "Perchée sur le coteau ouest qui domine la boucle de la Seine, Canteleu s'étage entre la forêt de Roumare et son panorama réputé sur Rouen. Pour rejoindre le plateau résidentiel et ses grands ensembles en hauteur, tout le monde emprunte la côte de Canteleu, une rampe raide qui met les mécaniques à l'épreuve : c'est souvent là qu'un pneu déjà entamé lâche ou qu'une batterie fatiguée refuse de repartir. On intervient sur place, au pied de l'immeuble ou sur un parking, et la voiture repart en roulant, sans remorquage.",
      "En contrebas, le quartier de Bapeaume-lès-Rouen borde la Seine tandis que le plateau surplombe la vallée : deux niveaux reliés par la D982 et une pente qui ne pardonne rien au stationnement en côte. Notre fourgon-atelier vient jusqu'à votre porte, mesure l'usure et, quand la gomme est trop abîmée, remplace les pneus par paire sur le même essieu pour garder une tenue de route franche. Crevaison réparée, batterie changée ou roue de secours posée : tout se règle devant chez vous, sans plateau ni attente interminable.",
    ],
    internalLinks: "Selon les appels, le fourgon redescend la côte vers <a href=\"/rouen\">Rouen</a> ou file sur <a href=\"/deville-les-rouen\">Déville-lès-Rouen</a> tout proche ; et quand la gomme est trop entaillée, la <a href=\"/services/changement-pneu-domicile\">pose d'un train de pneus à domicile</a> se règle aux tarifs <a href=\"/tarifs\">indiqués ici</a>.",
  },
  {
    slug: "oissel",
    name: "Oissel",
    postalCode: "76350",
    population: 11500,
    tier: 2,
    epci: 'metropole-rouen-normandie',
    axes: ["A13", "RN338", "pont d'Oissel"],
    keywords: {
      primary: "dépannage pneu Oissel",
      secondary: "crevaison Oissel",
      tertiary: "changement pneu domicile Oissel",
    },
    hookLine: "Un pneu qui lâche sur le pont d'Oissel ou à la sortie A13, et voilà la journée coincée : on arrive avec l'atelier mobile, on répare sur place, vous repartez roulant.",
    landmarks: [
      "le pont d'Oissel",
      "la gare de bifurcation d'Oissel",
      "la base de loisirs de Bédanne",
      "la forêt du Rouvray",
      "la sortie A13",
      "la RN338",
    ],
    localContext: [
      "Coincée dans une boucle de la Seine, Oissel avale un trafic dense entre la sortie A13, la RN338 et le pont d'Oissel. Sur ces axes chargés, un nid-de-poule ou un débris industriel suffit à ouvrir un flanc, et la crevaison tombe rarement au bon moment. Notre atelier mobile se déplace directement là où vous êtes bloqué, bord de route ou parking, et intervient sur place, sans remorquage. Pneu percé, valve fuyarde ou jante mordue : on diagnostique, on répare ou on remonte, et vous reprenez la route sans détour par un garage.",
      "Entre les zones pavillonnaires des bords de Seine, les sites industriels dont la pharmaceutique, la gare de bifurcation et la base de loisirs de Bédanne, les usages de la voiture à Oissel sont variés et exigeants. Le froid des matins près de la forêt du Rouvray ou de La Londe met les batteries à genoux, et un pneu très usé finit toujours par céder. On vient chez vous, devant le pavillon ou sur le lieu de travail : test et remplacement de batterie sur place, et changement de pneus toujours par paire sur un même essieu pour garder une tenue de route équilibrée.",
    ],
    internalLinks: "<a href=\"/services/crevaison-reparation\">réparer une crevaison</a> ou <a href=\"/services/changement-pneu-domicile\">changer vos pneus à domicile</a> à Oissel, et on couvre aussi <a href=\"/saint-etienne-du-rouvray\">Saint-Étienne-du-Rouvray</a> comme <a href=\"/elbeuf\">Elbeuf</a> juste à côté.",
  },
  {
    slug: "barentin",
    name: "Barentin",
    postalCode: "76360",
    population: 12500,
    tier: 2,
    epci: 'metropole-rouen-normandie',
    axes: ["A150", "vallée de l'Austreberthe", "viaduc"],
    keywords: {
      primary: "dépannage pneu Barentin",
      secondary: "crevaison Barentin 24/7",
      tertiary: "changement pneu domicile Barentin",
    },
    hookLine: "Roue à plat sur l'A150 en sortant du centre de marques, batterie muette au pied du viaduc en briques : donnez-nous l'adresse, le fourgon-atelier arrive et repart en vous laissant roulant.",
    landmarks: [
      "le viaduc ferroviaire de Barentin",
      "l'A150 entre Rouen et Yvetot",
      "la vallée de l'Austreberthe",
      "le centre de marques et ses magasins d'usine",
      "la gare de Barentin",
      "les coteaux dominant la vallée",
    ],
    localContext: [
      "Posée au creux de la vallée de l'Austreberthe, Barentin s'étire au nord-ouest de l'agglomération, coupée en deux par l'A150 qui file de Rouen vers Yvetot. Le trafic y est dense aux heures de pointe et devant le centre de marques, où les parkings débordent le week-end. Un clou ramassé sur une bretelle, un pneu qui se dégonfle sur le stationnement des magasins d'usine, et la journée se bloque. On intervient sur place, à l'endroit exact où la voiture s'est arrêtée : cour, bas-côté ou place de parking, sans remorquage ni plateau.",
      "Le relief joue aussi contre les pneus et les batteries à Barentin. Le fond de vallée abrite le centre, la gare et le fameux viaduc en briques de 1846, tandis que les coteaux montent raide de part et d'autre. Ces côtes humides révèlent vite une gomme fatiguée ou une batterie en bout de course, surtout l'hiver quand les voitures dorment dehors. Le fourgon-atelier vient équipé pour tout traiter au pied du viaduc comme sur les hauteurs ; et quand un pneu est trop entaillé, on remplace la paire sur le même essieu, jamais une roue seule.",
    ],
    internalLinks: "L'A150 relie Barentin à <a href=\"/maromme\">Maromme</a> et <a href=\"/canteleu\">Canteleu</a> en quelques minutes, secteurs que le même fourgon dessert ; un silex ramassé sur la voie se solde souvent par une <a href=\"/services/crevaison-reparation\">réparation de crevaison sur place</a>, aux prix détaillés sur la page <a href=\"/tarifs\">tarifs indicatifs</a>.",
  },
  {
    slug: "elbeuf",
    name: "Elbeuf",
    postalCode: "76500",
    population: 16500,
    tier: 2,
    epci: 'metropole-rouen-normandie',
    axes: ["D840", "D7", "ponts sur la Seine"],
    keywords: {
      primary: "dépannage pneu Elbeuf",
      secondary: "crevaison Elbeuf",
      tertiary: "changement pneu domicile Elbeuf",
    },
    hookLine: "Un pneu à plat sur le pont Jean-Jaurès ou un démarreur muet devant la Fabrique des savoirs : l'atelier mobile file jusqu'à Elbeuf et remet la voiture en route sur place, sans plateau.",
    landmarks: [
      "le pont Jean-Jaurès sur la Seine",
      "la Fabrique des savoirs",
      "le cirque-théâtre",
      "la D840",
      "la D7",
      "les coteaux de la boucle de Seine",
    ],
    localContext: [
      "Elbeuf tient dans une boucle de la Seine, un peu à l'écart du reste de l'agglo, avec ses ponts qui enjambent le fleuve et ses coteaux qui grimpent sec. Cette ancienne cité drapière garde des rues étroites héritées des ateliers de laine, où un flanc de pneu se déchire vite contre une bordure haute. La D840 et la D7 canalisent tout le trafic de la ville et de ses sœurs voisines. Sur ces axes, une crevaison bloque net. On intervient sur place, sans remorquage : je viens avec l'atelier mobile, je monte la roue de secours ou je pose du neuf, et la voiture repart roulante.",
      "Sur les rampes qui montent vers les coteaux, un pneu déjà usé lâche au plus mauvais moment, et le froid de la boucle de Seine achève les batteries fatiguées près du cirque-théâtre ou de la Fabrique des savoirs. Pas besoin de gagner un garage à l'autre bout de la métropole : l'atelier vient à vous, devant chez vous ou sur le bas-côté de la D7. Un train de gomme abîmé se remplace par paire sur le même essieu, jamais à l'unité, pour garder une tenue de route franche. Batterie testée, pneus posés, contrôle rapide, et vous reprenez la route d'Elbeuf sans plateau ni attente.",
    ],
    internalLinks: "<a href=\"/services/crevaison-reparation\">réparer une crevaison</a> à Elbeuf, poser un <a href=\"/services/changement-pneu-domicile\">pneu neuf à domicile</a> ou intervenir sur les communes voisines comme <a href=\"/saint-etienne-du-rouvray\">Saint-Étienne-du-Rouvray</a> et <a href=\"/oissel\">Oissel</a>, l'atelier mobile couvre tout le sud de l'agglo.",
  },
];

export const EPCI_LABEL: Record<EpciSlug, string> = {
  'metropole-rouen-normandie': 'Métropole Rouen Normandie',
};
