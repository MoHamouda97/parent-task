import { Route } from "@angular/router";
import { SignInComponent } from "./modules/auth/sign-in/sign-in.component";
import { LayoutComponent } from "./layout/layout.component";
import { UsersComponent } from "./modules/users/users.component";

export const appRoutes: Route[] = [
    // Redirect empty path to 'sign-in'
    {path: '', pathMatch : 'full', redirectTo: 'sign-in'}, 
    
    {
        path: '',
        component: SignInComponent,
        children: [
            {
                path: 'sign-in',
                loadChildren: () => import('./modules/auth/sign-in/sign-in.module').then(m => m.SignInModule)
            }
        ]
    },

    {
        path: 'app',
        component: LayoutComponent,
        children: [
            {
                path: 'users',
                component: UsersComponent,
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
                    }
                ]
            }
        ]
    }
] 