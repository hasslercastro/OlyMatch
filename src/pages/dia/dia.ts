/**
 * En esta clase se selecciona el día del evento
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { HorarioPage } from '../horario/horario';

@IonicPage()
@Component({
  selector: 'page-dia',
  templateUrl: 'dia.html',
})

export class DiaPage {

  myForm: FormGroup;

  deporte = '';
  escenario = '';
  dia = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {

    this.myForm = this.fb.group({
      dia: ['', [Validators.required]]
    });

    //Variables que recibimos de ngModel

    this.deporte = navParams.get('deporte');
    this.escenario = navParams.get('escenario');

  }

  pasarHorario(){
    this.navCtrl.push(HorarioPage, {deporte:this.deporte,
                                    escenario:this.escenario,
                                    dia:this.dia});
  }

  saveData(){
    alert(JSON.stringify(this.myForm.value));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiaPage');
  }

}
