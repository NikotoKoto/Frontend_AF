import { Component, inject, input, output, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UiService } from '../../shared/service/ui.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header
      class="fixed top-0 left-0  right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
    >
      <div class="max-w px-6 flex items-center py-2">
        <!-- Logo -->
        <a
          [routerLink]="'/landingPage'"
          class="font-heading tracking-tight text-2xl md:text-3xl text-rose-400 hover:text-rose-300 transition"
        >
          Audace Florale
        </a>

        <div class="flex-1 hidden md:flex justify-center">
          <ul class="flex gap-6 lg:gap-10">
            @for (navigation of nav; track $index) {
            <li class="transition-transform duration-300 hover:scale-105">
              <a
                [routerLink]="navigation.link"
                routerLinkActive="text-rose-400"
                class="text-white uppercase hover:!text-rose-400 transition"
              >
                {{ navigation.title }}
              </a>
            </li>
            }
          </ul>
        </div>

        
        <!-- Mobile hamburger -->
        <div class="md:hidden ml-auto relative">
  <button class="text-white text-2xl" (click)="ui.toggleMenu()">☰</button>


@if (ui.isMenuOpen()) {
  <!-- Menu Panel -->
  <div
    class="absolute top-10 right-1
           w-48  
           rounded-lg 
           bg-black/80 backdrop-blur-md shadow-lg 
           flex flex-col items-center gap-4 py-4
           transition-all duration-300 ease-in-out z-50"
  >
    @for (navigation of nav; track $index) {
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
      </div>
    </header>
  `,
})
export class HeaderComponent {

  ui = inject(UiService);
  nav = [
    { title: 'Nos créations', link: '/ourCreations' },
    { title: 'Mariages', link: '/weddings' },
    { title: 'Deuil', link: '/mourning' }, 
    { title: 'Entreprise', link: '/business' },
    {title: 'Se connecter', link:'/'} 
  ];


  
}
