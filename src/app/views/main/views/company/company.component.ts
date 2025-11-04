import { Component } from '@angular/core';

@Component({
  selector: 'app-company',
  standalone: true,
  template: `
    <section class="py-20 px-6">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-5xl md:text-7xl font-heading tracking-tight mb-6">
          Entreprises & Partenariats
        </h2>
        <p class="text-base italic max-w-2xl mx-auto">
          Sublimez vos espaces professionnels avec des compositions florales uniques et raffinées. Hôtels, restaurants, bureaux, événements : Audace Florale vous accompagne avec élégance et régularité.
        </p>
      </div>

      <div class="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="rounded-lg overflow-hidden shadow-md">
          <img src="assets/images/company/hotel-lobby.jpg" alt="Fleurs dans un hall d'hôtel" class="w-full h-[400px] object-cover">
        </div>
        <div class="flex flex-col justify-center">
          <h3 class="text-3xl font-heading mb-4">Des fleurs fraîches chaque semaine</h3>
          <p class="text-sm text-gray-600 mb-2">
            Pour accueillir vos clients dans une ambiance chaleureuse, Audace Florale propose un service d’abonnement floral hebdomadaire ou mensuel. 
          </p>
          <p class="text-sm text-gray-600">
            Chaque création est pensée en harmonie avec votre identité visuelle, pour renforcer votre image de marque tout en apportant une touche de nature.
          </p>
        </div>

        <div class="flex flex-col justify-center order-2 md:order-1">
          <h3 class="text-3xl font-heading mb-4">Événements d'entreprise</h3>
          <p class="text-sm text-gray-600 mb-2">
            Cocktail, lancement de produit, soirée de gala… Nous créons des décors floraux sur mesure pour sublimer tous vos événements professionnels.
          </p>
          <p class="text-sm text-gray-600">
            Nous vous accompagnons de la conception à l’installation avec rigueur et créativité.
          </p>
        </div>
        <div class="rounded-lg overflow-hidden shadow-md order-1 md:order-2">
          <img src="assets/images/company/evenement-entreprise.jpg" alt="Décoration florale événement entreprise" class="w-full h-[400px] object-cover">
        </div>
      </div>

      <div class="mt-20 text-center">
        <a routerLink="/contact" class="bg-rose-500 text-white px-6 py-3 rounded-md hover:bg-rose-600 transition">
          Discutons de votre projet
        </a>
      </div>
    </section>
  `,
})
export class CompanyComponent {}