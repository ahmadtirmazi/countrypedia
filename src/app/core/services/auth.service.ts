import { Injectable } from '@angular/core';
import { IUserLogin } from 'src/app/auth/models/login';
import { Observable, of, throwError  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  dummyUser = {
    email: 'ahmadtirmazi@yahoo.com',
    password: 'admin123',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  };

  constructor() { }

  getAuthToken(): string {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    const token = this.getAuthToken();
    // Additionally, we can check for expiry of auth token
    return token != null;
  }

  login(data: IUserLogin): Observable<any> {
    console.log('login', data);
    if (data.email === this.dummyUser.email && data.password === this.dummyUser.password) {
      return of(this.dummyUser);
    }

    return throwError(new Error('Invalid email or password'));
  }
}
