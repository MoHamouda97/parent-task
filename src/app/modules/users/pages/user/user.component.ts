import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../types/users';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UsersSignalsService } from '../../signals/users-signals.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user!: User;
  $destroy = new Subject();
  
  constructor(private route: ActivatedRoute, public signal: UsersSignalsService) { }

  //#region // HOOKS
  ngOnInit(): void {
    this.getDataFromRoute();
  }

  ngOnDestroy(): void {
    this.$destroy.next(null);
    this.$destroy.complete();
  }
  //#endregion

  //#region // METHODS
  getDataFromRoute() {
    this.route.data.pipe(
      takeUntil(this.$destroy)
    ).subscribe(
      (data: any) => {
        this.user = data['user'];
      }
    )
  } 
  //#endregion
}
