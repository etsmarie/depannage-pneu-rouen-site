export const NAP = {
  name: 'Lucas Dépannage Pneu Rouen',
  shortName: 'Lucas Dépannage Pneu Rouen',
  legalEntity: 'ETS MARIE SARL',
  legalSiren: '928 758 382',
  phoneDisplay: '02 79 58 00 71',
  phoneE164: '+33279580071',
  hours: '24/7',
  hoursLabel: 'Ouvert 24h/24, 7j/7',
  /** Service 100 % mobile : pas d'adresse d'atelier ouverte au public. */
  city: 'Rouen',
  postalCode: '76000',
  area: 'Rouen et toute la Seine-Maritime (76)',
  serviceArea: {
    type: 'AdministrativeArea',
    name: 'Seine-Maritime',
    code: '76',
  },
  geo: {
    lat: 49.4432,
    lng: 1.0999,
  },
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Lucas+D%C3%A9pannage+Pneu+Rouen',
  domain: 'depannage-pneu-rouen.fr',
  baseUrl: 'https://depannage-pneu-rouen.fr',
  emailObfuscated: 'contact[at]depannage-pneu-rouen[dot]fr',
} as const;
