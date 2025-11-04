import { Routes } from '@angular/router';


export const routes: Routes = [
  
   {
    path: '',
    loadChildren: async () =>
      (await import('./views/main/main.routes')).routes,
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./views/auth/auth.component').then(
        (m) => m.LoginComponent
      ),
  },

  {
    path: 'admin',
   loadChildren: async () => (await import("./views/admin/admin.routes")).routes
      
      },

  { path: '**', redirectTo: 'landingPage' },
];