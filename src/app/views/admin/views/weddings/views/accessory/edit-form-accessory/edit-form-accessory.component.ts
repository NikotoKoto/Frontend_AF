import { Component, inject, input, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreationItem } from '../../../../../../main/views/our-creations/shared/creation-data';

@Component({
  selector: 'app-edit-form-accessory',
  imports: [ReactiveFormsModule],
  template: `
    <form
    [formGroup]="form"
    (ngSubmit)="submit()"
    class="flex flex-col pt-10 gap-3 p-4 w-full max-w-[250px]">
    <input
    formControlName="title"
    [placeholder]="item()?.title"
    class="border border-gray-300 rounded-md px-2 py-1 text-sm"/>
    <input
    formControlName="imageUrl"
    [placeholder]="item()?.imageUrl"
    class="border border-gray-300 rounded-md px-2 py-1 text-sm"/>
    <div class="flex flex-col justify-between mt-2">
      <button class="cursor-pointer bg-gray-300 hover:bg-rose-300 transtion disabled:bg-gray-200 rounded-md disabled:text-gray-400 text-white" aria-label="edit button" type="submit" [disabled]="form.invalid">Modifier</button>
      <button class="cursor-pointer rounded-md hover:text-rose-300" aria-label="cancel button" type="button" (click)="cancelEdit.emit()">Annuler</button>
    </div>
  `,
  styles: ``
})
export class EditFormAccessoryComponent {
item = input<CreationItem>();
editItemAccessory=output<CreationItem>();
cancelEdit=output<void>();

fb = inject(FormBuilder);
form= this.fb.group({
  title:['',Validators.required],
  imageUrl:['',Validators.required]
})

submit(){
if(this.form.valid){
  const updateItem = {
    id: this.item()?.id,
    ...this.form.value
  }
  this.editItemAccessory.emit(updateItem as CreationItem);
}
}
}
