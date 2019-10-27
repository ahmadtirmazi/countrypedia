import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { AuthGuard } from '../auth/guards/auth.guard.service';

const routes: Routes = [
  {
    path: 'countries',
    component: CountryListComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'country/:countryName',
    component: CountryDetailComponent,
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
