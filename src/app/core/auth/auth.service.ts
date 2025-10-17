import { Injectable, signal } from '@angular/core';
import { User, UserForm } from './models/user.model';

const API_AUTH_URL = 'http://localhost:8080/api/auth';
const API_USERS_URL = '';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

users = signal<User[]>([]);


register(user : User){
  this.users.update(users => [...users, user])
  console.log(this.users());
};
}
