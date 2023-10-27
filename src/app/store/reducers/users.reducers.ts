import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on, State } from "@ngrx/store";
import { UsersActions } from "../users/users.action-types";

export interface UsersState extends EntityState<any> {
    UsersLoaded: boolean
}

export const adapter = createEntityAdapter<any>({
    selectId: Users => Users.id
})

export const initUserssState = adapter.getInitialState({
    UsersLoaded: false
})

export const UsersReducer = createReducer(
    initUserssState,
    on(UsersActions.UsersLoaded, (state, action) => adapter.addMany(action.Users, {...state, UsersLoaded: true})),
    on(UsersActions.MoreUsersLoaded, (state, action) => adapter.addMany(action.Users, state)),
    on(UsersActions.UserUpdated, (state, action) => adapter.updateOne(action.update, state)),
    on(UsersActions.UserDeleted, (state, action) => adapter.removeOne(action.id, state))    
)

export const {selectAll} = adapter.getSelectors();