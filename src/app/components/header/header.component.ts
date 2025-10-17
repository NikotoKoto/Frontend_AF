import { Component, inject, input, output, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UiService } from '../../core/service/ui.service';
import { ButtonHeaderComponent } from "../../shared/components/button-header/button-header.component";
import { NAV_HEADER, NavHeaderItem } from '../../shared/data/header-nav-data';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ButtonHeaderComponent, MatIconModule],
  template: `
    <header
      class="fixed top-0 left-0 h-[57px] right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
    >
      <div class="max-w px-6 flex items-center py-2.5">
        <!-- Logo -->
        <a
          [routerLink]="'/landingPage'"
          class="font-heading tracking-tight text-2xl md:text-3xl text-rose-400 hover:text-rose-300 transition"
        >
          Audace Florale
        </a>


        <!-- Navigation & Actions -->
        <div class="ml-auto flex gap-4  items-center">
       
          <app-button-header icon="menu"  (click)="ui.toggleMenu()" />

       
          <app-button-header  icon="add_shopping_cart" (click)="ui.menuBasket()"/>

     
          <a class="flex items-center  transition
             hover:scale-110 active:scale-95 text-2xl text-rose-400"  routerLink="/login" ><mat-icon>account_circle</mat-icon></a>
        </div>


@if (ui.isMenuOpen()) {
  <!-- Menu Panel -->
  <div
    class="absolute top-10 right-1
           w-48  
           rounded-lg 
           bg-black/50 backdrop-blur-md shadow-lg 
           flex flex-col items-center gap-4 py-4
           transition-all duration-300 ease-in-out z-50"
  >
    @for (navigation of navHeader; track $index) {
      <a
        [routerLink]="navigation.link"
        routerLinkActive="text-rose-400"
        class="text-white uppercase hover:!text-rose-400 transition"
        (click)="ui.closeMenu()"
      >
        {{ navigation.title }}
      </a>
    }
  </div>
}
</div>
      
    </header>
  `,
})
export class HeaderComponent {
  ui = inject(UiService);
  navHeader : NavHeaderItem[] = NAV_HEADER


  
}
