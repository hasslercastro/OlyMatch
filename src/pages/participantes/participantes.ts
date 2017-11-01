/**
 * En esta clase se escogen el número de participantes
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NombrePage } from '../nombre/nombre';

@IonicPage()
@Component({
  selector: 'page-participantes',
  templateUrl: 'participantes.html',
})

export class ParticipantesPage {

  myForm: FormGroup;

  deporte = '';
  escenario = '';
  dia = '';
  horario = '';
  participantes = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {

    this.myForm = this.fb.group({
      participantes: ['', [Validators.required, Validators.pattern(/^\d{1,2}(\.\d{1,2})?$/)]]
    });

    //Variables que recibimos
    this.deporte = navParams.get('deporte');
    this.escenario = navParams.get('escenario');
    this.dia = navParams.get('dia');
    this.horario = navParams.get('horario');

  }

  pasarNombre(){
    this.navCtrl.push(NombrePage, {deporte:this.deporte,
                                  escenario:this.escenario,
                                  dia:this.dia,
                                  horario:this.horario,
                                  participantes:this.participantes});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParticipantesPage');
  }

  saveData(){
    JSON.stringify(this.myForm.value);
  }

}