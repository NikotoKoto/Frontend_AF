export interface AboutUsItem {
  title: string;
  text: string;
  images: string;
  alt: string;
  quote: string;
}

export const ABOUT_US_DATA: AboutUsItem[] = [
  {
    title: 'L’audace florale',
    text: `Bienvenue chez Audace Florale, votre destination de choix pour des créations florales uniques et audacieuses. Fondée par Yann Lefebvre, notre maison transforme chaque occasion en un moment inoubliable.`,
    images: 'assets/images/yann.jpg',
    alt: 'Créations florales audacieuses',
    quote: 'Chaque bouquet raconte une histoire singulière.'
  },
  {
    title: 'Créativité & saisonnalité',
    text: `Nous travaillons des fleurs fraîches et de saison pour composer des arrangements qui captivent et inspirent — mariages, entreprises ou simples attentions du quotidien.`,
    images: 'assets/images/bouquetCreativite.jpg',
    alt: 'Bouquet de saison',
    quote: 'La nature comme muse, l’élégance comme signature.'
  },
  {
    title: 'Sur-mesure & accompagnement',
    text: `Nous co-créons avec vous : couleurs, textures et styles au service de votre personnalité et de l’essence de l’événement.`,
    images: 'assets/images/bouquetMesure.jpg',
    alt: 'Décoration florale sur-mesure',
    quote: 'Un accompagnement délicat, du croquis au dernier pétale.'
  },
];