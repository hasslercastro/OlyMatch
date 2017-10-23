/**
 * En esta clase se selecciona el horario
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { ParticipantesPage } from '../participantes/participantes';

@IonicPage()
@Component({
  selector: 'page-horario',
  templateUrl: 'horario.html',
})
export class HorarioPage {

  myForm: FormGroup;

  deporte = '';
  escenario = '';
  dia = '';
  horario = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {

    this.myForm = this.fb.group({
      horario: ['', [Validators.required]]
    });

    //Variables que recibimos de ngModel

    this.deporte = navParams.get('deporte');
    this.escenario = navParams.get('escenario');
    this.dia = navParams.get('dia');

  }

  pasarParticipantes(){
    this.navCtrl.push(ParticipantesPage, {deporte:this.deporte,
                                          escenario:this.escenario,
                                          dia:this.dia,
                                          horario:this.horario});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HorarioPage');
  }

  saveData(){
    alert(JSON.stringify(this.myForm.value));
  }

}
