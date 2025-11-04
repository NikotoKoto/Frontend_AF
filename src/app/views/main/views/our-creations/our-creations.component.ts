import { Component } from '@angular/core';
import { CREATIONS_DATA } from './shared/creation-data';

@Component({
  selector: 'app-our-creations',
  standalone: true,
  template: `
<section class="max-w-6xl mx-auto px-4 py-10 mt-20">
  <h2 class="text-6xl md:text-9xl font-heading tracking-tight   text-center mb-6">
    Nos créations
  </h2>  
   <div class="mt-6 flex items-center justify-center">
      <span class="inline-block h-[1px] w-24 bg-rose-400"></span>
    </div>
    <p class="mt-6  max-w-3xl mx-auto font-body text-center italic">
      Explorez notre galerie de créations florales, où chaque arrangement raconte une histoire d'élégance et de passion.
    </p>   
  <div class="mt-20 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3">
    @for (item of creations; track item.imageUrl) {
      <!-- Card -->
      <figure class="group relative mb-3 break-inside-avoid overflow-hidden">
        <img
          [src]="item.imageUrl"
          [alt]="item.title"
          class="block w-full h-auto cursor-pointer transform transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </figure>
    }
  </div>
</section>
  `,
})
export class OurCreationsComponent {
 creations = CREATIONS_DATA;
}