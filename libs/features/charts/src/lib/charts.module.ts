import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http'
import { ChartWrapperComponent } from '../lib/components/chart-wrapper/chart-wrapper.component';
import { ChartWrapperAComponent } from '../lib/components/chart-wrapper1/chart-wrapper1.component';

import { RestApiService } from '../lib/services/rest-api.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    ChartWrapperComponent,
    ChartWrapperAComponent
  ],
  exports: [
    ChartWrapperComponent,
    ChartWrapperAComponent
  ],
  providers: [
    RestApiService
  ]
})

export class ChartsModule {
  
}