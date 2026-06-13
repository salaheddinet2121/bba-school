export interface BeautyFormation {
  title: string;
  category: string;
  price: string;
  note?: string;
  image: string;
}

const images = [
  '/formation/formation-pratique-hygiene-securite-alimentaire.webp',
  '/formation/ia-formation.webp',
  '/formation/ia-generative.webp',
  '/formation/techniques-base-restauration.webp',
  '/formation/capa.webp',
  '/formation/deploying-ia.webp',
];

export const beautyFormations: BeautyFormation[] = [
  { title: 'Soin du visage', category: 'Visage', price: '500€', note: 'Kit offert', image: images[0] },
  { title: 'Plasma pen', category: 'Visage', price: '700€', note: 'Kit offert', image: images[1] },
  { title: 'Carbon peel', category: 'Visage', price: '1300€', note: 'Kit offert', image: images[2] },
  { title: 'Dermaplaning', category: 'Visage', price: '500€', note: 'Kit offert', image: images[3] },
  { title: 'Nanoneedling', category: 'Visage', price: '700€', note: 'Kit offert', image: images[4] },
  { title: 'Hydrofacial', category: 'Visage', price: '1100€', note: 'Kit offert', image: images[5] },
  { title: 'Peeling aux algues', category: 'Visage', price: '900€', note: 'Kit offert', image: images[0] },
  { title: 'Lifting coréen', category: 'Visage', price: '800€', note: 'Kit offert', image: images[1] },
  { title: 'Strass dentaire', category: 'Sourire', price: '700€', note: 'Kit offert', image: images[2] },
  { title: 'Blanchiment dentaire américaine', category: 'Sourire', price: '750€', image: images[3] },
  { title: 'Extension de cils simple', category: 'Regard', price: '600€', note: 'Kit offert', image: images[4] },
  { title: 'Extension de cils volume russe', category: 'Regard', price: '650€', note: 'Kit offert', image: images[5] },
  { title: 'Rehaussement / Lashbotox', category: 'Regard', price: '600€', note: 'Kit offert', image: images[0] },
  { title: 'Brow lift', category: 'Regard', price: '600€', note: 'Kit offert', image: images[1] },
  { title: 'Halal brow', category: 'Regard', price: '650€', note: 'Kit offert', image: images[2] },
  { title: 'Massages aux pierres chaudes', category: 'Massage', price: '800€', note: 'Kit offert', image: images[3] },
  { title: 'Massage californien', category: 'Massage', price: '800€', note: 'Kit offert', image: images[4] },
  { title: 'Massage suédois', category: 'Massage', price: '800€', note: 'Kit offert', image: images[5] },
  { title: 'Kodebo', category: 'Massage', price: '800€', image: images[0] },
  { title: 'Madérothérapie bois', category: 'Corps', price: '950€', image: images[1] },
  { title: 'Drainage lymphatique', category: 'Corps', price: '950€', image: images[2] },
  { title: 'Lipocavitation radiofréquence', category: 'Corps', price: '900€', note: 'Kit offert', image: images[3] },
  { title: 'Lifting colombien', category: 'Corps', price: '700€', note: 'Kit offert', image: images[4] },
  { title: 'Yesothérapie', category: 'Corps', price: '600€', note: 'Kit offert', image: images[5] },
  { title: 'EMS', category: 'Corps', price: '800€', image: images[0] },
  { title: 'Cryolipolyse', category: 'Corps', price: '700€', image: images[1] },
  { title: 'Épilation traditionnelle', category: 'Épilation', price: '900€', note: 'Kit offert', image: images[2] },
  { title: 'Épilation définitive', category: 'Épilation', price: '800€', image: images[3] },
  { title: 'Spray tan', category: 'Teint', price: '950€', note: 'Kit offert', image: images[4] },
  { title: 'Blanchiment intime laser', category: 'Laser', price: '1000€', image: images[5] },
  { title: 'Manucure russe', category: 'Ongles', price: '600€', image: images[0] },
  { title: 'Vernis semi-permanent', category: 'Ongles', price: '500€', image: images[1] },
  { title: 'Gel X', category: 'Ongles', price: '600€', image: images[2] },
  { title: 'Ombre brows', category: 'Pigmentation', price: '950€', note: 'Machine offerte', image: images[3] },
  { title: 'Microblading', category: 'Pigmentation', price: '950€', note: 'Kit offert', image: images[4] },
  { title: 'Powder lips', category: 'Pigmentation', price: '950€', note: 'Kit offert', image: images[5] },
  { title: 'Détatouage laser', category: 'Laser', price: '850€', image: images[0] },
  { title: 'Taches de rousseurs', category: 'Pigmentation', price: '750€', note: 'Kit offert', image: images[1] },
  { title: 'Hijama', category: 'Bien-être', price: '950€', image: images[2] },
];

export const featuredBeautyFormations = beautyFormations.slice(0, 6);
