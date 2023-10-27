import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { usersRouting } from "./users.routing";
import { UsersComponent } from "./users.component";
import { AllUsersComponent } from "./pages/all-users/all-users.component";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { UsersEffect } from "src/app/store/users/users.effect";
import { UsersReducer } from "src/app/store/reducers/users.reducers";
import { SharedModule } from "src/app/shared/shared.module";
import { AddEditUserComponent } from "./pages/add-edit-user/add-edit-user.component";
import { UserComponent } from "./pages/user/user.component";

@NgModule({
    declarations: [
        UsersComponent,
        AllUsersComponent,
        AddEditUserComponent,
        UserComponent
    ],
    imports: [
        RouterModule.forChild(usersRouting),
        EffectsModule.forFeature([
            UsersEffect
        ]),
        StoreModule.forFeature('Users', UsersReducer), 
        SharedModule
    ],
    providers: []
})
export class UsersModule {}