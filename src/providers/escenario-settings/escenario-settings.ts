import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const CONFIG ={
  apiUrl:'http://localhost:8080/'
};

@Injectable()
export class EscenarioSettingsProvider {

  constructor() {}
  
    public getApiUrl(){
      return CONFIG.apiUrl;
    }

}
