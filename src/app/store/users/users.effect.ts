import { Injectable, signal } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs';
import { UsersActions } from './users.action-types';
import { UsersLoaded } from './users.actions';
import { UsersService } from 'src/app/modules/users/services/users.service';
import { AllUsers, User } from "src/app/modules/users/types/users";
import { UsersSignalsService } from 'src/app/modules/users/signals/users-signals.service';

@Injectable()

export class UsersEffect {

    loadUsers$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(UsersActions.getUsers),
                concatMap(_ =>  {
                    return this.service.getUsers(1)
                }),
                map(data => {
                    const Users = data?.data as User[];
                    this.signal.userPages.set({
                        page: data?.page,
                        per_page: data?.per_page,
                        total: data?.total,
                        total_pages: data?.total_pages
                    } as AllUsers)
                    return UsersLoaded({Users})
                })
            )
    )

    constructor(
        private actions$: Actions, 
        private service: UsersService,
        private signal: UsersSignalsService) {}

}