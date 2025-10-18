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
  class="fixed top-0 left-0 right-0 z-50 h-[57px] bg-black/20 backdrop-blur-md border-b border-white/10"
>
  <div
    class="max-w-screen-xl mx-auto px-6 h-full grid grid-cols-3 items-center"
  >

    <div class="flex items-center">
      <app-button-header icon="menu" (click)="ui.toggleMenu()" />
    </div>


    <div class="flex justify-center">
      <a
        [routerLink]="'/landingPage'"
        class="font-heading tracking-tight text-2xl md:text-3xl text-rose-400 hover:text-rose-300 transition"
      >
        Audace Florale
      </a>
    </div>

   
    <div class="flex justify-end gap-4 items-center">
      <app-button-header icon="add_shopping_cart" (click)="ui.menuBasket()" />
      <a
        class="flex items-center hover:scale-110 active:scale-95 text-2xl text-rose-400"
        routerLink="/login"
      >
        <mat-icon>account_circle</mat-icon>
      </a>
    </div>
  </div>

  <!-- Menu déroulant -->
  @if (ui.isMenuOpen()) {
    <div
      class="absolute top-[57px] left-0  w-80 ml-auto mr-4 min-h-screen bg-[#fdf6f6] backdrop-blur-md shadow-lg flex flex-col px-4 gap-4 py-4 transition-all duration-300 ease-in-out z-50"
    >
    <button class="absolute top-0 right-[10px] text-lg " (click)="closeBurgerMenu()"> x</button>
      @for (navigation of navHeader; track $index) {
        <a
          [routerLink]="navigation.link"
          routerLinkActive="text-rose-400"
          class=" uppercase hover:!text-rose-400 transition"
          (click)="ui.closeMenu()"
        >
          {{ navigation.title }}
        </a>
      }
      @if(!isAdmin()) {
      <a routerLinkActive="text-rose-400" class="absolute bottom-10 pb-10 cursor-pointer uppercase hover:!text-rose-400 transition">Administration</a>
      }
    </div>
  }
</header>
  `,
})
export class HeaderComponent {
  isAdmin = signal(false);
  ui = inject(UiService);
  navHeader : NavHeaderItem[] = NAV_HEADER

closeBurgerMenu(){
  this.ui.closeMenu();
}
  
}
