import { Component } from '@angular/core';

@Component({
  selector: 'app-info-footer',
  imports: [],
  template: `
    <section class="border-t border-gray-200">
    <div class="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
      <!-- Social -->
      <div>
        <h4 class="font-heading text-lg text-gray-900 mb-3">Suivez-nous</h4>
        <p class="text-sm text-gray-600 mb-3">Inspirations, nouveautés & coulisses.</p>
        <div class="flex items-center gap-3">
          <!-- Instagram -->
          <a href="#" aria-label="Instagram"
             class="h-9 w-9 inline-flex items-center justify-center rounded-full bg-rose-600 text-white hover:bg-rose-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-5 3a5 5 0 110 10 5 5 0 010-10zm0 2.2a2.8 2.8 0 100 5.6 2.8 2.8 0 000-5.6zM17.5 6.5a1 1 0 110 2 1 1 0 010-2z"/>
            </svg>
          </a>
          <!-- Facebook -->
          <a href="#" aria-label="Facebook"
             class="h-9 w-9 inline-flex items-center justify-center rounded-full bg-rose-600 text-white hover:bg-rose-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.3-1.8 1.9-1.8H17V2.2C16.4 2.1 15.4 2 14.2 2 11.6 2 10 3.5 10 6.1V10H7v4h3v8h3z"/>
            </svg>
          </a>
          <!-- Pinterest -->
          <a href="#" aria-label="Pinterest"
             class="h-9 w-9 inline-flex items-center justify-center rounded-full bg-rose-600 text-white hover:bg-rose-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.5 2 3 6 3 10.5c0 2.6 1.5 4.9 3.9 5.7.1-.5.3-1.3.4-1.8l.3-1.1c-.2-.4-.3-1-.3-1.6 0-2.1 1.7-3.8 3.9-3.8 1.9 0 3.3 1.2 3.3 3 0 2.1-1 3.8-2.3 3.8-.7 0-1.2-.6-1.1-1.3.2-.9.6-1.9.6-2.6 0-.6-.3-1.1-1-1.1-.8 0-1.5.9-1.5 2.2 0 .8.3 1.4.3 1.4l-1.2 5.1c-.4 1.7-.1 3.8 0 4 0 0 .1 0 .1-.1.3-.4 1.8-2.3 2.4-4.3.2-.8.9-3 .9-3 .4.8 1.5 1.4 2.7 1.4 3.5 0 5.8-3.2 5.8-7.4C21 5.7 17.1 2 12 2z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Adresse & horaires -->
      <div>
        <h4 class="font-heading text-lg text-gray-900 mb-3">Adresse</h4>
        <p class="text-sm text-rose-600">Audace Florale<br>14 place Omer Vallon<br>60000 Chantilly</p>
        <h4 class="font-heading text-lg text-gray-900 mt-5 mb-2">Horaires</h4>
        <p class="text-sm text-rose-600">Mar–Sam: 9:00–19:00<br>Dim: 10:00–13:00</p>
        <p class="text-sm text-rose-600 mt-2">Tél: 01 23 45 67 89</p>
      </div>

      <!-- Mentions & liens -->
      <div>
        <h4 class="font-heading text-lg text-gray-900 mb-3">Informations</h4>
        <ul class="space-y-2 text-sm text-gray-700">
          <li><a href="#" class="hover:text-rose-600 transition">Mentions légales</a></li>
          <li><a href="#" class="hover:text-rose-600 transition">Politique de confidentialité</a></li>
          <li><a href="#" class="hover:text-rose-600 transition">Conditions générales</a></li>
          <li><a href="#" class="hover:text-rose-600 transition">FAQ & Livraison</a></li>
        </ul>
      </div>
    </div>
  </section>
  `,
  styles: ``
})
export class InfoFooterComponent {

}
