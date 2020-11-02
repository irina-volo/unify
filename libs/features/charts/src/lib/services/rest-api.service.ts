import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { concatMap, map, switchMap, tap } from 'rxjs/operators'
import { Observable, of, pipe, forkJoin, from } from 'rxjs'
import { VisualizationTypes, VisualizerConfigs } from '../shared/enums';
import { IBar,IColumn,IDualAxisBar,
         IDualAxisColumn, IDualAxisLine,
         IStackedBar, IStackedColumn } from  '../shared/interfaces/visual-configs'
import *  as barJson from 'apps/unify/src/assets/mock-data/visualization-json/Bar.json'         
@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private httpClient: HttpClient) {

  }

  public  getVisualizerConfig(vizCfg: VisualizerConfigs): Observable<any> {
    switch (vizCfg) {
      case VisualizerConfigs.None: {
        return null;
        break;
      }
      case VisualizerConfigs.Bar: {
        return this.httpClient.get('../../assets/mock-data/visualization-json/Bar.json')
      }
      case VisualizerConfigs.Column: {
        return this.httpClient.get('../../assets/mock-data/visualization-json/Column.json')
      }
      case VisualizerConfigs.DualAxisBar: {
        return this.httpClient.get('../../assets/mock-data/visualization-json/DualAxisBar.json')
      }
      case VisualizerConfigs.DualAxisColumn: {
        return this.httpClient.get('../../assets/mock-data/visualization-json/DualAxisColumn.json')
      }
      case VisualizerConfigs.DualAxisLine: {
        return this.httpClient.get('../../assets/mock-data/visualization-json/DualAxisLine.json')
      }
      case VisualizerConfigs.StackedBar: {
        return this.httpClient.get('../../assets/mock-data/visualization-json/StackedBar.json')
      }
      case VisualizerConfigs.StackedColumn: {
        return this.httpClient.get('../../assets/mock-data/visualization-json/StackedColumn.json')
      }
    }
  }
}
