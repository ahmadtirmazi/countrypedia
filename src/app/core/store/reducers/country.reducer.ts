import { CountryActionTypes, CountryActions } from '../actions/country.actions';

export interface State {
  countries: any;
  selectedCountry: any;
  errorMessage: string | null;
}

export const initialState: State = {
  countries: [],
  selectedCountry: null,
  errorMessage: null
};

export function reducer(state = initialState, action: CountryActionTypes): State {
  switch (action.type) {
    case CountryActions.GET_COUNTRIES_SUCCESS: {
      return {
        ...state,
        countries: action.payload
      };
    }

    case CountryActions.GET_COUNTRIES_FAILURE: {
      return {
        ...state,
        countries: [],
        errorMessage: action.payload.message
      };
    }

    case CountryActions.GET_COUNTRY_DETAILS_SUCCESS: {
      return {
        ...state,
        selectedCountry: action.payload.length ? action.payload[0] : null
      };
    }

    case CountryActions.GET_COUNTRY_DETAILS_FAILURE: {
      return {
        ...state,
        selectedCountry: null,
        errorMessage: action.payload.message
      };
    }

    default: {
      return state;
    }
  }
}
