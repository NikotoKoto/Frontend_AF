import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
   <button
      class="mt-4 w-full bg-rose-400 text-white px-4 py-2 rounded hover:bg-rose-300 transition cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400 flex justify-center items-center gap-2"
      [disabled]="disabled()"
      type="submit">
    @if(label()){
      <span >{{ label() }}</span>
      }
   </button>
  `,
  styles: ``
})
export class ButtonComponent {
  label = input<string | undefined>();
  disabled = input<boolean>(false);

}
