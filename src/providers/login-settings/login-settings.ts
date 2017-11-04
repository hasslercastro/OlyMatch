import { Injectable } from '@angular/core';

const CONFIG ={
  apiUrl:'http://10.161.48.43:8080/'
};

@Injectable()
export class LoginSettingsProvider {

  constructor() {}

  public getApiUrl(){
    return CONFIG.apiUrl;
  }
}
