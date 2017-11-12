import { Injectable } from '@angular/core';

const CONFIG ={
  apiUrl:'http://192.168.1.63:8080/'
};

@Injectable()
export class LoginSettingsProvider {

  constructor() {}

  public getApiUrl(){
    return CONFIG.apiUrl;
  }
}
