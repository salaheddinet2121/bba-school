export interface BeautyFormation {
  title: string;
  category: string;
  price: string;
  note?: string;
  image: string;
}

const imageByCategory: Record<string, string> = {
  Visage: '/formation/beauty-visage.png',
  Sourire: '/formation/beauty-tech.png',
  Regard: '/formation/beauty-regard.png',
  Massage: '/formation/beauty-bienetre.png',
  Corps: '/formation/beauty-bienetre.png',
  Épilation: '/formation/beauty-tech.png',
  Teint: '/formation/beauty-tech.png',
  Laser: '/formation/beauty-tech.png',
  Ongles: '/formation/beauty-ongles.png',
  Pigmentation: '/formation/beauty-pigmentation.png',
  'Bien-être': '/formation/beauty-bienetre.png',
};

export const beautyFormations: BeautyFormation[] = [
  { title: 'Soin du visage', category: 'Visage', price: '600€', note: 'Kit offert', image: imageByCategory.Visage },
  { title: 'Plasma pen', category: 'Visage', price: '700€', note: 'Kit offert', image: imageByCategory.Visage },
  { title: 'Carbon peel', category: 'Visage', price: '1300€', note: 'Kit offert', image: imageByCategory.Visage },
  { title: 'Dermaplaning', category: 'Visage', price: '600€', note: 'Kit offert', image: imageByCategory.Visage },
  { title: 'Nanoneedling', category: 'Visage', price: '700€', note: 'Kit offert', image: imageByCategory.Visage },
  { title: 'Hydrofacial', category: 'Visage', price: '1100€', note: 'Kit offert', image: imageByCategory.Visage },
  { title: 'Peeling aux algues', category: 'Visage', price: '900€', note: 'Kit offert', image: imageByCategory.Visage },
  { title: 'Lifting coréen', category: 'Visage', price: '800€', note: 'Kit offert', image: imageByCategory.Visage },
  { title: 'Strass dentaire', category: 'Sourire', price: '700€', note: 'Kit offert', image: imageByCategory.Sourire },
  { title: 'Blanchiment dentaire américaine', category: 'Sourire', price: '750€', image: imageByCategory.Sourire },
  { title: 'Extension de cils simple', category: 'Regard', price: '600€', note: 'Kit offert', image: imageByCategory.Regard },
  { title: 'Extension de cils volume russe', category: 'Regard', price: '650€', note: 'Kit offert', image: imageByCategory.Regard },
  { title: 'Rehaussement / Lashbotox', category: 'Regard', price: '600€', note: 'Kit offert', image: imageByCategory.Regard },
  { title: 'Brow lift', category: 'Regard', price: '600€', note: 'Kit offert', image: imageByCategory.Regard },
  { title: 'Halal brow', category: 'Regard', price: '650€', note: 'Kit offert', image: imageByCategory.Regard },
  { title: 'Massages aux pierres chaudes', category: 'Massage', price: '800€', note: 'Kit offert', image: imageByCategory.Massage },
  { title: 'Massage californien', category: 'Massage', price: '800€', note: 'Kit offert', image: imageByCategory.Massage },
  { title: 'Massage suédois', category: 'Massage', price: '800€', note: 'Kit offert', image: imageByCategory.Massage },
  { title: 'Kodebo', category: 'Massage', price: '800€', image: imageByCategory.Massage },
  { title: 'Madérothérapie bois', category: 'Corps', price: '950€', image: imageByCategory.Corps },
  { title: 'Drainage lymphatique', category: 'Corps', price: '950€', image: imageByCategory.Corps },
  { title: 'Lipocavitation radiofréquence', category: 'Corps', price: '900€', note: 'Kit offert', image: imageByCategory.Corps },
  { title: 'Lifting colombien', category: 'Corps', price: '700€', note: 'Kit offert', image: imageByCategory.Corps },
  { title: 'Yesothérapie', category: 'Corps', price: '600€', note: 'Kit offert', image: imageByCategory.Corps },
  { title: 'EMS', category: 'Corps', price: '800€', image: imageByCategory.Corps },
  { title: 'Cryolipolyse', category: 'Corps', price: '700€', image: imageByCategory.Corps },
  { title: 'Épilation traditionnelle', category: 'Épilation', price: '900€', note: 'Kit offert', image: imageByCategory.Épilation },
  { title: 'Épilation définitive', category: 'Épilation', price: '800€', image: imageByCategory.Épilation },
  { title: 'Spray tan', category: 'Teint', price: '950€', note: 'Kit offert', image: imageByCategory.Teint },
  { title: 'Blanchiment intime laser', category: 'Laser', price: '1000€', image: imageByCategory.Laser },
  { title: 'Manucure russe', category: 'Ongles', price: '600€', image: imageByCategory.Ongles },
  { title: 'Vernis semi-permanent', category: 'Ongles', price: '600€', image: imageByCategory.Ongles },
  { title: 'Gel X', category: 'Ongles', price: '600€', image: imageByCategory.Ongles },
  { title: 'Ombre brows', category: 'Pigmentation', price: '950€', note: 'Machine offerte', image: imageByCategory.Pigmentation },
  { title: 'Microblading', category: 'Pigmentation', price: '950€', note: 'Kit offert', image: imageByCategory.Pigmentation },
  { title: 'Powder lips', category: 'Pigmentation', price: '950€', note: 'Kit offert', image: imageByCategory.Pigmentation },
  { title: 'Détatouage laser', category: 'Laser', price: '850€', image: imageByCategory.Laser },
  { title: 'Taches de rousseurs', category: 'Pigmentation', price: '750€', note: 'Kit offert', image: imageByCategory.Pigmentation },
  { title: 'Hijama', category: 'Bien-être', price: '950€', image: imageByCategory['Bien-être'] },
];

export const featuredBeautyFormations = beautyFormations.slice(0, 6);
