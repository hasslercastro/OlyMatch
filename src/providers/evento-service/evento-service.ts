import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { EventoSettingsProvider } from '../evento-settings/evento-settings'

@Injectable()
export class EventoServiceProvider {
  apiUrl = this.eventoSettingsProvider.getApiUrl();
  constructor(public http: Http, 
              public eventoSettingsProvider: EventoSettingsProvider) {
  }

  public getAllEvents(){
    return this.http.get(this.apiUrl+'evento')
    .map(response => response.json().result);
  }

  public getSomeEvents(deporte){
    console.log("desde los servicios este es el deporte", deporte)
    return this.http.get(this.apiUrl + 'filtrar/' + deporte).
    map(response => response.json().result);
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

  public putParticipante(nombreUsuario, lugar, fecha, hora, foto, nombre, primerApellido, codigo){
    let headers = new Headers();
    console.log('xdddddddddddddddddddddddddddddddddddddddddddddddddd');
    console.log(nombreUsuario, lugar, fecha, hora, foto, nombre, primerApellido, codigo);
    headers.append('Content-Type', 'application/json');
    console.log("codigo======", codigo);
    return this.http.put(this.apiUrl+'unirse/'+nombreUsuario+'/'+lugar+'/'+fecha+'/'+hora+'/'+codigo, {
      "userName": nombreUsuario,
     "foto": foto, 
     "nombre" : nombre, 
     "primerApellido": primerApellido}, {headers: headers}).map(Response => Response.text());
  }
}
