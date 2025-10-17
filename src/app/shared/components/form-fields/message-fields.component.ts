import { Component, computed, inject, input } from '@angular/core';
import { ControlContainer, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-message-fields',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
   <label class="block text-sm text-rose-400 mb-1" [for]="controlName()">{{label()}}</label>
     <textarea
              [id]="controlName()"
              rows="4"
              [formControlName]="controlName()"
              class="w-full rounded-lg border border-gray-300 focus:border-rose-400 focus:ring-gray-600 px-3 py-2 outline-none"
            ></textarea>

            @if(hasError()){
              <p class="text-red-500 text-sm mt-1">{{errorMessage()}}</p>
            }
  `,
  styles: ``
})
export class MessageFieldsComponent {
  label = input<string>('Message');
  controlName = input<string>('');
  private container = inject(ControlContainer);

  // Récupération du contrôle en question
  private control = computed(() => {
    return this.container?.control?.get(this.controlName())!;
  });
  hasError = computed(() => {
    const c = this.control();
    return c?.invalid && (c.touched || c.dirty);
  });

  // Gère le message d’erreur dynamiquement
  errorMessage = computed(() => {
    const c = this.control();
    const errors = c?.errors;
    if (!errors) return '';

    if (errors['required']) return 'Ce champ est requis';
    if (errors['minlength']) return `Min. ${errors['minlength'].requiredLength} caractères`;
    if (errors['maxlength']) return `Max. ${errors['maxlength'].requiredLength} caractères`;

    return 'Champ invalide';
  });

}
