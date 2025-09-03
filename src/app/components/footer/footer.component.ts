import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
 <footer class="mt-10 text-gray-800">

  <!-- Livraison 100% gratuite -->
  <section class="max-w-6xl mx-auto px-6 py-10">
    <div class=" bg-white p-6 md:p-8">
      
        <h3 class="flex justify-center items-center gap-2 rounded-full  px-4 py-2  text-4xl uppercase">
         - Livraison 100% gratuite -
        </h3>

        <p class="text-sm text-center md:text-base leading-relaxed md:ml-2">
          Vous avez choisi un bouquet de saison, confectionné par nos passionnés fleuristes.<br class="hidden md:block">
          Audace Florale livre des bouquets de fleurs dans le secteur proche de son enseigne, mais afin de vous garantir une
          livraison parfaite, nous avons besoin d’un maximum d’informations.<br class="hidden md:block">
          Nos livrés sont toujours contactés avant la livraison, afin que nous soyons sûr de leur présence et de trouver une
          solution si ces derniers ne peuvent pas.
        </p>
      </div>
   
  </section>

  <!-- Contact form -->
  <section class="max-w-6xl mx-auto px-6 pb-12">
    <div class="  p-6 md:p-8">
      <h3 class="text-center text-6xl md:text-4xl uppercase font-heading text-gray-900 mb-4">Nous contacter</h3>
      <form (ngSubmit)="submit()" #contactForm="" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="col-span-1">
          <label class="block text-sm text-gray-600 mb-1" for="name">Nom</label>
          <input id="name" name="name"  required
                 class="w-full rounded-lg border border-gray-300 focus:border-gray-600 focus:ring-gray-600 px-3 py-2 outline-none"/>
        </div>
        <div class="col-span-1">
          <label class="block text-sm text-gray-600 mb-1" for="email">Email</label>
          <input id="email" name="email" type="email"  required
                 class="w-full rounded-lg border border-gray-300 focus:border-gray-600 focus:ring-gray-600 px-3 py-2 outline-none"/>
        </div>
        <div class="col-span-1 md:col-span-2">
          <label class="block text-sm text-gray-600 mb-1" for="message">Message</label>
          <textarea id="message" name="message" rows="4"  required
                    class="w-full rounded-lg border border-gray-300 focus:border-gray-600 focus:ring-gray-600 px-3 py-2 outline-none"></textarea>
        </div>
        <div class="col-span-1 md:col-span-2 flex justify-end">
          <button [disabled]=""
                  class="inline-flex items-center gap-2 rounded-full bg-gray-600 px-5 py-2.5 text-white font-medium shadow hover:bg-gray-500 transition disabled:opacity-50">
            Envoyer
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </form>
      <p *ngIf="sent" class="mt-3 text-sm text-green-700">Merci ! Votre message a bien été envoyé.</p>
    </div>
  </section>

  <!-- Bottom columns -->
  <section class="border-t border-gray-200">
    <div class="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
      <!-- Social -->
      <div>
        <h4 class="font-heading text-lg text-gray-900 mb-3">Suivez-nous</h4>
        <p class="text-sm text-gray-600 mb-3">Inspirations, nouveautés & coulisses.</p>
        <div class="flex items-center gap-3">
          <!-- Instagram -->
          <a href="#" aria-label="Instagram"
             class="h-9 w-9 inline-flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-rose-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-5 3a5 5 0 110 10 5 5 0 010-10zm0 2.2a2.8 2.8 0 100 5.6 2.8 2.8 0 000-5.6zM17.5 6.5a1 1 0 110 2 1 1 0 010-2z"/>
            </svg>
          </a>
          <!-- Facebook -->
          <a href="#" aria-label="Facebook"
             class="h-9 w-9 inline-flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-rose-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.3-1.8 1.9-1.8H17V2.2C16.4 2.1 15.4 2 14.2 2 11.6 2 10 3.5 10 6.1V10H7v4h3v8h3z"/>
            </svg>
          </a>
          <!-- Pinterest -->
          <a href="#" aria-label="Pinterest"
             class="h-9 w-9 inline-flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-rose-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.5 2 3 6 3 10.5c0 2.6 1.5 4.9 3.9 5.7.1-.5.3-1.3.4-1.8l.3-1.1c-.2-.4-.3-1-.3-1.6 0-2.1 1.7-3.8 3.9-3.8 1.9 0 3.3 1.2 3.3 3 0 2.1-1 3.8-2.3 3.8-.7 0-1.2-.6-1.1-1.3.2-.9.6-1.9.6-2.6 0-.6-.3-1.1-1-1.1-.8 0-1.5.9-1.5 2.2 0 .8.3 1.4.3 1.4l-1.2 5.1c-.4 1.7-.1 3.8 0 4 0 0 .1 0 .1-.1.3-.4 1.8-2.3 2.4-4.3.2-.8.9-3 .9-3 .4.8 1.5 1.4 2.7 1.4 3.5 0 5.8-3.2 5.8-7.4C21 5.7 17.1 2 12 2z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Adresse & horaires -->
      <div>
        <h4 class="font-heading text-lg text-gray-900 mb-3">Adresse</h4>
        <p class="text-sm text-gray-700">Audace Florale<br>12 Rue des Pivoines<br>75000 Paris</p>
        <h4 class="font-heading text-lg text-gray-900 mt-5 mb-2">Horaires</h4>
        <p class="text-sm text-gray-700">Lun–Sam: 9:00–19:00<br>Dim: 10:00–13:00</p>
        <p class="text-sm text-gray-700 mt-2">Tél: 01 23 45 67 89</p>
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

  <!-- Bottom bar -->
  <div>
    <div class="max-w-6xl mx-auto px-6 py-4 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between">
      <span>© {{year}} Audace Florale — Tous droits réservés</span>
      <span class="mt-2 md:mt-0">Design & développement — Audace Florale</span>
    </div>
  </div>
</footer>
  `,
})
export class FooterComponent {
  year = new Date().getFullYear();
  sent = false;
  form = { name: '', email: '', message: '' };

  submit() {
    // TODO: send email via your API/service
    this.sent = true;
    // reset form if you want:
    // this.form = { name: '', email: '', message: '' };
  }
}