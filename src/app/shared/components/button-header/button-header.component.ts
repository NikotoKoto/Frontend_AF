import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-button-header',
  imports: [MatIconModule],
  template: `
   <button
      class="flex items-center  transition
             hover:scale-110 active:scale-95 text-2xl text-rose-400"
      
      (click)="action()"
    >
      @if(icon()){
        
        <mat-icon>{{icon()}}</mat-icon>
      }

      @if(label()){
      <span >{{ label() }}</span>
      }
      <!-- Slot content for more complex icons -->
      <ng-content></ng-content>
    </button>
  `,
  styles: ``
})
export class ButtonHeaderComponent {
label = input<string | undefined>();
  icon = input<string | undefined>();
  action = input<() => void>(() => {});
}
