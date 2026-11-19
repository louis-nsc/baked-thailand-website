export interface Stockist {
  name: string;
  city: string;
  photo: string;
  note?: string;
}

export const stockists: Stockist[] = [
  {
    name: 'Eve Pharmacy',
    city: 'Chiang Mai',
    photo: '/images/logo-color.png',
    note: 'Ask for Baked Brand at the counter',
  },
  {
    name: 'Siam Green Cannabis Co',
    city: 'Chiang Mai',
    photo: '/images/logo-color.png',
    note: 'Multiple locations',
  },
  {
    name: 'The Spot Cannabis Dispensary',
    city: 'Chiang Mai',
    photo: '/images/logo-color.png',
  },
  {
    name: 'Flying Tiger Cannabis Dispensary',
    city: 'Chiang Mai',
    photo: '/images/logo-color.png',
  },
  {
    name: 'Leafers',
    city: 'Chiang Mai',
    photo: '/images/logo-color.png',
  },
  {
    name: 'Cher Shop',
    city: 'Chiang Mai',
    photo: '/images/logo-color.png',
  },
];
