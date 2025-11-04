import { Component } from '@angular/core';
import { DatePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-admin-content',
  standalone: true,
  imports: [NgFor, DatePipe],
  template: `
    <section class="min-h-screen bg-gray-50 flex flex-col gap-10 p-8">
      <!-- Header -->
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-heading font-semibold text-gray-800">
          Tableau de bord
        </h1>
        <p class="text-sm text-gray-500">
          Mise à jour : {{ today | date: 'dd/MM/yyyy' }}
        </p>
      </div>

      <!-- Cards stats -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          *ngFor="let stat of stats"
          class="rounded-xl shadow-sm bg-white border border-gray-200 p-6 hover:shadow-md transition"
        >
          <h3 class="text-gray-500 text-lg mb-2">{{ stat.title }}</h3>
          <p class="text-3xl font-bold text-gray-800">{{ stat.value }}</p>
          <p class="text-xs text-gray-400 mt-1">{{ stat.subtitle }}</p>
        </div>
      </div>

      <!-- 2-cols layout: activity + appointments -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Activité récente -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 class="font-semibold text-lg text-gray-700 mb-4">Activité récente</h3>
          <ul class="space-y-3 text-sm text-gray-600">
            <li>✅ 12 nouvelles commandes validées</li>
            <li>📅 4 rendez-vous planifiés aujourd’hui</li>
            <li>💬 5 nouveaux messages clients</li>
          </ul>
        </div>

        <!-- Rendez-vous du jour -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 class="font-semibold text-lg text-gray-700 mb-4">Rendez-vous du jour</h3>
          <div class="flex flex-col gap-3 text-sm">
            <div class="p-3 border rounded-md hover:bg-gray-50 transition">
              <p class="font-medium">Sophie Laurent</p>
              <p class="text-xs text-gray-500">10h30 – Consultation florale</p>
            </div>
            <div class="p-3 border rounded-md hover:bg-gray-50 transition">
              <p class="font-medium">Thomas Dubois</p>
              <p class="text-xs text-gray-500">14h00 – Devis mariage</p>
            </div>
            <div class="p-3 border rounded-md hover:bg-gray-50 transition">
              <p class="font-medium">Clara Durand</p>
              <p class="text-xs text-gray-500">17h00 – Livraison entreprise</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Commandes du jour -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="font-semibold text-lg text-gray-700 mb-4">
          🧾 Commandes du jour
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <div
            *ngFor="let order of dailyOrders"
            class="p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-gray-50"
          >
            <div class="flex justify-between items-center mb-2">
              <p class="font-semibold text-gray-700">{{ order.client }}</p>
              <span
                class="text-xs px-2 py-1 rounded-full"
                [class]="{
                  'bg-green-100 text-green-600': order.status === 'Livrée',
                  'bg-yellow-100 text-yellow-600': order.status === 'En cours',
                  'bg-red-100 text-red-600': order.status === 'En attente'
                }"
                >{{ order.status }}</span
              >
            </div>
            <p class="text-sm text-gray-500 italic">
              {{ order.items }} — {{ order.total }} €
            </p>
            <p class="text-xs text-gray-400 mt-1">
              Livraison prévue : {{ order.time }}
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class AdminContentComponent {
  today = new Date();

  stats = [
    { title: 'Visites client', value: '250', subtitle: 'Ce mois-ci' },
    { title: 'Commandes', value: '2 500', subtitle: 'Total depuis janvier' },
    { title: 'Rendez-vous', value: '18', subtitle: 'Prévu aujourd’hui' },
  ];

  dailyOrders = [
    {
      client: 'Marie Dupont',
      items: 'Bouquet + carte',
      total: 45,
      status: 'En cours',
      time: '11h30',
    },
    {
      client: 'Paul Bernard',
      items: 'Centre de table x3',
      total: 120,
      status: 'En attente',
      time: '14h00',
    },
    {
      client: 'Isabelle Lemoine',
      items: 'Composition florale',
      total: 80,
      status: 'Livrée',
      time: '09h15',
    },
    {
      client: 'Claire Martin',
      items: 'Bouquet mariage',
      total: 150,
      status: 'En cours',
      time: '16h45',
    },
  ];
}