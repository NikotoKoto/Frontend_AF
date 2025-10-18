// app.routes.ts
import { Routes } from '@angular/router';
import { LandingPageComponent } from './views/landingPage/landingPage.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'landingPage' },
  { path: 'landingPage', component: LandingPageComponent },
  {
    path:'login',
    loadComponent: () => import('./views/authentication/auth/auth.component').then(m => m.LoginComponent),
  },
  {
    path: 'ourCreations',
    loadComponent: () =>
      import('./views/our-creations/our-creations.component').then(
        (m) => m.OurCreationsComponent
      ),
  },
  {
    path: 'weddings',
    loadComponent: () =>
      import('./views/wedding/wedding.component').then(
        (m) => m.WeddingComponent
      ),
  },
  {path:'mourning',
    loadComponent: () => import('./views/mourning/mourning.component').then(m => m.MourningComponent),
  },
  {path:'company',
    loadComponent: () => import('./views/company/company.component').then(m => m.CompanyComponent),
  },
  {path:'workshops',
    loadComponent: () => import('./views/workshop/workshop.component').then(m => m.WorkShop),
  },
  { path: '**', redirectTo: 'landingPage' },
];
