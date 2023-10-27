import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignInComponent } from './sign-in.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/shared/shared.module';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let toastrService: ToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInComponent],
      providers: [
        AuthService, 
        ToastrService      
      ],
      imports: [
        ToastrModule.forRoot(),
        HttpClientTestingModule,
        SharedModule
      ]
    });
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call createSignInForm()', () => {
    spyOn(component, 'createSignInForm').and.callThrough();
  });

  it('should signIn() be called', () => {
    spyOn(component, 'signIn').and.callThrough();
  });

  it('should signIn() be called', () => {
    toastrService = TestBed.inject(ToastrService);
    spyOn(toastrService, 'success').and.callThrough();
    toastrService.success('Success test');
    expect(toastrService.success).toHaveBeenCalledWith('Success test');
  });
});
