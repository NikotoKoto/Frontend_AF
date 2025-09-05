import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us-form',
  imports: [],
  template: `
      <section id="contactUs" class="max-w-6xl mx-auto px-6 pb-12">
    <div class="  p-6 md:p-8">
      <h3 class="text-center text-9xl md:text-6xl  font-heading text-gray-900 mb-4">Nous contacter</h3>
      <div class="mt-6 flex items-center justify-center">
      <span class="inline-block h-[2px] w-24 bg-rose-400"></span>
    </div>
      <form (ngSubmit)="submit()" #contactForm="" class=" mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="col-span-1">
          <label class="block text-sm text-rose-400 mb-1" for="name">Nom</label>
          <input id="name" name="name"  required
                 class="w-full rounded-lg border border-gray-300 focus:border-rose-400 focus:ring-rose-400 px-3 py-2 outline-none"/>
        </div>
        <div class="col-span-1">
          <label class="block text-sm text-rose-400 mb-1" for="email">Email</label>
          <input id="email" name="email" type="email"  required
                 class="w-full rounded-lg border border-gray-300 focus:border-rose-400 focus:ring-rose-400 px-3 py-2 outline-none"/>
        </div>
        <div class="col-span-1 md:col-span-2">
          <label class="block text-sm text-rose-400 mb-1" for="message">Message</label>
          <textarea id="message" name="message" rows="4"  required
                    class="w-full rounded-lg border border-gray-300 focus:border-rose-400 focus:ring-gray-600 px-3 py-2 outline-none"></textarea>
        </div>
        <div class="col-span-1 md:col-span-2 flex justify-end">
          <button [disabled]=""
                  class="inline-flex items-center gap-2 rounded-full bg-gray-600 px-5 py-2.5 text-white font-medium shadow hover:bg-rose-400 transition disabled:opacity-50">
            Envoyer
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </form>
    </div>
  </section>

  `,
  styles: ``
})
export class ContactUsFormComponent {

  sent = false;
  form = { name: '', email: '', message: '' };

submit() {
    // TODO: send email via your API/service
    this.sent = true;
    // reset form if you want:
    // this.form = { name: '', email: '', message: '' };
  }
}
