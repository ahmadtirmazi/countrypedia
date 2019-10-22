import { Component } from '@angular/core';
import { LoginData } from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isPasswordVisible = false;

  constructor() { }

  onLoginFormSubmit(data) {
    console.log('Login form submitted', data);
    const loginData: LoginData = {
      email: data.email,
      password: data.password
    };
  }

}
