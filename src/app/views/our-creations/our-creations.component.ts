import { Component } from '@angular/core';

@Component({
  selector: 'app-our-creations',
  standalone: true,
  template: `
<section class="max-w-6xl mx-auto px-4 py-10 mt-20">
  <h2 class="text-6xl md:text-9xl font-heading tracking-tight text-gray-900  text-center mb-6">
    Nos créations
  </h2>  
   <div class="mt-6 flex items-center justify-center">
      <span class="inline-block h-[2px] w-24 bg-rose-400"></span>
    </div>
    <p class="mt-6 text-gray-600 max-w-3xl mx-auto font-body text-center italic">
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
  creations = [
    { title: 'Création 1', imageUrl: 'assets/images/bouquet1.heic', prix: '50€' },
    { title: 'Création 2', imageUrl: 'assets/images/bouquet2.HEIC', prix: '75€' },
    { title: 'Création 3', imageUrl: 'assets/images/bouquet3.heic', prix: '100€' },
    { title: 'Création 4', imageUrl: 'assets/images/bouquet4.heic', prix: '120€' },
    { title: 'Création 5', imageUrl: 'assets/images/bouquet5.heic', prix: '150€' },
    { title: 'Création 6', imageUrl: 'assets/images/bouquet6.heic', prix: '200€' },
    { title: 'Création 7', imageUrl: 'assets/images/bouquet7.HEIC',   prix: '250€' },
    { title: 'Création 7', imageUrl: 'assets/images/bouquet8.HEIC', prix: '300€' },
    { title: 'Création 7', imageUrl: 'assets/images/bouquet9.heic', prix: '350€' },
    { title: 'Création 7', imageUrl: 'assets/images/bouquet10.HEIC',  prix: '400€' }, 
    { title: 'Création 7', imageUrl: 'assets/images/bouquet11.HEIC', prix: '450€' },
    { title: 'Création 7', imageUrl: 'assets/images/bouquet12.jpg', prix: '450€' },
    { title: 'Création 7', imageUrl: 'assets/images/bouquet13.jpg', prix: '450€' },
    { title: 'Création 7', imageUrl: 'assets/images/bouquet14.jpg', prix: '450€' },
    { title: 'Création 7', imageUrl: 'assets/images/bouquet15.jpg', prix: '450€' },
    { title: 'Création 7', imageUrl: 'assets/images/bouquet16.jpg', prix: '450€' },
    
  ];
}