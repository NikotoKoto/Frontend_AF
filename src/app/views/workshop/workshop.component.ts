import { Component, signal } from '@angular/core';

type AtelierArticle = {
  title: string;
  description: string;
  image: string;
  slug: string;
};

@Component({
  selector: 'app-workshop',
  standalone: true,
  template: `
    <section class="py-20 px-6">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-5xl md:text-7xl font-heading tracking-tight mb-6">
          L ’Atelier
        </h2>
        <p class="text-base italic max-w-2xl mx-auto">
          Conseils, inspirations et astuces de fleuriste. Bienvenue dans l’atelier Audace Florale.
        </p>
      </div>

      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        @for (article of articles(); track $index) {
          <div class="rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
            <img [src]="article.image" [alt]="article.title" class="w-full h-[250px] object-cover" />
            <div class="p-4">
              <h3 class="text-xl font-heading mb-2">{{ article.title }}</h3>
              <p class="text-sm text-gray-600 mb-4">{{ article.description }}</p>
              <a  class="text-rose-500 hover:underline text-sm">Lire la suite →</a>
            </div>
          </div>
        }
      </div>
    </section>
  `,
})
export class WorkShop {
  articles = signal<AtelierArticle[]>([
    {
      title: 'Comment entretenir son bouquet ?',
      description: 'Découvrez nos astuces pour faire durer la beauté de vos fleurs le plus longtemps possible.',
      image: 'assets/images/atelier/bouquet-entretien.jpg',
      slug: 'entretenir-bouquet',
    },
    {
      title: 'Créer une couronne florale DIY',
      description: 'Un atelier simple pour fabriquer vous-même une jolie couronne de fleurs fraîches.',
      image: 'assets/images/atelier/couronne-diy.jpg',
      slug: 'couronne-fleur-diy',
    },
    {
      title: 'Quelle fleur pour quel message ?',
      description: 'Chaque fleur a une signification. Découvrez comment faire passer vos émotions avec le bon choix.',
      image: 'assets/images/atelier/langage-fleurs.jpg',
      slug: 'signification-fleurs',
    },
  ]);
}