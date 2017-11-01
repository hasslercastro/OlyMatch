import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
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

  public traerFechasPorEscenario(escenario){
    return this.http.get(this.apiUrl+'escenario/lugar/'+escenario)
    .map(response => response.json().result);
  }

  public traerHorasPorFecha(fecha,lugar){
    return this.http.get(this.apiUrl+'escenario/lugar/fecha/'+lugar+'/'+fecha)
    .map(response => response.json().result);
  }

  public traerImagenEscenario(nombre){
    return this.http.get(this.apiUrl+'escenario/imagen/'+nombre)
    .map(response => response.json().result);
    
  }

  //public guardarEvento
  //Aqui hay cosas horribles (Ojo revisar get -> put ) :v xsxsxsx jajsjsjjajsj
  public reservarEscenario(lugar,fecha,hora){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //let obj = JSON.stringify({'lugar':lugar,'fecha':fecha,'hora':hora});
    console.log("=======================");
    //console.log(obj);
    return this.http.put(this.apiUrl+'reservar',{'lugar':lugar,'fecha':fecha,'hora':hora},{headers: headers}).map(res => res.json().result);
    
  }



  // private put(hero: Hero) {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  
  //   let url = `${this.heroesUrl}/${hero.id}`;
  
  //   return this.http
  //              .put(url, JSON.stringify(hero), {headers: headers})
  //              .map(res => res.json());
  // }



}
