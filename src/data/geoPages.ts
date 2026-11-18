export interface GeoPage {
  slug: string; // matches url-mapping.csv exactly - do not change
  city: string;
  h1?: string; // override the default "Cannabis Edibles in {city}" pattern
  title: string;
  description: string;
  intro: string;
  localStockists?: string[]; // names from data/stockists.ts, only if genuinely present in that city
}

export const geoPages: GeoPage[] = [
  {
    slug: 'cannabis-edibles-bangkok',
    city: 'Bangkok',
    h1: 'Cannabis Edibles Delivery Bangkok',
    title: 'Cannabis Edibles Bangkok Delivery | Baked Brand Thailand',
    description:
      "Baked Brand's Thai FDA-approved THC microdose cookies, delivered to your hotel or home in Bangkok. Free delivery on orders 1,000 THB+, Cash on Delivery available.",
    intro:
      "Baked ships our Thai FDA-approved microdose cookies and caramels straight to Bangkok -- hotel or home, free delivery on orders 1,000 THB+, Cash on Delivery available.",
    localStockists: ['KQ Dispensary'],
  },
  {
    slug: 'thc-edibles-chiang-mai',
    city: 'Chiang Mai',
    h1: 'Cannabis Edibles Made in Chiang Mai -- Delivered Across Thailand',
    title: 'Cannabis Edibles Chiang Mai -- Locally Made, FDA-Approved | Baked',
    description:
      "Baked Brand is made in Chiang Mai -- Thai FDA-approved THC microdose cookies and caramels, sourced exclusively from Maejo University. Order for delivery.",
    intro:
      "Chiang Mai is not just a delivery destination for Baked -- it's where every cookie and caramel is made. Our factory is here, our cannabis comes from Maejo University, and delivery across the city is same-day.",
    localStockists: ['Fuel Coffee', 'Mao Cafe', 'Rx Cafe'],
  },
  {
    slug: 'cannabis-edibles-phuket',
    city: 'Phuket',
    h1: 'Cannabis Edibles Phuket Delivery',
    title: 'Cannabis Edibles in Phuket | Thai FDA-Approved | Baked Brand',
    description:
      "Thai FDA-approved THC microdose cookies and caramels delivered to your hotel or villa in Phuket. Up to 1.6mg THC per piece, lab-tested.",
    intro:
      "Baked ships to Phuket -- Patong, Kata, Karon, and beyond. Thai FDA-approved microdose edibles delivered to your hotel or villa.",
  },
  {
    slug: 'cannabis-edibles-pattaya',
    city: 'Pattaya',
    h1: 'Cannabis Edibles Pattaya Delivery',
    title: 'Cannabis Edibles Pattaya | Thai FDA-Approved | Baked Brand',
    description:
      "Thai FDA-approved THC microdose cookies and caramels delivered to Pattaya. Up to 1.6mg THC per piece, legally sold to adults aged 20+.",
    intro:
      "Order Baked Brand to Pattaya -- hotel delivery, Cash on Delivery available. Thai FDA-approved microdose edibles, up to 1.6mg THC per piece.",
  },
  {
    slug: 'cannabis-edibles-koh-samui',
    city: 'Koh Samui',
    h1: 'Cannabis Edibles Koh Samui Delivery',
    title: 'Cannabis Edibles Koh Samui | Thai FDA-Approved | Baked Brand',
    description:
      "Thai FDA-approved THC microdose cookies and caramels delivered to Koh Samui. Up to 1.6mg THC per piece, lab-tested.",
    intro:
      "Baked ships to Koh Samui -- Chaweng, Lamai, Bophut, and other areas. Thai FDA-approved microdose edibles at your villa or hotel.",
  },
  {
    slug: 'cannabis-edibles-koh-phangan',
    city: 'Koh Phangan',
    h1: 'Cannabis Edibles Koh Phangan Delivery',
    title: 'Cannabis Edibles Koh Phangan | Thai FDA-Approved | Baked Brand',
    description:
      "Thai FDA-approved THC microdose edibles delivered to Koh Phangan. Up to 1.6mg THC per piece, legally sold to adults aged 20+.",
    intro:
      "Order Baked Brand to Koh Phangan. Thai FDA-approved microdose cookies and caramels, delivered island-wide.",
  },
  {
    slug: 'cannabis-edibles-koh-tao',
    city: 'Koh Tao',
    h1: 'Cannabis Edibles Koh Tao Delivery',
    title: 'Cannabis Edibles Koh Tao | Thai FDA-Approved | Baked Brand',
    description:
      "Thai FDA-approved THC microdose edibles delivered to Koh Tao. Up to 1.6mg THC per piece.",
    intro:
      "Order Baked Brand microdose edibles to Koh Tao. Thai FDA-approved, clearly labeled, delivered to your bungalow or hotel.",
  },
  {
    slug: 'buy-cannabis-edibles-krabi',
    city: 'Krabi',
    h1: 'Cannabis Edibles Krabi Delivery',
    title: 'Buy Cannabis Edibles in Krabi | Thai FDA-Approved | Baked Brand',
    description:
      "Thai FDA-approved THC microdose cookies and caramels delivered to Krabi. Up to 1.6mg THC per piece, lab-tested.",
    intro:
      "Order Baked Brand to Krabi -- Ao Nang, Railay, Koh Lanta area. Thai FDA-approved microdose edibles delivered to your hotel.",
  },
  {
    slug: 'cannabis-edibles-koh-lanta',
    city: 'Koh Lanta',
    h1: 'Cannabis Edibles Koh Lanta Delivery',
    title: 'Cannabis Edibles Koh Lanta | Thai FDA-Approved | Baked Brand',
    description:
      "Thai FDA-approved THC microdose edibles delivered to Koh Lanta. Up to 1.6mg THC per piece.",
    intro:
      "Baked Brand delivers to Koh Lanta. Thai FDA-approved microdose cookies and caramels, delivered to your resort or bungalow.",
  },
  {
    slug: 'cannabis-edibles-koh-phi-phi',
    city: 'Koh Phi Phi',
    h1: 'Cannabis Edibles Koh Phi Phi Delivery',
    title: 'Cannabis Edibles Koh Phi Phi | Thai FDA-Approved | Baked Brand',
    description:
      "Thai FDA-approved THC microdose edibles delivered to Koh Phi Phi. Up to 1.6mg THC per piece.",
    intro:
      "Order Baked Brand to Koh Phi Phi. Thai FDA-approved microdose cookies and caramels delivered to the island.",
  },
  {
    slug: 'cannabis-edibles-hua-hin',
    city: 'Hua Hin',
    h1: 'Cannabis Edibles Hua Hin Delivery',
    title: 'Cannabis Edibles Hua Hin | Thai FDA-Approved | Baked Brand',
    description:
      "Thai FDA-approved THC microdose edibles delivered to Hua Hin. Up to 1.6mg THC per piece.",
    intro:
      "Order Baked Brand to Hua Hin. Thai FDA-approved microdose cookies and caramels, delivered to your hotel or residence.",
  },
  {
    slug: 'cannabis-edibles-koh-chang',
    city: 'Koh Chang',
    h1: 'Cannabis Edibles Koh Chang Delivery',
    title: 'Cannabis Edibles Koh Chang | Thai FDA-Approved | Baked Brand',
    description:
      "Thai FDA-approved THC microdose edibles delivered to Koh Chang. Up to 1.6mg THC per piece.",
    intro:
      "Order Baked Brand to Koh Chang. Thai FDA-approved microdose cookies and caramels, delivered island-wide.",
  },
];
