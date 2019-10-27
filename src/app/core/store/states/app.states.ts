import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as auth from '../reducers/auth.reducer';
import * as country from '../reducers/country.reducer';

export interface AppState {
  authState: auth.State;
  countryState: country.State;
}

export const reducers = {
  auth: auth.reducer,
  country: country.reducer
};

export const selectAuthState = createFeatureSelector<AppState>('auth');

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: any) => state.isAuthenticated
);

export const selectCountryState = createFeatureSelector<AppState>('country');

export const selectActiveCountry = createSelector(
  selectCountryState,
  (state: any) => state.selectedCountry
);

export const selectCountryErrorMessage = createSelector(
  selectCountryState,
  (state: any) => state.errorMessage
);
