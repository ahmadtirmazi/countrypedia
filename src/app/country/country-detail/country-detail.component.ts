import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, selectActiveCountry, selectCountryErrorMessage } from 'src/app/core/store/states/app.states';
import { GetCountryDetails } from 'src/app/core/store/actions/country.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  countryDetails$: Observable<any>;
  errorMessage$: Observable<any>;
  routeParams$: Observable<any>;
  countryName: string;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
    ) {
      this.routeParams$ = this.route.params;
    }

  ngOnInit() {
    this.routeParams$.subscribe(params => {
      this.countryName = params.countryName;
      this.store.dispatch(new GetCountryDetails({ countryName: this.countryName }));
   });

    this.countryDetails$ = this.store.select(selectActiveCountry);
    this.errorMessage$ = this.store.select(selectCountryErrorMessage);
  }

}
