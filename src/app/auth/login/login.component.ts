import { Component } from '@angular/core';
import { IUserLogin } from '../models/login';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/store/states/app.states';
import { Login } from '../../core/store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isPasswordVisible = false;

  constructor(private store: Store<AppState>) { }

  onLoginFormSubmit(data) {
    console.log('Login form submitted', data);
    const loginData: IUserLogin = {
      email: data.email,
      password: data.password
    };

    this.store.dispatch(new Login(loginData));
  }
}
