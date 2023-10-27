import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { finalize, first, Observable, tap } from "rxjs";
import { AppState } from "src/app/reducers";
import { getUsers } from "src/app/store/users/users.actions";
import { isUsersLoaded } from "src/app/store/users/users.selectors";

@Injectable({
    providedIn: 'any'
})

export class AllUsersResolver  {
    loading = false;

    constructor(private stroe: Store<AppState>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any> {
        return this.stroe
            .pipe(
                select(isUsersLoaded),
                tap((UsersLoaded) => {
                    if (!this.loading && !UsersLoaded) {
                        this.stroe.dispatch(getUsers());
                    }
                }),
                first(),
                finalize(() => this.loading = false)
            )
    }
}