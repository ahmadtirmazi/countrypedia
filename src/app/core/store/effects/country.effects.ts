import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';

import { CountryActions, CountryActionTypes } from '../actions/country.actions';
import { CountryService } from '../../services/country.service';


@Injectable()
export class CountryEffects {
  constructor(
    private actions$: Actions<CountryActionTypes>,
    private countryService: CountryService
  ) {}


  @Effect()
  getAllCountries$ = this.actions$.pipe(
    ofType(CountryActions.GET_ALL_COUNTRIES),
    mergeMap(() => this.countryService.getCountryList()
      .pipe(
        map(countries => ({ type: CountryActions.GET_COUNTRIES_SUCCESS, payload: countries })),
        catchError(err => of({ type: CountryActions.GET_COUNTRIES_FAILURE, payload: err }))
      ))
  );

  @Effect({ dispatch: false })
  GetCountriesSuccess$ = this.actions$.pipe(
    ofType(CountryActions.GET_COUNTRIES_SUCCESS),
    tap((countries) => {
      console.log(CountryActions.GET_COUNTRIES_SUCCESS, countries);
    })
  );

  @Effect({ dispatch: false })
  GetCountriesFailure$ = this.actions$.pipe(
    ofType(CountryActions.GET_COUNTRIES_FAILURE),
    tap((action) => {
      console.error(CountryActions.GET_COUNTRIES_FAILURE, action.payload.message);
    })
  );

  // Country details effects

  @Effect()
  GetCountryDetails$ = this.actions$.pipe(
    ofType(CountryActions.GET_COUNTRY_DETAILS),
    mergeMap((action) => this.countryService.getCountryByName(action.payload.countryName)
      .pipe(
        map(country => ({ type: CountryActions.GET_COUNTRY_DETAILS_SUCCESS, payload: country })),
        catchError(err => of({ type: CountryActions.GET_COUNTRY_DETAILS_FAILURE, payload: err }))
      ))
  );

  @Effect({ dispatch: false })
  GetCountryDetailsSuccess$ = this.actions$.pipe(
    ofType(CountryActions.GET_COUNTRY_DETAILS_SUCCESS),
    tap((action) => {
      console.log(CountryActions.GET_COUNTRY_DETAILS_SUCCESS, action.payload);

    })
  );

  @Effect({ dispatch: false })
  GetCountryDetailsFailure$ = this.actions$.pipe(
    ofType(CountryActions.GET_COUNTRY_DETAILS_FAILURE),
    tap((action) => {
      console.error(CountryActions.GET_COUNTRY_DETAILS_FAILURE, action.payload.message);
    })
  );
}
