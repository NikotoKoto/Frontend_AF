import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-contact-us-form',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent],
  template: `
    <section id="contactUs" class="max-w-6xl mx-auto px-6 pb-12">
      <div class="p-6 md:p-8">
        <h3 class="text-center text-4xl md:text-6xl xl:text-8xl font-heading mb-4">
          Nous contacter
        </h3>
        <div class="mt-6 flex items-center justify-center">
          <span class="inline-block h-[1px] w-24 bg-rose-400"></span>
        </div>

        <form
          [formGroup]="form"
          (ngSubmit)="submit()"
          class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <!-- Type de demande -->
          <div class="col-span-1 md:col-span-2">
            <label for="kindOfAsk" class="text-sm font-medium block mb-2">Type de demande :</label>
            <div class="flex items-center gap-6">
              <label class="flex items-center gap-2">
                <input id="kindOfAsk" type="radio" formControlName="type" value="info" />
                <span>Demande d'information</span>
              </label>
              <label class="flex items-center gap-2">
                <input type="radio" formControlName="type" value="rendezvous" />
                <span>Prise de rendez-vous</span>
              </label>
            </div>
          </div>

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
            <label class="text-sm" for="email">Email</label>
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
           <!-- Téléphone -->
            <div class="col-span-1">
              <label class="text-sm" for="phone">Téléphone</label>
              <input
                id="phone"
                type="tel"
                placeholder="+33 6 12 34 56 78"
                formControlName="phone"
                class="w-full rounded-lg border border-rose-200 focus:border-rose-400 focus:ring-rose-400 px-3 py-2 outline-none"
              />
              @if(form.get('phone')?.touched && form.get('phone')?.invalid) {
                <p class="text-red-500 text-sm mt-1">Ce champ est requis</p>
              }
            </div>


          <!-- Champs spécifiques à la prise de rendez-vous -->
          @if(form.get('type')?.value === 'rendezvous') {

           
            <!-- Date -->
            <div class="col-span-1">
              <label class="text-sm" for="date">Date souhaitée</label>
              <input
                id="date"
                type="date"
                formControlName="date"
                (change)="checkAllowedDay()"
                class="w-full rounded-lg border border-rose-200 focus:border-rose-400 focus:ring-rose-400 px-3 py-2 outline-none"
              />
              @if(form.get('date')?.hasError('invalidDay')) {
                <p class="text-red-500 text-sm mt-1">
                  ⚠️ Les rendez-vous ne sont disponibles que le mercredi et le samedi.
                </p>
              }
            </div>

            <!-- Heure -->
            <div class="col-span-1 md:col-span-2">
              <label class="text-sm" for="time">Heure souhaitée</label>
              <input
                id="time"
                type="time"
                formControlName="time"
                class="w-full md:w-1/2 rounded-lg border border-rose-200 focus:border-rose-400 focus:ring-rose-400 px-3 py-2 outline-none"
              />
              @if(form.get('time')?.touched && form.get('time')?.invalid) {
                <p class="text-red-500 text-sm mt-1">Ce champ est requis</p>
              }
            </div>
          }

          <!-- Message -->
          <div class="col-span-1 md:col-span-2">
            <label class="text-sm" for="message">Message</label>
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
    type: ['info', Validators.required],
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    date: [''],
    time: [''],
    message: ['', Validators.required],
  });

  // 🧠 Vérifie si la date choisie est mercredi (3) ou samedi (6)
  private allowedDaysValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null;

    const day = new Date(value).getDay();
    return day === 3 || day === 6 ? null : { invalidDay: true };
  }

  // Appelé quand l'utilisateur modifie la date
  checkAllowedDay() {
    const dateControl = this.form.get('date');
    const error = this.allowedDaysValidator(dateControl!);
    if (error) {
      dateControl?.setErrors(error);
    } else {
      dateControl?.setErrors(null);
    }
  }

  submit() {
    const type = this.form.get('type')?.value;

    // Validation dynamique pour les rendez-vous
    if (type === 'rendezvous') {
      this.form.get('phone')?.addValidators(Validators.required);
      this.form.get('date')?.addValidators([Validators.required]);
      this.form.get('time')?.addValidators(Validators.required);
      this.form.updateValueAndValidity();
    }

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('✅ Formulaire envoyé :', this.form.value);
    this.form.reset({ type });
  }
}