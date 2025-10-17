import { Component, computed, inject, input } from '@angular/core';
import { UiService } from '../../../core/service/ui.service';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { BASKET, basketItem } from '../../../shared/data/basket/basket-data';

@Component({
  selector: 'app-basket-layout',
  imports: [ButtonComponent],
  template: `
    @if(ui.isBasketOpen()) {
    <div
      class="fixed top-14 right-0 h-full w-[300px] bg-[#fdf6f6 /50 backdrop-blur-md shadow-lg z-50 flex flex-col"
    >
      <button class="absolute top-2 right-2" (click)="ui.menuBasket()">
        ❌
      </button>
      <h2 class="p-4 font-heading text-2xl border-b">Mon panier ( {{totalQuantity()}} )</h2>
      <div class="p-4 flex-1 overflow-y-auto space-y-4">
        <div class="grid grid-cols-[30%_70%] gap-4 items-center">
          @for(item of basketdata; track $index){
          <div>
            <img [src]="item.img" alt="Product Image" class="w-full" />
          </div>
          <div>
            <h3 class="text-xl">{{ item.name }}</h3>
            <p class="text-sm mt-2">Prix: {{ item.price }}</p>
          </div>
          }
        </div>
      </div>

      <div class="p-4 border-t mb-10">
        <p class="text-lg font-semibold mb-2">Total: {{totalPrice()}} $</p>
        <app-button label="Commander" (click)="({})"></app-button>
      </div>
    </div>

    <!-- Backdrop -->
    <div class="fixed inset-0 bg-[#fdf6f6]/10 z-20" (click)="ui.menuBasket()"></div>

    }
  `,
  styles: ``,
})
export class BasketLayoutComponent {
  ui = inject(UiService);
  basketdata = this.ui.basketData();
  totalPrice = computed (()=> this.basketdata.reduce((acc,item)=> acc +item.price,0))
  totalQuantity = computed(()=>this.basketdata.reduce((acc,item)=> acc +item.quantiy,0));
}
