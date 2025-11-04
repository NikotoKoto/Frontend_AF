import { Component, signal } from '@angular/core';
import { AdminImageCardComponent } from '../../../../../../shared/components/card/admin-image-card.component';
import {
  WEDDING_DATA,
  WeddingImage,
} from '../../../../../main/views/wedding/shared/datas/wedding-data';
import { CreationItem } from '../../../../../main/views/our-creations/shared/creation-data';
import { EditFormAccessoryComponent } from "./edit-form-accessory/edit-form-accessory.component";
import { AddFormAccessoryComponent } from "./add-form-accessory/add-form-accessory.component";

@Component({
  selector: 'app-accessory',
  imports: [AdminImageCardComponent, EditFormAccessoryComponent, AddFormAccessoryComponent],
  template: `
    <section class="p-6 flex flex-col">
      <h2 class="text-2xl font-semibold mb-6 text-gray-800 text-center">
        Accessoires
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          class="relative flex justify-center rounded-xl overflow-hidden border-gray-200 shadow-sm hover:shadow-md transition bg-white"
        >
          @if(isAccessoryAdd()){ 
            <app-add-form-accessory
            (cancelAddAccessory)="onCancelAddAccessory()"
            (addAccessory)="onAddNew($event)"
            />
          }@else {
          <button
            type="button"
            class="text-4xl hover: scale-105 hover:text-rose-400"
            (click)="onAdd()"
          >
            +
          </button>
        }
        </div>
       @for(item of datasAccessory(); track item.id){ 
            @if(editAccessoryId() === item.id){
          <app-edit-form-accessory
         [item]="item"
         (cancelEdit)="onCancelEditAccessory()"
         (editItemAccessory)="onEditAccessory($event)"/> 
        }
        @else {
          <app-admin-image-card
          [item]="item"
          (delete)="onDeleteAccessory($event)"
          (edit)="onEditId($event)"
          />
        }
      }
      </div>
    </section>
  `,
  styles: ``,
})
export class AccessoryComponent {
  datasAccessory = signal<WeddingImage[]>(WEDDING_DATA.accessory);
  isAccessoryAdd = signal(false);
  editAccessoryId = signal<number | null>(null);
  onCancelEditAccessory(){
    this.editAccessoryId.set(null);
  }
  onCancelAddAccessory(){
    this.isAccessoryAdd.set(false);
  }
  onEditId(id: number) {
    this.editAccessoryId.set(id);
  }
  onAdd() {
    this.isAccessoryAdd.set(true);
  }
  onAddNew(newItem : CreationItem){
    this.datasAccessory.update((list)=> [newItem,...list])
  }
  onDeleteAccessory(id: number) {
    this.datasAccessory.update((list) => list.filter((item) => item.id != id));
  }
  onEditAccessory(updateItemAccessory: CreationItem) {
    this.datasAccessory.update((list) =>
      list.map((item) =>
        item.id === updateItemAccessory.id ? updateItemAccessory : item
      )
    );
  }
}
