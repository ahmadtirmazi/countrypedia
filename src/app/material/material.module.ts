import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {LayoutModule} from '@angular/cdk/layout';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  exports: [
    BrowserAnimationsModule,
    LayoutModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
