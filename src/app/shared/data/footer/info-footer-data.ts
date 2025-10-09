export interface FooterSection {
  title: string;
  items: { label: string; link?: string }[];
}

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Adresse',
    items: [
      { label: 'Audace Florale' },
      { label: '14 place Omer Vallon' },
      { label: '60000 Chantilly' }
    ]
  },
  {
    title: 'Horaires',
    items: [
      { label: 'Mar–Sam: 9:00–19:00' },
      { label: 'Dim: 10:00–13:00' },
      { label: 'Tél: 01 23 45 67 89' }
    ]
  },
  {
    title: 'Informations',
    items: [
      { label: 'Mentions légales', link: '/mentions' },
      { label: 'Politique de confidentialité', link: '/privacy' },
      { label: 'Conditions générales', link: '/cgv' },
    
    ]
  }
];