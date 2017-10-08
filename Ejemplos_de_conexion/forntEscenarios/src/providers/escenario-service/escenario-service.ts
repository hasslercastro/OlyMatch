import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {EscenarioSettingsProvider} from'../escenario-settings/escenario-settings'


@Injectable()
export class EscenarioServiceProvider {
  apiUrl = this.EscenarioSettings.getApiUrl();
  constructor(public http: Http, public EscenarioSettings: EscenarioSettingsProvider,) {}

  public getEscenarios(){
    return this.http.get(this.apiUrl+'escenario')
    .map(response => response.json().result);
  }

}
