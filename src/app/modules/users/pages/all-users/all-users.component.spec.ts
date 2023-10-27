import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AllUsersComponent } from './all-users.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';

describe('AllUsersComponent', () => {
  let component: AllUsersComponent;
  let fixture: ComponentFixture<AllUsersComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllUsersComponent],
      imports: [
        StoreModule,
        HttpClientTestingModule,
        ToastrModule.forRoot(),
      ],
      providers: [provideMockStore({})]
    });
    fixture = TestBed.createComponent(AllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should call getUsers()', () => {
    spyOn(component, 'getUsers').and.callThrough();
  });   
  
  it('should call confirmDelete()', () => {
    spyOn(component, 'confirmDelete').and.callThrough();
  });   
  
  it('should call loadMore()', () => {
    spyOn(component, 'loadMore').and.callThrough();
  });   
  
  it('should call deleteUser()', () => {
    spyOn(component, 'deleteUser').and.callThrough();
  });   
   
});
