import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CountryRoutingModule } from './country-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { AuthHttpClient } from '../core/services/authHttp.service';

@NgModule({
  declarations: [CountryListComponent, CountryDetailComponent],
  imports: [
    CountryRoutingModule,
    SharedModule
  ],
  providers: [
    AuthHttpClient
  ]
})
export class CountryModule { }
