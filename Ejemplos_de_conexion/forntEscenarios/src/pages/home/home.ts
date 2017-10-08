import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { EscenarioServiceProvider } from '../../providers/escenario-service/escenario-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  escenarios: Observable<any>;
  constructor(public navCtrl: NavController,
    public esceService : EscenarioServiceProvider) {
      this.loadEscenarios();
  }

  loadEscenarios(){
  return this.escenarios = this.esceService.getEscenarios();
  }

}
