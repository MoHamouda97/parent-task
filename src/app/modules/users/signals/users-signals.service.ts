import { Injectable, signal } from '@angular/core';
import { User, UserPages } from '../types/users';

@Injectable({
  providedIn: 'root',
})
export class UsersSignalsService {
  userPages = signal<UserPages| null>(null);
  currentUser = signal<User | null>(null);
}
