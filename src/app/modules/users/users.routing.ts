import { Route } from "@angular/router";
import { AllUsersComponent } from "./pages/all-users/all-users.component";
import { AllUsersResolver } from "./resolvers/all-users.resolver";
import { AddEditUserComponent } from "./pages/add-edit-user/add-edit-user.component";
import { UserComponent } from "./pages/user/user.component";
import { UserResolver } from "./resolvers/user.resolver copy";

export const usersRouting: Route[] = [
    {
        path: '',
        component: AllUsersComponent,
        resolve: {
            users: AllUsersResolver
        }
    },
    {
        path: 'add',
        component: AddEditUserComponent
    },
    {
        path: 'edit',
        component: AddEditUserComponent
    },
    {
        path: 'view/:id',
        component: UserComponent,
        resolve: {
            user: UserResolver
        }
    }
]