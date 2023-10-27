import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    private _show$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    get show$(): Observable<boolean> {
        return this._show$.asObservable();
    }

    show(): void {
        this._show$.next(true);
    }

    hide(): void {
        this._show$.next(false);
    }
}
