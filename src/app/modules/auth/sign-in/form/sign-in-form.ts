import { FormControl, FormGroup, Validators } from "@angular/forms";

export abstract class SignInForm {
    
    createSignInForm(): FormGroup {
        return new FormGroup({
            email: new FormControl<string>('', [Validators.required, Validators.email]),
            password: new FormControl<string>('', Validators.required),
        })
    }

}