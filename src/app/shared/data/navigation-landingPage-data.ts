export interface NavLandingItem{
    name: string;
    link: string;
    img: string;    
}

export const NAVIGATION_LANDINGPAGE = [
    {
      name: 'Nos Créations',
      link: '/ourCreations',
      img: 'assets/images/arche.jpg',
    },
    { name: 'Mariage', link: '/weddings', img: '/assets/images/centreTable.jpg' },
    { name: 'Deuil', link: '/mourning', img: '/assets/images/couronne.jpg' },
    { name: 'Entreprise', link: '/company', img: '/assets/images/bouquetMesure.jpg' },
    { name: 'Ateliers', link: '/workshops', img: '/assets/images/atelier.jpg' },
    { name: 'Événements', link: '/events', img: '/assets/images/event.jpg' },
  ];