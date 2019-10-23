import { NgModule } from '@angular/core';

import { CountryRoutingModule } from './country-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';

@NgModule({
  declarations: [CountryListComponent, CountryDetailComponent],
  imports: [
    CountryRoutingModule,
    SharedModule
  ]
})
export class CountryModule { }
