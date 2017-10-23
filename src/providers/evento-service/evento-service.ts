import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { EventoSettingsProvider } from '../evento-settings/evento-settings'

@Injectable()
export class EventoServiceProvider {
  apiUrl = this.eventoSettingsProvider.getApiUrl();
  constructor(public http: Http, public eventoSettingsProvider: EventoSettingsProvider) {
  }

  public getAllEvents(){
    return this.http.get(this.apiUrl+'evento')
    .map(response => response.json().result);
  }

}
