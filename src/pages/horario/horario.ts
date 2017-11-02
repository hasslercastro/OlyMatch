/**
 * En esta clase se selecciona el horario
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ParticipantesPage } from '../participantes/participantes';
import { EscenarioServiceProvider } from '../../providers/escenario-service/escenario-service';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-horario',
  templateUrl: 'horario.html',
})
export class HorarioPage {
  horas: Observable<any>;
  myForm: FormGroup;

  imagen = '';
  deporte = '';
  escenario = '';
  dia = '';
  horario = '';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public fb: FormBuilder,
    public escenarioServiceProvider : EscenarioServiceProvider ) {

    this.myForm = this.fb.group({
      horario: ['', [Validators.required]]
    });

    //Variables que recibimos de ngModel

    this.deporte = navParams.get('deporte');
    this.escenario = navParams.get('escenario');
    this.dia = navParams.get('dia');
    this.imagen = navParams.get('imagen');
    //this.imagen = this.imagen[0];
    console.log("desde lejos jeje");
    console.log(this.imagen);
    this.mostrarHoras();
  }

  public mostrarHoras(){
    this.horas = this.escenarioServiceProvider.traerHorasPorFecha(this.dia,this.escenario);
  }

  pasarParticipantes(){
    this.navCtrl.push(ParticipantesPage, {deporte:this.deporte,
                                          escenario:this.escenario,
                                          dia:this.dia,
                                          imagen : this.imagen,
                                          horario:this.horario});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HorarioPage');
  }

  saveData(){
    JSON.stringify(this.myForm.value);
  }

}
