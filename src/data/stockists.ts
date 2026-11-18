export interface Stockist {
  name: string;
  city: string;
  photo: string;
  note?: string;
}

export const stockists: Stockist[] = [
  {
    name: 'Various Cafes',
    city: 'Chiang Mai',
    photo: '/images/logo-color.png',
    note: 'Ask at reception',
  },
  {
    name: 'Select Dispensaries',
    city: 'Bangkok',
    photo: '/images/logo-color.png',
    note: 'Thai FDA approved',
  },
  {
    name: 'Boutique Hotels',
    city: 'Phuket',
    photo: '/images/logo-color.png',
    note: 'Available at the bar',
  },
];
