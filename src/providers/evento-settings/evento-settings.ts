import { Injectable } from '@angular/core';

const CONFIG ={
  apiUrl:'http://192.168.1.63:8080/'
};

@Injectable()
export class EventoSettingsProvider {

  constructor() {}

  public getApiUrl(){
    return CONFIG.apiUrl;
  }
}
