import { Component } from '@angular/core';
import { SOCIAL_MEDIA_FOOTER_DATA } from '../../../../shared/data/footer/socialMedia-footer-data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FOOTER_SECTIONS, FooterSection} from '../../../../shared/data/footer/info-footer-data';

@Component({
  selector: 'app-info-footer',
  imports: [],
  template: `
    <section class="border-t border-gray-200">
    <div class="items-center  max-w-6xl mx-auto px-10 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
      <!-- Social -->
      <div>
        <h4 class="font-heading text-2xl text-gray-900 mb-3 ">Suivez-nous</h4>
        <p class="text-sm text-gray-600 mb-3">Inspirations et nouveautés.</p>
        <div class="flex items-center gap-3">
          <!-- Social media -->
          @for(item of socialMedia; track $index) {
            <a [href]="item.link" target="_blank" rel="noopener noreferrer"
       class="h-9 w-9 inline-flex items-center justify-center rounded-full bg-rose-600 text-white hover:bg-rose-500 transition"
       [innerHTML]="item.svg">
    </a>
          }
        </div>
      </div>

      @for(section of footerSection; track $index) {
          <div>
            <h4 class="font-heading text-2xl text-gray-900 mb-3">{{ section.title }}</h4>
            <ul class="space-y-2 text-sm">
              @for(item of section.items; track $index) {
                <li>
                  @if (item.link) {
                    <a [href]="item.link" class="hover:text-rose-600 transition">{{ item.label }}</a>
                  } @else {
                    <span>{{ item.label }}</span>
                  }
                </li>
              }
            </ul>
          </div>
        }
    </div>
  </section>
  `,
  styles: ``
})
export class InfoFooterComponent {
socialMedia: { link: string; svg: SafeHtml }[];
footerSection : FooterSection[] = FOOTER_SECTIONS
  constructor(private sanitizer: DomSanitizer) {
    this.socialMedia = SOCIAL_MEDIA_FOOTER_DATA.map(item => ({
      link: item.link,
      svg: this.sanitizer.bypassSecurityTrustHtml(item.svg), // 👈 sécurise le SVG
    }));
  }
}
