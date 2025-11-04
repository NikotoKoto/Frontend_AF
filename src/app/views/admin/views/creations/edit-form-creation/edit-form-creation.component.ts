import { Component, output, inject, input } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CreationItem } from '../../../../main/views/our-creations/shared/creation-data';

@Component({
  selector: 'app-edit-form-creation',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form
      [formGroup]="form"
      (ngSubmit)="submit()"
      class="flex flex-col pt-10 gap-3 p-4 w-full max-w-[250px]"
    >
      <input
        formControlName="title"
        type="text"
        [placeholder]="item()?.title ?? 'Titre'"
        class="border border-gray-300 rounded-md px-2 py-1 text-sm"
      />
      <input
        formControlName="imageUrl"
        type="text"
        [placeholder]="item()?.imageUrl ?? 'URL image'"
        class="border border-gray-300 rounded-md px-2 py-1 text-sm"/>

      <div class="flex flex-col justify-between mt-2">
        <button
          type="submit"
          [disabled]="form.invalid"
          class="bg-rose-400 text-white rounded-md px-3 py-1 text-sm hover:bg-rose-300 disabled:bg-gray-300 transition"
        >
          Enregistrer
        </button>
        <button
          type="button"
          (click)="cancelEdit.emit()"
          class="text-gray-500 text-sm hover:text-rose-400 transition"
        >
          Annuler
        </button>
      </div>
    </form>
  `,
})
export class EditFormCreationComponent {
  fb = inject(FormBuilder);

  item = input<CreationItem>();
  updateCreation = output<CreationItem>();
  cancelEdit = output<void>();

  form = this.fb.nonNullable.group({
    title: ['', Validators.required],
    imageUrl: ['', Validators.required],
  });


  submit() {
    if (this.form.valid) {
      const updatedItem = {
        id: this.item()?.id,
        ...this.form.value,
      };
      this.updateCreation.emit(updatedItem as CreationItem);
    }
  }
}