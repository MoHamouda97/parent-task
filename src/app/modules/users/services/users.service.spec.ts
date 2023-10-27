import { TestBed } from "@angular/core/testing";
import { UsersService } from "./users.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

let service: UsersService;

beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [UsersService]
    })    
})

it('should call getUsers', () => {  
    service = TestBed.inject(UsersService);  
    spyOn(service, 'getUsers').and.callThrough();
    service.getUsers(1);
})

it('should call getUser', () => {  
    service = TestBed.inject(UsersService);  
    spyOn(service, 'getUser').and.callThrough();
})

it('should call deleteUser', () => {  
    service = TestBed.inject(UsersService);  
    spyOn(service, 'deleteUser').and.callThrough();
})

it('should call addUser', () => {  
    service = TestBed.inject(UsersService);  
    spyOn(service, 'addUser').and.callThrough();
})

it('should call editUser', () => {  
    service = TestBed.inject(UsersService);  
    spyOn(service, 'editUser').and.callThrough();
})