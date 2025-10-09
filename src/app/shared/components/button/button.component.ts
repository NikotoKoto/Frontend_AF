import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
   <button
      class="mt-4 w-full bg-rose-400 text-white py-2 rounded hover:bg-rose-300 transition"
      
      (click)="action()"    
    >
    @if(label()){
      <span >{{ label() }}</span>
      }
      <!-- Slot content for more complex icons -->
      <ng-content></ng-content>
   </button>
  `,
  styles: ``
})
export class ButtonComponent {
  label = input<string | undefined>();
    action = input<() => void>(() => {});
}
