import { Component, OnInit } from '@angular/core';
import { Logout } from 'src/app/core/store/actions/auth.actions';
import { AppState, selectIsAuthenticated } from 'src/app/core/store/states/app.states';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'CountryPedia';
  isAuthenticated$: Observable<any>;

  constructor(
    private store: Store<AppState>
    ) {}

  ngOnInit() {
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
  }

  onClickLogout() {
    this.store.dispatch(new Logout());
  }
}
