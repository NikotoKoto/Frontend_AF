import { Component, inject, input, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../core/auth/auth.service';
import { User } from '../../../core/auth/models/user.model';
import { ButtonComponent } from '../../../shared/components/button/button.component';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ButtonComponent],
  template: `
    <div
      class="min-h-screen bg-nude flex flex-col justify-center items-center"
    >
      @if(newAccount()){
      <h2 class="text-4xl md:text-6xl xl:text-8xl mb-6 text-rose-400">Créer un compte</h2>

      }@else {

      <h2 class="text-4xl md:text-6xl xl:text-8xl mb-6 text-rose-400">Se connecter</h2>
      }
      <span class="inline-block h-[2px] w-24 bg-[#dceae0] my-10"></span>
      <form class="px-20 py-5 bg-[#fef9f9]" [formGroup]="loginForm" (submit)="onSubmit()">
        <div class="md:grid md:grid-cols-2 md:gap-6">
          @if(newAccount()){
          <div class="mb-10 flex  flex-col ">
            <label class="text-rose-400" for="name">Nom</label>
            <input
              id="name"
              formControlName="name"
              type="text"
              class="w-full rounded-md p-2 border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300 transition duration-150 ease-in-out"
            />
          </div>
          <div class="mb-10 flex flex-col">
            <label class="text-rose-400" for="firstname">Prenom</label>
            <input
              id="firstname"
              formControlName="firstname"
              type="text"
              class="w-full rounded-md p-2 border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300 transition duration-150 ease-in-out"
            />
          </div>
        }
        </div>
        <div class="mb-10 flex flex-col">
          <label class="text-rose-400" for="email">Email</label>
          <input
            id="email"
            formControlName="email"
            type="email"
            class="w-full rounded-md p-2 border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300 transition duration-150 ease-in-out"
          />
        </div>
        <div class="mb-10 flex flex-col">
          <label class="text-rose-400" for="password">Mot de passe</label>
          <input
            id="password"
            formControlName="password"
            type="password"
            class="w-full rounded-md p-2 border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300 transition duration-150 ease-in-out"
          />
        </div>
        <app-button
          label="S'inscrire"
          [disabled]="loginForm.invalid"
        ></app-button>
      </form>
      @if(!newAccount()){
        <a
          class="cursor-pointer mt-5 hover:text-rose-400"
          (click)="isNewAccount()"
          >Pas de compte florale ? Inscrivez vous !</a>
      }@else {
        <a
          class="cursor-pointer mt-5 hover:text-rose-400"
          (click)="isNewAccount()"
          >Déjà un compte ? Connectez vous ! </a>
      }
    </div>
  `,
  styles: `
  
`
  ,
})
export class LoginComponent {
  private authService = inject(AuthService);
  newAccount = signal(false);
  private fb = inject(FormBuilder);
  loginForm = this.fb.group({
    name: ['', Validators.required],
    firstname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  onSubmit() {
    if (this.newAccount()) {
      this.authService.register(this.loginForm.value as User);
    } else {
      
    }
  }
  isNewAccount() {
    this.newAccount.set(!this.newAccount());
  }
}
