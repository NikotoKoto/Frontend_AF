import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [NgFor, NgClass],
  template: `
<section class="py-20 bg-gradient-to-b from-gray-100 from-0% via-gray-100 via-[98%] to-white to-100% ">
  <div class="max-w-6xl mx-auto px-6 text-center">
    <h2 class="text-3xl md:text-5xl font-heading tracking-tight text-gray-900 uppercase">
      À propos de nous
    </h2>
    <div class="mt-6 flex items-center justify-center">
      <span class="inline-block h-[2px] w-24 bg-gray-600"></span>
    </div>
    <p class="mt-6 text-gray-600 max-w-3xl mx-auto font-body italic">
      L’audace des fleurs, l’élégance des émotions.
    </p>
  </div>

  <div class="mt-16 max-w-6xl mx-auto px-6 space-y-20">
    @for (item of aboutUsText; let i = $index; track i) {
      <article class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <!-- Image (static, but alternates position) -->
        <div class="relative" [ngClass]="{ 'order-2 md:order-1': i % 2 === 1 }">
          <div class="absolute -inset-2 rounded-2xl bg-gray-600/20 blur-lg"></div>
          <img
            [src]="item.images"
            [alt]="item.alt"
            class="relative rounded-2xl shadow-xl w-full h-80 object-cover"
          />
        </div>

        <!-- Text (animated, alternates direction) -->
        <div
          class="font-body text-gray-700 leading-relaxed"
          [ngClass]="i % 2 === 0 ? 'animate-float-r' : 'animate-float-l'"
        >
          <h3 class="font-heading text-2xl md:text-3xl text-gray-900 mb-4">
            {{ item.title }}
          </h3>
          <p class="text-lg text-justify">{{ item.text }}</p>
          <div class="mt-6 pl-4 border-l-4 border-gray-600">
            <p class="italic text-gray-800">
              {{ item.quote}}
            </p>
          </div>
        </div>
      </article>
    }

    <!-- CTA centered (move like the text; pick one class) -->
    <div class="flex items-center justify-center mt-8">
      <a
        href="#contact"
        class="inline-flex items-center gap-2 rounded-full bg-gray-600 px-6 py-3 text-white shadow-lg hover:bg-gray-500 transition animate-float-l"
      >
        Nous contacter
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5-5 5M19 12H6"/>
        </svg>
      </a>
    </div>
  </div>
</section>
  `,
})
export class AboutUsComponent {
  aboutUsText = [
    {
      title: 'L’audace florale',
      text: `Bienvenue chez Audace Florale, votre destination de choix pour des créations florales uniques et audacieuses. Fondée par Yann Lefebvre, notre maison transforme chaque occasion en un moment inoubliable.`,
      images: 'assets/images/yann.jpg',
      class:"font-body text-gray-700 leading-relaxed animate-float-r-reverse animate-float-r",
      alt: 'Créations florales audacieuses',
      quote: 'Chaque bouquet raconte une histoire singulière.'
    },
    {
      title: 'Créativité & saisonnalité',
      text: `Nous travaillons des fleurs fraîches et de saison pour composer des arrangements qui captivent et inspirent — mariages, entreprises ou simples attentions du quotidien.`,
      images: 'assets/images/bouquetCreativite.jpg',
      class:"font-body text-gray-700 leading-relaxed animate-float-l-reverse animate-float-l",
      alt: 'Bouquet de saison',
      quote: 'La nature comme muse, l’élégance comme signature.'
    },
    {
      title: 'Sur-mesure & accompagnement',
      text: `Nous co-créons avec vous : couleurs, textures et styles au service de votre personnalité et de l’essence de l’événement.`,
      images: 'assets/images/bouquetMesure.jpg',
      class:"font-body text-gray-700 leading-relaxed animate-float-l-reverse animate-float-l",
      alt: 'Décoration florale sur-mesure',
      quote: 'Un accompagnement délicat, du croquis au dernier pétale.'
    },
  ];
}