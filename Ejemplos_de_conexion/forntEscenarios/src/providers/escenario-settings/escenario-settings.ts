import { Injectable } from '@angular/core';

const CONFIG = {
  apiUlr :'http://localhost:8080/'
};

@Injectable()
export class EscenarioSettingsProvider {

  constructor() {}

  public getApiUrl(){
    return CONFIG.apiUlr;
  }
}
