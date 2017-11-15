/**
 * Esta clase selecciona el escenario deportivo
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DiaPage } from '../dia/dia';
import { EscenarioServiceProvider } from '../../providers/escenario-service/escenario-service';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-escenario',
  templateUrl: 'escenario.html',
})

export class EscenarioPage {
  escenarios:Observable<any>;
  myForm: FormGroup;

  deporte = '';
  escenario = '';
  nombreUsuario='';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public fb: FormBuilder,
    public escenarioServiceProvider: EscenarioServiceProvider ) {

    this.myForm = this.fb.group({
      escenario: ['', [Validators.required]]
    });

    //Variables que recibimos de ngModel
    this.deporte = navParams.get('deporte');
    this.nombreUsuario = navParams.get('nombreUsuario');
    this.mostrarEscenarios();
  }

  public mostrarEscenarios(){
    this.escenarios = this.escenarioServiceProvider.traerEscenariosPorDeporte(this.deporte);
  }

  pasarDia(){
    this.navCtrl.push(DiaPage, {deporte:this.deporte,
                                escenario:this.escenario,
                                nombreUsuario:this.nombreUsuario});
  }

  saveData(){
    JSON.stringify(this.myForm.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EscenarioPage');
  }

}
