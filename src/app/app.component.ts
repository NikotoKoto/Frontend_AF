import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { EarlySectionComponent } from "./views/early-section/early-section.component";
import { AboutUsComponent } from "./views/about-us/about-us.component";
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, EarlySectionComponent, AboutUsComponent],
  template:`
  <div class="relative min-h-screen bg-white">

    <app-early-section class="absolute inset-0 z-0"></app-early-section>
    <app-header class="relative z-10"></app-header>
  </div>
    
    <app-about-us/>
  `,
  styles:``
})
export class AppComponent {
}
