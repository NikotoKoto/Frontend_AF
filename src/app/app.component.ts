import { Component, inject, output, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from "./components/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { UiService } from './core/service/ui.service';
import { BasketLayoutComponent } from "./components/basket/basket-layout/basket-layout.component";
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterOutlet, BasketLayoutComponent],
  template:`
  <header >
    <app-header />
  </header>
   <main>
    <router-outlet/>
   </main>
   @if(ui.isBasketOpen()) {
    <app-basket-layout />
   }
   <footer>
    <app-footer />
    </footer>
    <!-- Backdrop -->
     @if(ui.isMenuOpen()){
  <div 
    class="fixed inset-0 bg-[#fdf6f6]/30 z-40" 
    (click)="ui.closeMenu()">
  </div>
     }
  
  `,
  styles:``
})
export class AppComponent {
ui = inject(UiService);

}
