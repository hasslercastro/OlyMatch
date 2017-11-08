import { Injectable } from '@angular/core';

const CONFIG ={
  apiUrl:'http://localhost:8080/'
};

@Injectable()
export class LoginSettingsProvider {

  constructor() {}

  public getApiUrl(){
    return CONFIG.apiUrl;
  }
}
