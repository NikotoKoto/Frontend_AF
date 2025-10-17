import { Component } from '@angular/core';
import { DeliveryComponent } from "./components/delivery/delivery.component";
import { ContactUsFormComponent } from "./components/contact-us-form/contact-us-form.component";
import { InfoFooterComponent } from "./components/info-footer/info-footer.component";

@Component({
  selector: 'app-footer',
  imports: [DeliveryComponent, ContactUsFormComponent, InfoFooterComponent],
  template: `
 <footer class="mt-10 ">

 <app-delivery/>
 <app-contact-us-form/>
 <app-info-footer/>
  <div>
    <div class="max-w-6xl mx-auto px-6 py-4 text-sm flex flex-col md:flex-row items-center justify-between">
      <span>© {{year}} Audace Florale — Tous droits réservés</span>
      <span class="mt-2 md:mt-0">Design & développement — Audace Florale</span>
    </div>
  </div>
</footer>
  `,
})
export class FooterComponent {
    year = new Date().getFullYear();
  
}