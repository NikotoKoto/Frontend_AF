import { Component, inject, input, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreationItem } from '../../../../../../main/views/our-creations/shared/creation-data';

@Component({
  selector: 'app-edit-form-place',
  imports: [ReactiveFormsModule],
  template: `
   <form
   [formGroup]="form"
   (ngSubmit)="submit()"
   class="flex flex-col gap-3 p-4 w-full max-w-[250px]">
  <input
  formControlName="title"
  type="text"
  [placeholder]="item()?.title"
  class="border border-gray-300 rounded-md px-2"/>
  <input
  formControlName="imageUrl"
  type="text"
  [placeholder]="item()?.imageUrl"
  class="border border-gray-300 rounded-md px-2"
  />
  <div class="flex flex-col justify-between gap-2 mt-2">
    <button
    type="submit"
    [disabled]="form.invalid"
    class="bg-rose-400 text-white rounded-md px-3 py-1 text-sm hover:bg-rose-300 disabled: bg-gray-300 transition "
    >Modifier</button>
     <button
    type="button"
    (click)="cancelEditPlace.emit()"
    class="bg-rose-400 text-white rounded-md px-3 py-1 text-sm hover:bg-rose-300 disabled: bg-gray-300 transition "
    >Annuler</button>
  </div>
  </form>

  `,
  styles: ``
})
export class EditFormPlaceComponent {
item = input<CreationItem>();
cancelEditPlace=output<void>();
updatePlace = output<CreationItem>();

fb = inject(FormBuilder);
form= this.fb.group({
  title:['',Validators.required],
  imageUrl:['',Validators.required]
});

submit(){
 
  if(this.form.valid){
    const updateItem ={
      id:this.item()?.id,
      ...this.form.value
    };
    this.updatePlace.emit(updateItem as CreationItem);
  }
}
}
