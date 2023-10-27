import { Component, OnDestroy, effect } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../services/users.service';
import { UsersSignalsService } from '../../signals/users-signals.service';
import { UserForm } from '../../form/user-form';
import { FormGroup } from '@angular/forms';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent extends UserForm implements OnDestroy {
  form: FormGroup = this.createUserForm();

  constructor(
    private service: UsersService,
    private toastr: ToastrService,
    public signal: UsersSignalsService
  ){
    super();

    effect(
      _ => {
        if (this.signal.currentUser()) {
          const name = `${this.signal.currentUser()?.first_name} ${this.signal.currentUser()?.last_name}`;
          this.form.get('name')?.setValue(name);
        }
      },
      {
        allowSignalWrites: true
      }
    )
  }

  //#region // HOOKS
  ngOnDestroy(): void {
    this.signal.currentUser.set(null);
  }
  //#endregion

  //#region // METHODS
  async addUser() {
    if (this.form.valid) {
      const user = await lastValueFrom(this.service.addUser(this.form.getRawValue()));
  
      if (user) {
        this.toastr.success('User created successfully');
        this.form.reset();
      }
    }
  }

  async editUser() {
    if (this.form.valid) {
      const user = await lastValueFrom(this.service.editUser(this.form.getRawValue(), this.signal.currentUser()?.id as number));
  
      if (user) {
        this.toastr.success('User edited successfully');        
      }
    }
  }
  //#endregion

}
