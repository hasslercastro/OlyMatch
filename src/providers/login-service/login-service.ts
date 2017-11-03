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
    console.log('Hello LoginServiceProvider Provider');
  }

  public comprobarUsuario(usuario, contrasena){
    console.log("validando usuario")
    return this.http.get(this.apiUrl+'usuario/'+usuario+'/'+contrasena)
    .map(response => response.json().result);
  }

}
