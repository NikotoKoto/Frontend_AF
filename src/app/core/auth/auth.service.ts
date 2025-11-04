import { inject, Injectable, signal } from '@angular/core';
import { User, UserForm } from './models/user.model';
import { HttpClient } from '@angular/common/http';

const API_AUTH_URL = 'http://localhost:8080/api/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

users = signal<User[]>([]);
private http = inject(HttpClient);

register(user : User){
  this.users.update(users => [...users, user])
  console.log(this.users());
};

login(userForm : UserForm){
  this.http.post<User>(`${API_AUTH_URL}/login`, userForm).subscribe({
    next: (user) => {
      console.log('Utilisateur connecté :', user);
    },
    error: (error) => {
      console.error('Erreur lors de la connexion :', error);
    }
  });
}
}
