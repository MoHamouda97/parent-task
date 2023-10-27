import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { UsersService } from "../services/users.service";
import { User } from "../types/users";

@Injectable({
    providedIn: 'any'
})

export class UserResolver  {

    constructor(private service: UsersService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<User | null> {
        const id: any = route.paramMap.get('id');

        return this.service.getUser(id);
    }
}