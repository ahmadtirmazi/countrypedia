import { Component, OnInit } from '@angular/core';
import { IUserLogin } from '../models/login';
import { Store } from '@ngrx/store';
import { AppState, selectAuthState } from '../../core/store/states/app.states';
import { Login } from '../../core/store/actions/auth.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isPasswordVisible = false;
  getAuthState$: Observable<any>;
  errorMessage: string | null;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.getAuthState$ = this.store.select(selectAuthState);
  }

  onLoginFormSubmit(data) {
    console.log('Login form submitted', data);
    const loginData: IUserLogin = {
      email: data.email,
      password: data.password
    };

    this.store.dispatch(new Login(loginData));
  }
}
