export const business = {
  name: 'Baked Brand',
  legalName: 'Baked Brand Edibles in Thailand',
  url: 'https://bakedthailand.com',
  phoneDisplay: '062-252-7085',
  phoneE164: '+66622527085',
  address: {
    streetAddress: '179 Moo 16 T. Patan A. Sansai',
    addressLocality: 'Chiang Mai',
    postalCode: '50210',
    addressCountry: 'TH',
  },
  geo: { latitude: 18.8389, longitude: 99.0038 },
  priceRange: '฿฿',
  sameAs: [
    'https://www.instagram.com/baked.brand.edibles/',
    'https://page.line.me/baked',
  ],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Organization'],
  name: business.name,
  url: business.url,
  telephone: business.phoneE164,
  address: {
    '@type': 'PostalAddress',
    ...business.address,
  },
  geo: {
    '@type': 'GeoCoordinates',
    ...business.geo,
  },
  areaServed: { '@type': 'Country', name: 'Thailand' },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  priceRange: business.priceRange,
  sameAs: business.sameAs,
};
