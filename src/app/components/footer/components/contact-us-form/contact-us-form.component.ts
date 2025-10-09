import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../shared/components/button/button.component";

@Component({
  selector: 'app-contact-us-form',
  imports: [ButtonComponent],
  template: `
      <section id="contactUs" class="max-w-6xl mx-auto px-6 pb-12">
    <div class="  p-6 md:p-8">
      <h3 class="text-center text-4xl md:text-6xl xl:text-8xl  font-heading text-gray-900 mb-4">Nous contacter</h3>
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
        <app-button label="Envoyer" (click)="submit()" class="w-[250px] h-[60px]"></app-button>
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
