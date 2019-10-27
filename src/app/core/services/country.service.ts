import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthHttpClient } from './authHttp.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseUrl = 'https://restcountries-v1.p.rapidapi.com';

  constructor(private authHttp: AuthHttpClient) { }

  getCountryList(): Observable<any> {
    return this.authHttp.get(`${this.baseUrl}/all`);
  }

  getCountryByName(countryName: string): Observable<any> {
    return this.authHttp.get(`${this.baseUrl}/name/${countryName}`);
  }
}
