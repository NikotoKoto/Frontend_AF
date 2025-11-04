import { Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreationItem } from '../../../../../../main/views/our-creations/shared/creation-data';

@Component({
  selector: 'app-add-form-place',
  imports: [ReactiveFormsModule],
  template: `
    <form
      [formGroup]="form"
      (submit)="submit()"
      class="flex flex-col gap-3 p-4 w-full max-w-[250px]"
    >
      <input
        formControlName="title"
        type="text"
        placeholder="Titre"
        class="border border-gray-300 rounded-md mx-2 py-1 text-sm"
      />
      <input
        formControlName="imageUrl"
        type="text"
        placeholder="Image"
        class="border border-gray-300 rounded-md mx-2 py-1 text-sm"
      />

      <div class="flex flex-col justify-between mt-2">
        <button
          type="submit"
          [disabled]="form.invalid"
          class="bg-rose-400 text-white rounded-md mx-3 py-1 text-sm hover:bg-rose-300 disabled:bg-gray-300 transition"
        >
          Ajouter
        </button>
        <button type="button"
        (click)="cancelAddCreation.emit()"
        class="text-gray-500 text-sm hover:text-rose-400 transition">Annuler</button>
      </div>
    </form>
  `,
  styles: ``,
})
export class AddFormPlaceComponent {
  fb= inject(FormBuilder);
  add= output<CreationItem>();
  cancelAddCreation = output<void>();
  form=this.fb.group({
    title:['',Validators.required],
    imageUrl:['',Validators.required]
  });

  submit(){
    if(this.form.valid){
      const newItem = {
        id:Date.now(),
        ...this.form.value,
      };
      this.add.emit(newItem as CreationItem);
      this.form.reset()
    }
  }
}
