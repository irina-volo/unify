import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartWrapperComponent } from '../lib/components/chart-wrapper/chart-wrapper.component';
import { ChartWrapperAComponent } from '../lib/components/chart-wrapper1/chart-wrapper1.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ChartWrapperComponent,
    ChartWrapperAComponent
  ],
  exports: [
    ChartWrapperComponent,
    ChartWrapperAComponent
  ]
})

export class ChartsModule {
  
}