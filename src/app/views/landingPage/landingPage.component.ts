import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { EarlySectionComponent } from './components/early-section/early-section.component';
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { NavigationComponent } from "./components/navigation/navigation.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [EarlySectionComponent, AboutUsComponent, NavigationComponent],
  template: `
    
    <app-early-section class="relative block"></app-early-section>
    <app-about-us/>
    <app-navigation/>
    
  `,
})
export class LandingPageComponent {

}