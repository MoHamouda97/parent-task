import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, of } from 'rxjs';
import { SignIn, SignInResponse } from '../types/sign-in';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private httpClient: HttpClient) {}

    signIn(dto: SignIn): Observable<SignInResponse> {
        return this.httpClient.post<SignInResponse>(`${environment.api}login`, dto).pipe(
            catchError(_ => of({token: null}))
        )
    }
}
