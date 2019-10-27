import { Action } from '@ngrx/store';

export enum CountryActions {
  GET_ALL_COUNTRIES = '[Countries] Get All Countries',
  GET_COUNTRIES_SUCCESS = '[Countries] Get Countries Success',
  GET_COUNTRIES_FAILURE = '[Countries] Get Countries Failure',

  GET_COUNTRY_DETAILS = '[Country] Get Country Details',
  GET_COUNTRY_DETAILS_SUCCESS = '[Country] Get Country Details Success',
  GET_COUNTRY_DETAILS_FAILURE = '[Country] Get Country Details Failure'
}

export class GetAllCountries implements Action {
  readonly type = CountryActions.GET_ALL_COUNTRIES;
  constructor() {}
}

export class GetAllCountriesSuccess implements Action {
  readonly type = CountryActions.GET_COUNTRIES_SUCCESS;
  constructor(public payload: { countries: any; }) {}
}

export class GetAllCountriesFailure implements Action {
  readonly type = CountryActions.GET_COUNTRIES_FAILURE;
  constructor(public payload: any) {}
}

export class GetCountryDetails implements Action {
  readonly type = CountryActions.GET_COUNTRY_DETAILS;
  constructor(public payload: { countryName: string; }) {}
}

export class GetCountryDetailsSuccess implements Action {
  readonly type = CountryActions.GET_COUNTRY_DETAILS_SUCCESS;
  constructor(public payload: any) {}
}

export class GetCountryDetailsFailure implements Action {
  readonly type = CountryActions.GET_COUNTRY_DETAILS_FAILURE;
  constructor(public payload: any) {}
}

export type CountryActionTypes = GetAllCountries | GetAllCountriesSuccess | GetAllCountriesFailure |
                                  GetCountryDetails | GetCountryDetailsSuccess | GetCountryDetailsFailure;
