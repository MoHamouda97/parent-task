import { Component } from '@angular/core';
import { SignInForm } from './form/sign-in-form';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { SignInResponse } from '../types/sign-in';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent extends SignInForm {
  form: FormGroup = this.createSignInForm();

  constructor(
    private router: Router, 
    private toastr: ToastrService,
    private service: AuthService) {
    super();
  }

  async signIn() {
    if (this.form.valid) {
      const token: SignInResponse = await lastValueFrom(this.service.signIn(this.form.getRawValue()));
  
      if (token.token) {
        this.toastr.success('You logged in successfully');
        this.router.navigate(['app/users'])
      }
    }
  }
}
