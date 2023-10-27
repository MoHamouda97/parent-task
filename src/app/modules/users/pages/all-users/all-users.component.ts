import { Component, OnDestroy, OnInit, effect } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { AppState } from 'src/app/reducers';
import { UsersService } from '../../services/users.service';
import { Subject, lastValueFrom, takeUntil } from 'rxjs';
import { selectAllUsers } from 'src/app/store/users/users.selectors';
import { User, UserPages } from '../../types/users';
import { UsersSignalsService } from '../../signals/users-signals.service';
import { MoreUsersLoaded, UserDeleted } from 'src/app/store/users/users.actions';
import Swal from 'sweetalert2';
import { ScreenSizeSignals } from 'src/app/shared/signals/screen-size.signals';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit, OnDestroy {
  users: User[] = [];
  current: number = 1;
  totalPages: number = 1;
  $destroy: Subject<null> = new Subject<null>();
  
  constructor (
    private store: Store<AppState>,
    private service: UsersService,
    private toastr: ToastrService,
    public signal: UsersSignalsService,
    public screen: ScreenSizeSignals) {
      effect(
        _ => {
          this.current = this.signal.userPages()?.page as number;
          this.totalPages = this.signal.userPages()?.total_pages as number;
        },
        {
          allowSignalWrites: true,
        }
      )
    }

  //#region // HOOKS
  ngOnInit(): void {
    this.getUsers();    
  }

  ngOnDestroy(): void {
    this.$destroy.next(null);
    this.$destroy.complete();
  }   
  //#endregion

  //#region // GETTERS
  get hasMore(): boolean {
    return this.current < this.totalPages;
  }
  //#endregion

  //#region // METHODS
  getUsers(): void {
    this.store
    .pipe(
      takeUntil(this.$destroy),
      select(selectAllUsers)
    ).subscribe(
      (users: User[]) => {
        this.users = users
      }
    )
  }

  confirmDelete(id: number) {
    Swal.fire({
      icon: 'question',
      title: 'Do you want to delete this user?'
    }).then(res => {
      if (res.isConfirmed) this.deleteUser(id);
    })
  }
  //#endregion

  //#region // HTTP
  async loadMore() {
    this.current += 1;
    const users = await lastValueFrom(this.service.getUsers(this.current));

    if (users) {
      const Users = users.data as User[];
      this.signal.userPages.set({page: users?.page, per_page: users?.per_page, total: users?.total, total_pages: users?.total_pages})      
      this.store.dispatch(MoreUsersLoaded({Users}))
    }
  }  

  async deleteUser(id: number) {
    await lastValueFrom(this.service.deleteUser(id));
    this.toastr.success('User deleted successfully');
    this.store.dispatch(UserDeleted({id}));
  }
  //#endregion

}
