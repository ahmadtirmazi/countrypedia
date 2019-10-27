import { AuthActionTypes, AuthActions } from '../actions/auth.actions';

export interface State {
  isAuthenticated: boolean;
  user: {
    email: string,
    token: string
  };
  errorMessage: string | null;
}

export const initialState: State = {
  isAuthenticated: localStorage.getItem('token') ? true : false,
  user: null,
  errorMessage: null
};

export function reducer(state = initialState, action: AuthActionTypes): State {
  switch (action.type) {
    case AuthActions.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          email: action.payload.email,
          token: action.payload.token
        },
        errorMessage: null
      };
    }

    case AuthActions.LOGIN_FAILURE: {
      return {
        ...state,
        isAuthenticated: false,
        user: {
          email: null,
          token: null
        },
        errorMessage: action.payload.message
      };
    }

    case AuthActions.LOGOUT: {
      return {
        ...state,
        isAuthenticated: false,
        user: {
          email: null,
          token: null
        },
        errorMessage: null
      };
    }

    default: {
      return state;
    }
  }
}
