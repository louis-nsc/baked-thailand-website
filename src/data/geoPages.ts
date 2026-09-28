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
      "Baked ships our Thai FDA-approved microdose cookies and caramels straight to Bangkok — hotel or home, free delivery on orders 1,000 THB+, Cash on Delivery available.",
    localStockists: ['KQ Dispensary'],
  },
  {
    slug: 'thc-edibles-chiang-mai',
    city: 'Chiang Mai',
    h1: 'Cannabis Edibles Made in Chiang Mai — Delivered Across Thailand',
    title: 'Cannabis Edibles Chiang Mai — Locally Made, FDA-Approved | Baked',
    description:
      "Baked Brand is made in Chiang Mai — Thai FDA-approved THC microdose cookies and caramels, sourced exclusively from Maejo University. Order for delivery.",
    intro:
      "Chiang Mai isn't just a delivery destination for Baked — it's where every cookie and caramel 