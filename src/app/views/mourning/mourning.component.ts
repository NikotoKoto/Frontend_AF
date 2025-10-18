import { Component } from '@angular/core';
import { MourningImage, MOURNING_DATA } from './shared/data/mourning-data';

@Component({
  selector: 'app-mourning',
  standalone: true,
  template: `
    <section class="py-20 px-6  ">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-5xl md:text-7xl font-heading tracking-tight mb-6">
          Deuils & Hommages
        </h2>
        <p class="text-base italic  max-w-2xl mx-auto">
          Parce que chaque geste compte, nos compositions florales rendent hommage avec pudeur et élégance à ceux qui nous ont quittés. Une touche de beauté pour accompagner vos pensées.
        </p>
      </div>

      <div class="space-y-16 mt-20 max-w-6xl mx-auto">
        @for (item of products; track $index) {
          <div class="flex flex-col md:flex-row items-center gap-10 group">
            <div class="w-full md:w-1/2 overflow-hidden  shadow-md  ">
              <img [src]="item.image" [alt]="item.alt" class="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-105"/>
            </div>
            <div class="w-full md:w-1/2">
              <h3 class="text-4xl  mb-4">{{ item.title }}</h3>
              <p class="text-gray-600 mb-4 text-sm italic">{{ item.descritpion }}</p>
            </div>
          </div>
        }
      </div>

      <div class="mt-20 text-center">
        <a routerLink="/contact" class="bg-rose-500 text-white px-6 py-3 rounded-md hover:bg-rose-600 transition">
          Être accompagné dans votre démarche
        </a>
      </div>
    </section>
  `,
})
export class MourningComponent {
  products: MourningImage[] = MOURNING_DATA;
}