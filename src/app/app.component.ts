import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { EarlySectionComponent } from "./views/landingPage/components/early-section/early-section.component";
import { WeddingComponent } from "./views/wedding/wedding.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, EarlySectionComponent, FooterComponent, RouterOutlet],
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
  `,
  styles:``
})
export class AppComponent {
   nav = [ {
    name: 'Nos créations', href: '/creations', current: false
  }, {
    name: 'Mariage', href: '/wedding', current: false
  }, {
    name: 'Deuil', href: '/mourning', current: false
  }, {
    name: 'Entreprise', href: '/company', current: false 
  }]
}
