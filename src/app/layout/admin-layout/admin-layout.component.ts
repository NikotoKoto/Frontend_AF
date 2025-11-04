import { Component } from '@angular/core';

import { AdminSidebarComponent } from "../../views/admin/admin-sidebar/admin-sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, AdminSidebarComponent],
  template: `
    <section class="flex w-full min-h-full">
      <app-admin-sidebar />
      <main class="flex-1 bg-gray-50 p-6">
        <router-outlet></router-outlet>
      </main>
    </section>
  `,
  styles: ``
})
export class AdminLayoutComponent {

}
