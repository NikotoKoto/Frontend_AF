import { Component, input, output } from '@angular/core';
import { CreationItem } from '../../../views/main/views/our-creations/shared/creation-data';

@Component({
  selector: 'app-admin-image-card',
  standalone: true,
  imports: [],
  template: `
    <div
      class="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition bg-white"
    >
  
      <button
        type="button"
        (click)="onDeleteClick()"
        class="absolute top-1 right-1 flex items-center justify-center 
        text-red-600 
        cursor-pointer hover:scale-110 
        transition-transform duration-200"
        aria-label="Supprimer cette image"
      >
        ✖
      </button>


      <button
        type="button"
        (click)="onEditClick()"
        class="absolute top-1 left-1 flex items-center justify-center 
         text-gray-600 
       cursor-pointer hover:scale-110 
        transition-transform duration-200"
        aria-label="Éditer cette image"
      >
        ✏️
      </button>

    
      <img
        [src]="item()?.imageUrl"
        [alt]="item()?.title"
        class="w-full h-[180px] object-cover"
      />

      <!-- Texte -->
      <div class="p-3 text-center">
        <p class="text-sm font-medium text-gray-700">
          {{ item()?.title }}
        </p>
      </div>
    </div>
  `,
})
export class AdminImageCardComponent {

  item = input<CreationItem>();

  delete = output<number>();
  edit = output<number>();
  onEditClick(){
    const id = this.item()?.id;
    if(id!= null) this.edit.emit(id);
  }

  onDeleteClick(){
    const id = this.item()?.id;
    if(id!= null) this.delete.emit(id);
  }
}