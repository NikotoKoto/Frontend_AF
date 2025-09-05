import { Component } from '@angular/core';

@Component({
  selector: 'app-early-section',
  standalone: true,
  template: `
    <div class="relative h-screen w-full overflow-hidden">
      <!-- Background video -->
      <video
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/videos/presentation_h264.mp4" type="video/mp4" />
      </video>

      <!-- Dark overlay -->
      <div class="absolute inset-0 bg-black/40 z-10"></div>
       

      <!-- Centered content -->
      <div
        class="relative z-20 flex flex-col h-full w-full items-center justify-center text-center px-6"
      >
      <div class="mt-10">
        <h1 class="font-heading relative text-9xl md:text-9xl text-rose-400  mb-10">Audace Florale</h1>
      </div>
        <h3 class="text-4xl md:text-4xl  font-heading text-white m-6">
          Découvrir notre travail
        </h3>

       <div class="mt-20 flex flex-col items-center gap-2 animate-bounce">
          @for (color of arrowColors; let i = $index; track $index) {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              [class]="[color, 'h-8','w-8']"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 9l-7 7-7-7" />
            </svg>
          }
        </div>
      </div>
    </div>
  `,
  styles: [``],
})
export class EarlySectionComponent {
  arrowColors = ['text-rose-400', 'text-white', 'text-rose-400'];
}