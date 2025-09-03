import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { EarlySectionComponent } from "./views/early-section/early-section.component";
import { AboutUsComponent } from "./views/about-us/about-us.component";
import { OurCreationsComponent } from "./views/our-creations/our-creations.component";
import { WeddingComponent } from "./views/wedding/wedding.component";
import { FooterComponent } from "./components/footer/footer.component";
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, EarlySectionComponent, AboutUsComponent, OurCreationsComponent, WeddingComponent, FooterComponent],
  template:`
  <div class="relative min-h-screen bg-white">

    <app-early-section class="absolute inset-0 z-0"></app-early-section>
    <app-header class="relative z-10"></app-header>
  </div>
    
    <app-about-us/>
    <app-our-creations/>
    <app-wedding  />
    <app-footer />
  `,
  styles:``
})
export class AppComponent {
}
