import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { WEDDING_DATA, WeddingImage } from './shared/datas/wedding-data';


@Component({
  selector: 'app-wedding',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <section class="flex flex-col items-center py-20 px-6">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-6xl md:text-9xl font-heading tracking-tight">Mariages</h2>
        <div class="mt-6 flex items-center justify-center">
          <span class="inline-block bg-rose-400 h-[1px] w-24"></span>
        </div>
        <p class="mt-6 max-w-3xl mx-auto text-sm font-body italic">
          Le mariage est l’un des moments les plus précieux de la vie. Les fleurs subliment la cérémonie, magnifient la réception et apportent une touche d’émotion à cet événement unique.
        </p>
      </div>

      @for(section of sections; track $index) {
        <div class="max-w-4xl mx-auto text-center px-6 mt-20">
          <h4 class="text-4xl font-heading">{{ section.title }}</h4>
          <p class="text-sm italic mt-2">{{ section.description }}</p>
        </div>

        <!-- Carrousel infini -->
        <div class="max-w-screen-xl mx-auto px-4 overflow-hidden py-8">
          <div class="flex gap-6 animate-scroll whitespace-nowrap">
            @for(item of section.slides; track $index) {
              <div
                class="relative w-[300px] h-[300px] flex-shrink-0 overflow-hidden  shadow-md transition-transform duration-500 hover:scale-105 opacity-0 animate-fade-in"
              >
                <img
                  [src]="item.imageUrl"
                  [alt]="item.title"
                  class="w-full h-full object-cover"
                />
              </div>
            }
          </div>
        </div>
      }

      <app-button label="Prendre rendez-vous" class="mt-10" />
    </section>
  `,
  styles: [`
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .animate-scroll {
      animation: scroll 60s linear infinite;
    }

    @keyframes fade-in {
      0% { opacity: 0; transform: scale(0.95); }
      100% { opacity: 1; transform: scale(1); }
    }

    .animate-fade-in {
      animation: fade-in 1s ease forwards;
    }
    @keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}

.start-hidden {
  opacity: 0;
  transform: translateY(50px);
}
  `]
})
export class WeddingComponent {
  slides : WeddingImage[] = WEDDING_DATA.place;
  slidesLaique : WeddingImage[] = WEDDING_DATA.ceremonyLaic;
  slidesReligious : WeddingImage[] = WEDDING_DATA.ceremonyReligious;
  slidesAccessory : WeddingImage[] = WEDDING_DATA.accessory;

  get duplicatedSlides() {
    return [...this.slides, ...this.slides];
  }
  get duplicatedSlidesLaique() {
    return [...this.slidesLaique, ...this.slidesLaique];
  }
  get duplicatedSlidesReligious() {
    return [...this.slidesReligious, ...this.slidesReligious];
  }
  get duplicatedSlidesAccessory() {
    return [...this.slidesAccessory, ...this.slidesAccessory];
  }

  sections = [
    {
      title: 'Lieux de réception',
      description: 'Chaque lieu a une âme… et nos fleurs viennent la révéler. Créez un décor qui émerveille vos invités dès les premiers instants.',
      slides: this.duplicatedSlides,
    },
    {
      title: 'Cérémonies laïques',
      description: 'Des arches florales majestueuses aux allées parsemées de pétales, chaque détail floral est pensé pour sublimer votre engagement.',
      slides: this.duplicatedSlidesLaique,
    },
    {
      title: 'Cérémonies religieuses',
      description: 'Nos compositions florales respectent les traditions tout en apportant une touche de beauté naturelle.',
      slides: this.duplicatedSlidesReligious,
    },
    {
      title: 'Accessoires de mariage',
      description: 'Des bouquets de mariée aux boutonnières, chaque accessoire floral reflète votre style et votre personnalité.',
      slides: this.duplicatedSlidesAccessory,
    },
  ];
}