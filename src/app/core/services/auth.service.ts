import { Injectable } from '@angular/core';
import { IUserLogin } from 'src/app/auth/models/login';
import { Observable, of, throwError  } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  dummyUser = {
    email: 'johndoe@cp.com',
    password: 'admin123',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  };

  constructor(private router: Router) { }

  getAuthToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    const token = this.getAuthToken();
    // Additionally, we can check for expiry of auth token
    return token != null;
  }

  login(data: IUserLogin): Observable<any> {
    console.log('login', data);
    if (data.email === this.dummyUser.email && data.password === this.dummyUser.password) {
      localStorage.setItem('token', this.dummyUser.token);
      return of(this.dummyUser);
    }

    return throwError(new Error('Invalid email or password'));
  }

  logout() {
    if (this.isAuthenticated()) {
      localStorage.removeItem('token');
    }
    this.router.navigateByUrl('/');
  }
}
