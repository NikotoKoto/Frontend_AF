import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { ControlContainer, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-fields',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  template: `
     <label class="block text-sm text-rose-400 mb-1" [for]="controlName()">{{label()}}</label>
    <input
      [id]="controlName()"
      [type]="type()"
      [formControlName]="controlName()"
      class="w-full rounded-lg border border-gray-300 focus:border-rose-400 focus:ring-rose-400 px-3 py-2 outline-none"
    />
    @if(hasError()){
      <p class="text-red-500 text-sm mt-1">{{errorMessage()}}</p>
    }
  `,
  styles: ``
})
export class InputFieldsComponent {
label = input<string>('');
controlName = input<string>('');
type = input<string>('text');
 private container = inject(ControlContainer);

  // Récupération du contrôle en question
  private control = computed(() => {
    return this.container?.control?.get(this.controlName())!;
  });

  // Affiche une erreur uniquement si champ touché ou dirty
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
    if (errors['email']) return 'Email invalide';
    if (errors['minlength']) return `Min. ${errors['minlength'].requiredLength} caractères`;
    if (errors['maxlength']) return `Max. ${errors['maxlength'].requiredLength} caractères`;

    return 'Champ invalide';
  });
}
