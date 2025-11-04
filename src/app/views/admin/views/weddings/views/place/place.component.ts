import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeddingImage, WEDDING_DATA } from '../../../../../main/views/wedding/shared/datas/wedding-data';
import { AdminImageCardComponent } from "../../../../../../shared/components/card/admin-image-card.component";
import { AddFormPlaceComponent } from "./add-form-place/add-form-place.component";
import { CreationItem } from '../../../../../main/views/our-creations/shared/creation-data';
import { EditFormPlaceComponent } from "./edit-form-place/edit-form-place.component";

@Component({
  selector: 'app-place',
  standalone: true,
  imports: [CommonModule, AdminImageCardComponent, AddFormPlaceComponent, EditFormPlaceComponent],
  template: `
    <section class="p-6 flex flex-col">
      <h2 class="text-2xl font-semibold mb-6 text-gray-800 text-center">
        Lieux de réception
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          class="relative flex justify-center rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition bg-white"
        >
          @if(isAdd()){
         <app-add-form-place
         (cancelAddCreation)="cancelAdd()"
         (add)="onAddNew($event)"/>
          }@else {

          <button
            class="text-4xl hover:scale-105 hover:text-rose-400 "
            (click)="onAdd()"
          >
            +
          </button>
          }
        </div>
        @for (item of datas(); track item.id) {
          
          @if(editId()=== item.id){
            <app-edit-form-place
            [item]="item"
            (updatePlace)="onUpdate($event)"
            (cancelEditPlace)="cancelEdit()"/>
          }@else {
            <app-admin-image-card
          [item]="item"
          (delete)="onDelete($event)"
          (edit)="onEdit($event)"
          />
          }
        }
      </div>
    </section>
  `,
})
export class PlaceComponent {
  datas=signal<WeddingImage[]>(WEDDING_DATA.place);
  isAdd = signal<boolean>(false);
  editId = signal<number|null>(null); 
  onAdd(){
    this.isAdd.set(true);
  }
  cancelEdit(){
    
    this.editId.set(null);
  }
  cancelAdd(){
    this.isAdd.set(false);
  }
  onDelete(id : number){
    this.datas.update((list)=> list.filter((item)=> item.id != id))
  }

  onAddNew(newItem : CreationItem){
    this.datas.update((list)=> [newItem,...list])
  }
  onEdit(id :number){
    this.editId.set(id);
  }
  onUpdate(updatePlace: CreationItem){
    this.datas.update((list)=> list.map((item)=> item.id === updatePlace.id ? updatePlace : item ))
    this.editId.set(null);
  }
}