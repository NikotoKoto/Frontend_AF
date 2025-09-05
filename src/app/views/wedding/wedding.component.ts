import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-wedding',
  standalone: true,
  imports: [],
  template: `
    <section class=" py-40 bg-gradient-to-b 
  from-gray-400 
  from-0% 
  via-gray-100 
  via-98% 
  to-white
  to-100% ">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2
          class="text-6xl md:text-9xl text-gray-900 font-heading tracking-tight "
        >
          Mariages
        </h2>
        <div class="mt-6 flex items-center justify-center">
          <span class="inline-block bg-rose-400 h-[2px] w-24"></span>
        </div>
        <p class="mt-6 max-w-3xl mx-auto text-gray-600 text-center font-body italic">
          Le mariage est l’un des moments les plus précieux de la vie, un jour
          où chaque détail compte pour créer une atmosphère féerique et
          inoubliable. Parmi ces éléments essentiels, les fleurs jouent un rôle
          primordial: elles subliment la cérémonie, magnifient la réception et
          apportent une touche d’émotion et de poésie à cet événement si
          spécial.
        </p>
      </div>
      
      <div>
   
      </div>
    </section>
  `,
})
export class WeddingComponent {
  slides = [
    {
      title: 'Bouquet de mariée',
      subtitle: 'Roses & pivoines',
      price: '120€',
      src: 'assets/images/bouquet1.heic',
    },
    {
      title: 'Couronne florale',
      subtitle: 'Gypsophile & eucalyptus',
      price: '45€',
      src: 'assets/images/couronne.jpg',
    },
    {
      title: 'Centre de table',
      subtitle: 'Palette pastel',
      price: '80€',
      src: 'assets/images/centreTable.jpg',
    },
    {
      title: 'Boutonnière',
      subtitle: 'Élégance minimaliste',
      price: '20€',
      src: 'assets/images/mariage-boutonnieres-fleurs-mariee.jpg',
    },
    {
      title: 'Arche florale',
      subtitle: 'Cérémonie',
      price: 'À partir de 350€',
      src: 'assets/images/arche.jpg',
    },
  ];
}
