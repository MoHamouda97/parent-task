import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromUsers from "../reducers/users.reducers";
import { UsersState } from "../reducers/users.reducers";

export const selectUsersState = createFeatureSelector<UsersState>('Users');

export const selectAllUsers = createSelector(
    selectUsersState,
    fromUsers.selectAll
)

export const selectUsers = createSelector(
    selectAllUsers,
    (Users: any, props: any) => Users.filter((Users: any) => Users.id === props.id)
)

export const isUsersLoaded = createSelector(
    selectUsersState,
    state => state.UsersLoaded
)