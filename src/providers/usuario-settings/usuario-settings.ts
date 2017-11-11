import { Injectable } from '@angular/core';

const CONFIG = {
  apiUrl:'http://10.161.41.21:8080/'
};

@Injectable()
export class UsuarioSettingsProvider {

  constructor() {}

  public getApiUrl(){
    return CONFIG.apiUrl;
  }
}
