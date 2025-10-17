import { Component, inject, input } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ControlContainer, FormBuilder, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputFieldsComponent } from '../../../../shared/components/form-fields/input-fields.component';
import { MessageFieldsComponent } from "../../../../shared/components/form-fields/message-fields.component";

@Component({
  selector: 'app-contact-us-form',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, InputFieldsComponent, MessageFieldsComponent],
  template: `
    <section id="contactUs" class="max-w-6xl mx-auto px-6 pb-12">
      <div class="  p-6 md:p-8">
        <h3
          class="text-center text-4xl md:text-6xl xl:text-8xl  font-heading  mb-4"
        >
          Nous contacter
        </h3>
        <div class="mt-6 flex items-center justify-center">
          <span class="inline-block h-[1px] w-24 bg-rose-400"></span>
        </div>
      <form
          [formGroup]="form"
          (submit)="submit()"
          class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <!-- Nom -->
          <div class="col-span-1">
            <label class="block text-sm mb-1" for="name">Nom</label>
            <input
              id="name"
              type="text"
              formControlName="name"
              class="w-full rounded-lg border border-rose-200 focus:border-rose-400 focus:ring-rose-400 px-3 py-2 outline-none"
            />
            @if(form.get('name')?.touched && form.get('name')?.invalid) {
              <p class="text-red-500 text-sm mt-1">Ce champ est requis</p>
            }
          </div>

          <!-- Email -->
          <div class="col-span-1">
            <label class=" text-sm " for="email">Email</label>
            <input
              id="email"
              type="email"
              formControlName="email"
              class="w-full rounded-lg border border-rose-200 focus:border-rose-400 focus:ring-rose-400 px-3 py-2 outline-none"
            />
            @if(form.get('email')?.touched && form.get('email')?.hasError('required')) {
              <p class="text-red-500 text-sm mt-1">Ce champ est requis</p>
            }
            @if(form.get('email')?.touched && form.get('email')?.hasError('email')) {
              <p class="text-red-500 text-sm mt-1">Email invalide</p>
            }
          </div>

          <!-- Message -->
          <div class="col-span-1 md:col-span-2">
            <label class=" text-sm " for="message">Message</label>
            <textarea
              id="message"
              rows="4"
              formControlName="message"
              class="w-full rounded-lg border border-rose-200 focus:border-rose-400 focus:ring-rose-400 px-3 py-2 outline-none"
            ></textarea>
            @if(form.get('message')?.touched && form.get('message')?.invalid) {
              <p class="text-red-500 text-sm mt-1">Ce champ est requis</p>
            }
          </div>

          <!-- Bouton -->
          <div class="col-span-1 md:col-span-2 flex justify-end">
            <button
              type="submit"
              class="w-[250px] h-[40px] mt-4 bg-rose-400 text-white py-2 rounded hover:bg-rose-300 transition cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400 flex justify-center items-center gap-2"
              [disabled]="form.invalid"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </section>
  `,
})
export class ContactUsFormComponent {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('✅ Formulaire envoyé :', this.form.getRawValue);
    this.form.reset();
  }
}