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

  public crearEvento(nombre,admin,lugar,fecha,participantes,numMaxParticipantes,hora,deporte,imagen){
    console.log(nombre,admin,lugar,fecha,participantes,numMaxParticipantes,hora,deporte,imagen);
    console.log('estamos en crear evento');
    return this.http.post(this.apiUrl+'evento',{'nombre':nombre,
    'admin':admin,
    'lugar':lugar,
    'fecha':fecha,
    'participantes':participantes,
    'numMaxParticipantes':numMaxParticipantes,
    'hora':hora,
    'deporte':{'nombre':deporte},
    'imagen':imagen})
    .map(response => response.json());
  }

  public putParticipante(nombreUsuario, lugar, fecha, hora){
    
    return this.http.put(this.apiUrl+'unirse/'+nombreUsuario+'/'+lugar+'/'+fecha+'/'+hora, {}).map(Response => Response.text());

  }
}
