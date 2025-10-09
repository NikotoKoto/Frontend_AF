import { Component, inject } from '@angular/core';
import { UiService } from '../../../shared/service/ui.service';
import { ButtonComponent } from "../../../shared/components/button/button.component";

@Component({
  selector: 'app-basket-layout',
  imports: [ButtonComponent],
  template: `
  @if(ui.isBasketOpen()) {
    <div class="fixed top-14 right-0 h-full w-[300px] bg-white/50 backdrop-blur-md shadow-lg z-50 flex flex-col">
      <button class="absolute top-2 right-2" (click)="ui.menuBasket()">❌</button>
       <h2 class="p-4 font-heading text-2xl border-b">Mon panier ( nb )</h2>
     <div class="p-4 flex-1 overflow-y-auto space-y-4">
  
 
  <div class="grid grid-cols-[30%_70%] gap-4 items-center">
    <div>
      <img src="https://via.placeholder.com/150" alt="Product Image" class="w-full"/>
    </div>
    <div>
      <h3 class="text-xl">Nom du produit</h3>
      <p class="text-sm mt-2">Prix: 20€</p>
    </div>
  </div>

 
  <div class="grid grid-cols-[30%_70%] gap-4 items-center">
    <div>
      <img src="https://via.placeholder.com/150" alt="Product Image" class="w-full"/>
    </div>
    <div>
      <h3 class="text-xl">Nom du produit</h3>
      <p class="text-sm mt-2">Prix: 20€</p>
    </div>
  </div>

</div>
      
      <div class="p-4 border-t mb-10">
    <p class="text-lg font-semibold mb-2">Total: 20€</p>
    <app-button label="Commander" (click)="{}"></app-button>
  </div>
    </div>

    <!-- Backdrop -->
    <div class="fixed inset-0 bg-black/10 z-20" (click)="ui.menuBasket()"></div>
    
  }
  `,
  styles: ``
})
export class BasketLayoutComponent {
ui = inject(UiService);

}
