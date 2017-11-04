import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { LoginSettingsProvider } from '../login-settings/login-settings';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {

  apiUrl = this.loginSettingsProvider.getApiUrl();
  constructor(public http: Http,
    public loginSettingsProvider: LoginSettingsProvider
    ) {
  }

  public comprobarUsuario(usuario, contrasena){
    console.log("validando usuario")
    return this.http.get(this.apiUrl+'usuario/'+usuario+'/'+contrasena)
    .map(response => response.text());
  }

  public crearUsuario(usuario,contrasena,codigo,nombre,primerApellido){
    return this.http.post(this.apiUrl+'usuario',{'nombre':nombre,
    'contrasena':contrasena,
    'usuario':usuario,
    'codigo':codigo,
    'primerApellido':primerApellido})
    .map(response => response.json()); 
    
  }

  public getInfoUsuario(usuario){
    console.log(usuario)
    console.log("lo de arriba es desde loginservice")
    return this.http.get(this.apiUrl+'usuario'+'/'+usuario)
    .map(response => response.json().result);
  }

}
