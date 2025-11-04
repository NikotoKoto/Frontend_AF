import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-weddings',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <section class="p-6">
      <h2 class="text-center text-3xl mb-6 font-semibold text-gray-800">
        Gestion du contenu Mariage
      </h2>

      <nav class="flex justify-center mb-10">
        <ul class="flex gap-6 border-b border-gray-200 pb-2">
          @for (item of nav; track $index) {
            <li>
              <a
                [routerLink]="item.link"
                routerLinkActive="text-rose-400 border-b-2 border-rose-400"
                class="transition text-gray-600 hover:text-rose-400 font-medium pb-1"
              >
                {{ item.title }}
              </a>
            </li>
          }
        </ul>
      </nav>

      <router-outlet></router-outlet>
    </section>
  `,
})
export class WeddingsComponent {
  nav = [
    { title: 'Lieux de réception', link: 'place' },
    { title: 'Accessoires', link: 'accessory' },
    { title: 'Cérémonies laïques', link: 'ceremonyLaic' },
    { title: 'Cérémonies religieuses', link: 'ceremonyReligious' },

  ];
}