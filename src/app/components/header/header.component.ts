import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
<header class="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
  <div class="max-w px-6 flex items-center py-2">
    
    <!-- Logo -->
    <a [routerLink]="'/landingPage'"
       class="font-heading tracking-tight text-2xl md:text-3xl text-rose-400 hover:text-rose-300 transition">
      Audace Florale
    </a>

    <!-- Navigation (takes full space and centers links) -->
    <div class="flex-1 flex justify-center">
      <ul class="flex gap-10">
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

    <!-- Se connecter (far right) -->
    <a
      [routerLink]=""
      class="hover:!text-rose-400 uppercase cursor-pointer text-white"
    >
      Se connecter
    </a>
  </div>
</header>
  `,
})
export class HeaderComponent {
  nav = [
    { title: 'Nos créations', link: '/ourCreations' },
    { title: 'Mariages',      link: '/weddings' },
    { title: 'Deuil',         link: '/mourning' },   // ajoute les routes ou retire-les
    { title: 'Entreprise',    link: '/business' },   // ajoute les routes ou retire-les
  ];
}