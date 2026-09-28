export interface PressMention {
  name: string;
  url: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  /** Transparent-background logo mark dark enough to disappear against the dark-mode page background. */
  invertOnDark?: boolean;
}

export const featuredIn: PressMention[] = [
  { name: 'Forbes', url: 'https://www.forbes.com/sites/benjaminadams/2023/05/31/baked-thailand-enters-southeast-asian-market-with-fda-approval/', logo: '/press/forbes.png', logoWidth: 1024, logoHeight: 576, invertOnDark: true },
  { name: 'Honeysuckle Magazine', url: 'https://honeysucklemag.com/baked-thailand-fda-approved-cannabis-cookies/', logo: '/press/honeysuckle.png', logoWidth: 1024, logoHeight: 340, invertOnDark: true },
  { name: 'Travel Lemming', url: 'https://travellemming.com/solo-travel-in-thailand/', logo: '/press/travellemming.png', logoWidth: 804, logoHeight: 354 },
  { name: 'CityNow (Chiang Mai CityLife)', url: 'https://www.chiangmaicitylife.com/citynow/social-life/live-events/shady-acres-at-the-house-by-ginger/', logo: '/press/citynow.png', logoWidth: 423, logoHeight: 145 },
  { name: 'Alpacannabis', url: 'https://alpacannabis.com/', logo: '/press/alpacannabis.png', logoWidth: 1024, logoHeight: 305, invertOnDark: true },
];
