import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { EscenarioSettingsProvider } from '../escenario-settings/escenario-settings'

@Injectable()
export class EscenarioServiceProvider {
  apiUrl = this.escenarioSettingsProvider.getApiUrl();
  constructor(public http: Http, public escenarioSettingsProvider:EscenarioSettingsProvider) {
  }

  public traerEscenariosPorDeporte(deporte){
    return this.http.get(this.apiUrl+'escenario/'+deporte)
    .map(response => response.json().result);
  }

}
