import { NgClass ,NgFor} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [NgFor, NgClass],
  template: `
    <section class="pt-0 pb-20 bg-gradient-to-b from-gray-100 via-gray-100 to-white">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="pt-10 text-6xl md:text-9xl font-heading tracking-tight text-gray-900">
          Notre monde floral
        </h2>
        <div class="mt-6 flex items-center justify-center">
          <span class="inline-block h-[2px] w-24 bg-rose-400"></span>
        </div>
        <p class="mt-6 text-gray-600 max-w-3xl mx-auto font-body italic">
          L’audace des fleurs, l’élégance des émotions.
        </p>
      </div>

      <div class="mt-16 max-w-6xl mx-auto px-6 space-y-20">
        @for (item of aboutUsText; track $index) {
          <article class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            
            <div class="relative" [ngClass]="{ 'order-2 md:order-1': $index % 2 === 1 }">
              <div class="absolute -inset-2 rounded-2xl bg-gray-600/20 blur-lg"></div>
              <img [src]="item.images" [alt]="item.alt"
                   class="relative rounded-2xl shadow-xl w-full h-80 object-cover" />
            </div>

            
            <div class="font-body text-gray-700 leading-relaxed"
                 [ngClass]="$index % 2 === 0 ? 'animate-float-r' : 'animate-float-l'">
              <h3 class="font-heading text-2xl md:text-3xl text-gray-900 mb-4">
                {{ item.title }}
              </h3>
              <p class="text-lg text-justify">{{ item.text }}</p>
              <div class="mt-6 pl-4 border-l-4 border-rose-400">
                <p class="italic text-gray-800">{{ item.quote }}</p>
              </div>
            </div>
          </article>
        }

       
      </div>
    </section>
  `,
  styles: ``
})
export class AboutUsComponent {
  aboutUsText = [
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
}
