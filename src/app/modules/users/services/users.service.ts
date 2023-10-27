import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AllUsers, User, UserDTO, UserResponse } from '../types/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(page: number): Observable<AllUsers | null> {
    return this.http.get<AllUsers>(`${environment.api}users?page=${page}`).pipe(
      catchError(_ => of(null))
    )
  }

  getUser(id: number): Observable<User | null> {
    return this.http.get<User>(`${environment.api}users/${id}`).pipe(
      map((data: any) => data.data),
      catchError(_ => of(null))
    )
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${environment.api}users/${id}`).pipe(
      catchError(_ => of(null))
    )
  }

  addUser(dto: UserDTO): Observable<UserResponse | null> {
    return this.http.post<UserResponse>(`${environment.api}users`, dto).pipe(
      catchError(_ => of(null))
    )
  }

  editUser(dto: UserDTO, id: number): Observable<UserResponse | null> {
    return this.http.put<UserResponse>(`${environment.api}users/${id}`, dto).pipe(
      catchError(_ => of(null))
    )
  }

}
