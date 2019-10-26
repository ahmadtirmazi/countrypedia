import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthHttpClient {

  constructor(private http: HttpClient) {}

  createAuthorizationHeader(headers: HttpHeaders) {
    headers = headers.append('x-rapidapi-host', environment.apiHost);
    headers = headers.append('x-rapidapi-key', environment.apiKey);

    return headers;
  }

  get(url) {
    let headers = new HttpHeaders();
    headers = this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers
    });
  }

  post(url, data) {
    let headers = new HttpHeaders();
    headers = this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers
    });
  }
}
