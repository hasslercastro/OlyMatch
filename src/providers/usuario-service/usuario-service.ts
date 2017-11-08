import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UsuarioSettingsProvider } from '../usuario-settings/usuario-settings';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioServiceProvider {
 
  apiUrl = this.usuarioSettingsProvider.getApiUrl();
  constructor(public http: Http,
    public usuarioSettingsProvider: UsuarioSettingsProvider
    ) {
    console.log('Hello UsuarioServiceProvider Provider');
  }
  
  public solicitarCalificar(fecha){
    return this.http.get(this.apiUrl+'calificar/'+fecha)
    .map(response => response.text());
  }

  public calificarUsuario(nombreUsuario, nota){
    
    return this.http.put(this.apiUrl+'calificar/'+nombreUsuario+'/'+nota,{})
    .map(response => response.text());
  }

}