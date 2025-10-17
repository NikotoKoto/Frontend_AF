import { Component } from '@angular/core';

@Component({
  selector: 'app-delivery',
  imports: [],
  template: `
     <section class="max-w-6xl mx-auto px-6 ">
    <div class=" p-6 md:p-8">
      
        <h3 class="flex justify-center items-center gap-2  px-4 py-2  text-4xl md:text-6xl xl:text-8xl font-heading  mb-4">
         - Livraison 100% garantie -
        </h3>
        <div class="mt-6 flex items-center justify-center">
      <span class="inline-block h-[1px] w-24 bg-rose-400"></span>
    </div>

        <p class="mt-6 text-sm text-center md:text-base italic leading-relaxed md:ml-2">
          Vous avez choisi un bouquet de saison, confectionné par nos passionnés fleuristes.<br class="hidden md:block">
          Audace Florale livre des bouquets de fleurs dans le secteur proche de son enseigne, mais afin de vous garantir une
          livraison parfaite, nous avons besoin d’un maximum d’informations.<br class="hidden md:block">
          Nos livrés sont toujours contactés avant la livraison, afin que nous soyons sûr de leur présence et de trouver une
          solution si ces derniers ne peuvent pas.
        </p>
      </div>
   
  </section>
  `,
  styles: ``
})
export class DeliveryComponent {

}
