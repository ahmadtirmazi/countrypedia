import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth.service';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { AuthActions, AuthActionTypes } from '../actions/auth.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions<AuthActionTypes>,
    private authService: AuthService,
    private router: Router
  ) { }


  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActions.LOGIN),
    mergeMap((action) => this.authService.login(action.payload)
      .pipe(
        map(user => ({ type: AuthActions.LOGIN_SUCCESS, payload: user })),
        catchError(err => of({ type: AuthActions.LOGIN_FAILURE, payload: err }))
      ))
  );

  @Effect({ dispatch: false })
  LoginSuccess$ = this.actions$.pipe(
    ofType(AuthActions.LOGIN_SUCCESS),
    tap((user) => {
      console.log('Login successful');
      this.router.navigateByUrl('/countries');
    })
  );

  @Effect({ dispatch: false })
  LoginFailure$ = this.actions$.pipe(
    ofType(AuthActions.LOGIN_FAILURE),
    tap((action) => {
      console.error(action.payload.message);
    })
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType(AuthActions.LOGOUT),
    tap(() => this.authService.logout())
  );
}
