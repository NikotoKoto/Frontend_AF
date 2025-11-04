import { Component, signal } from '@angular/core';
import {
  CreationItem,
  CREATIONS_DATA,
} from '../../../main/views/our-creations/shared/creation-data';
import { AddFormCreationComponent } from './addFormCreation/add-form-creation.component';
import { EditFormCreationComponent } from './edit-form-creation/edit-form-creation.component';
import { AdminImageCardComponent } from '../../../../shared/components/card/admin-image-card.component';

@Component({
  selector: 'app-creations',
  standalone: true,
  imports: [
    AddFormCreationComponent,
    EditFormCreationComponent,
    AdminImageCardComponent,
  ],
  template: `
    <section class="p-6">
      <h2 class="text-2xl font-semibold mb-6 text-gray-800">
        Ajouter / Modifier une donnée
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div
          class="relative flex justify-center rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition bg-white"
        >
          @if(isAdd()){
          <app-add-form-creation
            (cancelAddCreation)="cancelAdd()"
            (add)="onAddNew($event)"
          />
          }@else {

          <button
            class="text-4xl hover:scale-105 hover:text-rose-400 "
            (click)="onAdd()"
          >
            +
          </button>
          }
        </div>
        @for (item of creations(); track item.id) {
           @if (editId() === item.id) {
        <app-edit-form-creation
          [item]="item"
          (updateCreation)="onUpdate($event)"
          (cancelEdit)="cancelEdit()"
        />
        }@else {
        <app-admin-image-card
          [item]="item"
          (delete)="onDelete($event)"
          (edit)="onEdit($event)"
        />
        } }
      </div>
    </section>
  `,
})
export class CreationsComponent {
  creations = signal(CREATIONS_DATA);
  isAdd = signal(false);
  editId = signal<number | null>(null);
  cancelAdd() {
    this.isAdd.set(false);
  }
  onDelete(id: number) {
    this.creations.update((c) => c.filter((m) => m.id != id));
  }
  onAdd() {
    this.isAdd.set(true);
  }
  onEdit(id: number) {
    this.editId.set(id);
  }
  onAddNew(newItem: CreationItem) {
    this.creations.update((list) => [newItem, ...list]);
    this.isAdd.set(false);
  }
  onUpdate(itemUpdate: CreationItem) {
    this.creations.update((list) =>
      list.map((item) => (item.id === itemUpdate.id ? itemUpdate : item))
    );
    this.editId.set(null);
  }
  cancelEdit() {
    this.editId.set(null);
  }
}
