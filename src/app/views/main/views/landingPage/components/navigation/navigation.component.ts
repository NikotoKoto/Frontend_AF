import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAVIGATION_LANDINGPAGE, NavLandingItem } from '../../../../../../shared/data/navigation-landingPage-data';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink],
  template: `
   <section class="flex flex-col items-center py-10">
  <h2 class="text-4xl md:text-6xl xl:text-8xl ">Ou voulez-vous voyager ?</h2>
  <div class="mt-6 flex items-center justify-center">
    <span class="inline-block h-[1px] w-24 bg-rose-400"></span>
  </div>

  <nav class="mt-10 grid grid-cols-2 md:grid-cols-2 gap-6 max-w-6xl">
    @for (item of navigation; track $index) {
      <div class="relative h-80 w-80  cursor-pointer shadow-lg overflow-hidden group flex items-center justify-center bg-gray-200">
        <!-- Background image -->
        <img
          [src]="item.img"
          [alt]="item.name"
          class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
       
        <a
          [routerLink]="item.link"
          class="relative z-10 text-white  font-heading text-4xl tracking-wide hover:text-rose-400 transition"
        >
          {{ item.name }}
        </a>
      </div>
    }
  </nav>
</section>
  `,
  styles: ``,
})
export class NavigationComponent {
  navigation : NavLandingItem[] = NAVIGATION_LANDINGPAGE;
}
