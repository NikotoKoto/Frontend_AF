import { Routes } from "@angular/router";
import { MainLayoutComponent } from "../../layout/main-layout/main-layout.component";
import { LandingPageComponent } from "./views/landingPage/landingPage.component";

export const routes : Routes = [
    {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'landingPage' },
      { path: 'landingPage', component: LandingPageComponent },
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
      {
        path: 'mourning',
        loadComponent: () =>
          import('./views/mourning/mourning.component').then(
            (m) => m.MourningComponent
          ),
      },
      {
        path: 'company',
        loadComponent: () =>
          import('./views/company/company.component').then(
            (m) => m.CompanyComponent
          ),
      },
      {
        path: 'workshops',
        loadComponent: () =>
          import('./views/workshop/workshop.component').then(
            (m) => m.WorkShop
          ),
      },
      {
        path: 'events',
        loadComponent: () =>
          import('./views/events/events.component').then(
            (m) => m.EventsComponent
          ),
      },
    ]
  }

]