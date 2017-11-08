import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { ImageSettingsProvider } from '../image-settings/image-settings'


@Injectable()
export class ImageServiceProvider {
  apiUrl = this.imageSettingsProvider.getApiUrl();
  constructor(public http: Http, public imageSettingsProvider:ImageSettingsProvider) {
    console.log('Hello ImageServiceProvider Provider');
  }

  public putProfileImage(nombreUsuario,imgSrc){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.apiUrl+'imagen/'+nombreUsuario,{'imagenURI':imgSrc},{headers: headers}).map(Response => Response.json().result);
  }

}
