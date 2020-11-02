import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material-module';
import { ChartsModule } from '@iri/features/charts'
import { CoreRoutingModule } from './core-routing.module'

// Pages
import { DashboardComponent } from '../lib/pages/dashboard/dashboard.component';
import { HomeComponent } from '../lib/pages/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CoreRoutingModule,
    ChartsModule
  ],
  declarations: [
    DashboardComponent,
    HomeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule {}
