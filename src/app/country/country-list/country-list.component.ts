import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectCountryState } from '../../core/store/states/app.states';
import { GetAllCountries } from '../../core/store/actions/country.actions';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  selectCountryState$: Observable<any>;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetAllCountries());
    this.selectCountryState$ = this.store.select(selectCountryState);
  }

  onClickViewDetails(countryName) {
    this.router.navigateByUrl(`/country/${countryName}`);
  }

}
