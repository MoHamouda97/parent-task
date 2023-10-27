import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignInComponent } from './sign-in.component';

@NgModule({
    declarations: [
        SignInComponent
    ],
    imports: [
        SharedModule
    ]
})
export class SignInModule {}
