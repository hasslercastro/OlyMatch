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

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {

    this.myForm = this.fb.group({
      participantes: ['', [Validators.required]]
    });

  }

  pasarNombre(){
    this.navCtrl.push(NombrePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParticipantesPage');
  }

  saveData(){
    alert(JSON.stringify(this.myForm.value));
  }

}
