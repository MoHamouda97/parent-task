import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { User } from "src/app/modules/users/types/users";

export const getUsers = createAction(
    "[Users Resolver] Get Users"
);

export const UsersLoaded = createAction(
    "[Load Users Effect] Users Loaded",
    props<{Users: User[]}>()
);


export const MoreUsersLoaded = createAction(
    "[More Users] More Users Loaded",
    props<{Users: User[]}>()
);

export const UserUpdated = createAction(
    "[Update User] User Updated",
    props<{update: Update<User>}>()
);

export const UserDeleted = createAction(
    "[Delete User] User Deleted",
    props<{id: number}>()
);