import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './core/store/effects/auth.effects';

import { reducers } from './core/store/states/app.states';
import { CountryModule } from './country/country.module';
import { CountryEffects } from './core/store/effects/country.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    AuthModule,
    CountryModule,
    AppRoutingModule,

    SharedModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects, CountryEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
