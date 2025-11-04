import { Routes } from '@angular/router';
import { AdminLayoutComponent } from '../../layout/admin-layout/admin-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: async () => (await import('./admin-content.component')).AdminContentComponent
      },
      {
        path: 'stats',
        loadComponent: async () =>
          (await import('./views/stats/stats.component')).StatsComponent,
      },
      {
        path: 'orders',
        loadComponent: async () =>
          (await import('./views/orders/orders.component')).OrdersComponent,
      },
      {
        path: 'appointments',
        loadComponent: async () =>
          (await import('./views/appointments/appointments.component'))
            .AppointmentsComponent,
      },
      {
        path: 'creations',
        loadComponent: async () =>
          (await import('./views/creations/creations.component'))
            .CreationsComponent,
      },
      {
        path: 'weddings',
        loadChildren: async () =>
          (await import('./views/weddings/weddings.routes')).routes,
      },
      {
        path: 'mourning',
        loadComponent: async () =>
          (await import('./views/mourning/mourning.component'))
            .MourningComponent,
      },
      {
        path: 'company',
        loadComponent: async () =>
          (await import('./views/company/company.component')).CompanyComponent,
      },
      {path:'workshops',
        loadComponent: async ()=> (await import('./views/workshops/workshops.component')).WorkshopsComponent
      },
       {path:'events',
        loadComponent: async ()=> (await import('./views/events/events.component')).EventsComponent
      },
      {
        path:'settings',
        loadComponent:async () => (await import('./views/settings/settings.component')).SettingsComponent
      }
    ],
  },
];
