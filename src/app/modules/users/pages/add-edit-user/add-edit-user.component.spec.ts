import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditUserComponent } from './add-edit-user.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from 'src/app/shared/shared.module';

describe('AddEditUserComponent', () => {
  let component: AddEditUserComponent;
  let fixture: ComponentFixture<AddEditUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditUserComponent],
      imports: [
        ToastrModule.forRoot(),
        HttpClientTestingModule,
        SharedModule
      ]
    });
    fixture = TestBed.createComponent(AddEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addUser()', () => {
    spyOn(component, 'addUser').and.callThrough();
    component.addUser()
  });  

  it('should call editUser()', () => {
    spyOn(component, 'editUser').and.callThrough();
    component.addUser()
  });  
});
