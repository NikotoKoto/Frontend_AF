import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor, MatIconModule],
  template: `
    <aside
      class="w-[250px] h-full bg-white border-r border-gray-200 flex flex-col justify-between py-6 px-4 shadow-sm"
    >
      <!-- Logo -->
      <div>
        <h2 class="text-2xl font-heading text-rose-500 mb-8 text-center">
          Audace Admin
        </h2>

        <!-- Menu principal -->
        <nav class="flex flex-col gap-2">
          <a
            *ngFor="let item of menuItems"
            [routerLink]="item.link"
            routerLinkActive="bg-rose-50 text-rose-500 font-semibold"
            class="flex items-center gap-3 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
          >
            <mat-icon>{{ item.icon }}</mat-icon>
            {{ item.label }}
          </a>
        </nav>

        <!-- Section de contenu du site -->
        <div class="mt-10">
          <p class="text-sm text-gray-500 uppercase mb-2 px-4">
            Gestion du contenu
          </p>
          <nav class="flex flex-col gap-2">
            <a
              *ngFor="let section of contentSections"
              [routerLink]="section.link"
              routerLinkActive="bg-rose-50 text-rose-500 font-semibold"
              class="flex items-center gap-3 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
            >
              <mat-icon>{{ section.icon }}</mat-icon>
              {{ section.label }}
            </a>
          </nav>
        </div>
      </div>

      <!-- Bas du menu -->
      <div class="border-t border-gray-200 pt-4">
        <a
          routerLink="/admin/settings"
          class="flex items-center gap-3 px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition"
        >
          <mat-icon>settings</mat-icon>
          Paramètres
        </a>
        <a
          (click)="logout()"
          class="flex items-center gap-3 px-4 py-2 rounded-md text-red-500 hover:bg-red-50 transition cursor-pointer mt-2"
        >
          <mat-icon>logout</mat-icon>
          Déconnexion
        </a>
      </div>
    </aside>
  `,
})
export class AdminSidebarComponent {
  menuItems = [
    { label: 'Tableau de bord', icon: 'dashboard', link: '/admin/dashboard' },
    { label: 'Statistiques', icon: 'insights', link: '/admin/stats' },
    { label: 'Commandes du jour', icon: 'receipt_long', link: '/admin/orders' },
    { label: 'Rendez-vous du jour', icon: 'event', link: '/admin/appointments' },
  ];

  contentSections = [
    { label: 'Nos créations', icon: 'collections', link: '/admin/creations' },
    { label: 'Mariages', icon: 'favorite', link: '/admin/weddings' },
    { label: 'Deuils', icon: 'local_florist', link: '/admin/mourning' },
    { label: 'Entreprises', icon: 'work', link: '/admin/company' },
    { label: 'Ateliers', icon: 'emoji_nature', link: '/admin/workshops' },
    { label: 'Événements', icon: 'event_available', link: '/admin/events' },
  ];

  logout() {
    console.log('Déconnexion…');
    // plus tard : this.authService.logout();
  }
}