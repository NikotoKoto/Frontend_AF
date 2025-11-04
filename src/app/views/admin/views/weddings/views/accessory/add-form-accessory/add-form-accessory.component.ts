import { Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { CreationItem } from '../../../../../../main/views/our-creations/shared/creation-data';

@Component({
  selector: 'app-add-form-accessory',
  imports: [ReactiveFormsModule],
  template: `
    <form
    [formGroup]="form"
    (ngSubmit)="submit()"
    class="flex flex-col gap-3 p-4 w-full max-w-[250px]">
    <input
    formControlName="title"
    type="text"
    placeholder="Title"
    class="border border-gray-300 rounded-md mx-2 py-1 text-sm"/>
    <input
    formControlName="ImageUrl"
    type="text"
    placeholder="ImageUrl"
    class="border border-gray-300 rounded-md mx-2 py-1 text-sm"/>
    <div class="flex flex-col justify-between mt-2 gap-4">
      <button 
      aria-label="submit button"
      type="submit"
      [disabled]="form.invalid"
      class="bg-rose-400 text-white rounded-md mx-3 py-1 text-sm hover:bg-rose-300 disabled: bg-gray-300 transition">Enregistrer
      </button>

      <button
      aria-label="cancel button"
      type="button"
      (click)="cancelAddAccessory.emit()"
      class="bg-gray-400 text-white rounded-md mx-3 py-1 text-sm hover:bg-rose-300 transition">
      Annuler</button>
    </div>
    </form>
    `,
  styles: ``
})
export class AddFormAccessoryComponent {
fb = inject(FormBuilder);
addAccessory= output<CreationItem>();
cancelAddAccessory=output<void>();
form = this.fb.group({
  title:['',Validators.required],
  imageUrl:['',Validators.required]
})

submit(){
  if(this.form.valid){
    const newItem ={
      id: Date.now(),
      ...this.form.value,
    }
    this.addAccessory.emit(newItem as CreationItem);
    this.form.reset();
  }
}
}
