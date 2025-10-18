import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  template: `
    <section class="space-y-20 py-20 ">
       <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-5xl md:text-7xl font-heading tracking-tight mb-6">
          Événements de l’année
        </h2>
        <p class="text-base italic max-w-2xl mx-auto">
          Pour chaque moment fort de l’année, Audace Florale vous accompagne avec des compositions sur mesure.
        </p>
      </div>
      @for (event of events(); track $index) {
        <div
          class="relative h-[600px] flex items-center justify-center text-center px-4"
          [style]="{
            'background-image': 'url(' + event.image + ')',
            'background-size': 'cover',
            'background-position': 'center'
          }"
        >
          
          <div class="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

         
          <div class="relative z-10 max-w-3xl text-white">
            <h2 class="text-4xl md:text-5xl font-heading mb-4">{{ event.title }}</h2>
            <p class="italic text-sm md:text-base mb-6">{{ event.description }}</p>
            <a
            
              class="cursor-pointer inline-block bg-white text-rose-400 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
            >
              {{ event.cta }}
            </a>
          </div>
        </div>
      }
    </section>
  `,
  styles: ``
})
export class EventsComponent {

events = signal([
    {
      title: 'Décorations de Noël',
      description: `Vitrines, halls d’accueil, sapins… nous créons l’enchantement floral pour les entreprises comme les particuliers.`,
      image: 'assets/images/events/decorationAudace.JPG',
      cta: 'Demander un devis entreprise',
      link: '/contact',
    },
    {
      title: 'Saint-Valentin',
      description: `Des créations florales qui parlent au cœur. Livraison en entreprise ou à domicile.`,
      image: 'assets/images/events/valentin.heic',
      cta: 'Voir nos bouquets romantiques',
      link: '/galerie?theme=amour',
    },
    {
      title: 'Fête des mères',
      description: `Une touche florale unique pour dire "je t’aime". Offrez-lui l’émotion en fleurs.`,
      image: 'assets/images/events/fetedesmeres.heic',
      cta: 'Découvrir les bouquets',
      link: '/galerie?theme=meres',
    },
    {
      title: 'Toussaint & Commémorations',
      description: `Des compositions sobres et élégantes pour honorer la mémoire de vos proches.`,
      image: 'assets/images/events/canddle.jpg',
      cta: 'Voir les compositions',
      link: '/deuil',
    },
  ]);
}