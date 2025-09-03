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
        <h1 class="relative text-9xl md:text-9xl text-white uppercase mb-10">Audace florale</h1>
      </div>
        <h3 class="text-4xl md:text-4xl uppercase font-heading text-white m-6">
          Découvrir notre travail
        </h3>

        <!-- Arrow animation -->
        <div class="bottom-6 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  `,
  styles: [``],
})
export class EarlySectionComponent {}