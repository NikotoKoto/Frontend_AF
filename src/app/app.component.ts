import { Component, inject, output, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from "./components/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { UiService } from './shared/service/ui.service';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  template:`
  <header >
    <app-header />
  </header>
   <main>
    <router-outlet/>
   </main>
   <footer>
    <app-footer />
    </footer>
    <!-- Backdrop -->
     @if(ui.isMenuOpen()){
  <div 
    class="fixed inset-0 bg-black/30 z-40" 
    (click)="ui.closeMenu()">
  </div>
     }
  
  `,
  styles:``
})
export class AppComponent {
ui = inject(UiService);

}
