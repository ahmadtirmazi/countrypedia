import { Action } from '@ngrx/store';

export enum AuthActions {
  LOGIN = '[Login Page] Login',
  LOGIN_SUCCESS = '[Auth Api] Login Success',
  LOGIN_FAILURE = '[Auth Api] Login Failure'
}

export class Login implements Action {
  readonly type = AuthActions.LOGIN;

  constructor(public payload: { email: string; password: string; }) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActions.LOGIN_SUCCESS;
  constructor(public payload: { email: string; token: string; }) {}
}

export class LoginFailure implements Action {
  readonly type = AuthActions.LOGIN_FAILURE;
  constructor(public payload: any) {}
}

export type AuthActionTypes = Login | LoginSuccess | LoginFailure;
