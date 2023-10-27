import { FormControl, FormGroup, Validators } from "@angular/forms";

export abstract class UserForm {
    
    createUserForm(): FormGroup {
        return new FormGroup({
            name: new FormControl<string>('', Validators.required),
            job: new FormControl<string>('', Validators.required),
        })
    }

}