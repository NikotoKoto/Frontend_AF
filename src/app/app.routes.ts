// app.routes.ts
import { Routes } from '@angular/router';
import { LandingPageComponent } from './views/landingPage/landingPage.component';


export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'about-us' },
  { path: 'landingPage', component:  LandingPageComponent },
  {
    path: 'ourCreations',
    loadComponent: () =>
      import('./views/our-creations/our-creations.component')
        .then(m => m.OurCreationsComponent),
  },
  {
    path: 'weddings',
    loadComponent: () =>
      import('./views/wedding/wedding.component')
        .then(m => m.WeddingComponent),
  },
  { path: '**', redirectTo: 'landingPage' },
];