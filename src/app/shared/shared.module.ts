import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    HeaderComponent
  ]
})
export class SharedModule { }
