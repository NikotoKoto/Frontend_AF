import { Component, computed, inject } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { NgClass } from '@angular/common';
import { UiService } from '../../core/service/ui.service';
import { RouterOutlet,Router, NavigationEnd } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-main-layout',
  imports: [HeaderComponent, FooterComponent, RouterOutlet,NgClass],
  template: `
   <header >
    <app-header />
  </header>
  
   <main [ngClass]="{'pt-20': !isLandingPage()}">
    <router-outlet/>
   </main>
 
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
  styles: ``
})
export class MainLayoutComponent {
ui = inject(UiService);
router = inject(Router);
 currentUrl = toSignal(
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.router.url),
      startWith(this.router.url) // ⚙️ garde la valeur initiale
    ),
    { initialValue: this.router.url } // ⚙️ évite le "vide" au premier rendu
  );

  isLandingPage = computed(() => {
    const url = this.currentUrl();
    return url === '/landingPage' || url === '/'; // ✅ ajoute "/" pour plus de sécurité
  });
}
