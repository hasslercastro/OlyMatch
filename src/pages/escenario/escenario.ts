/**
 * Esta clase selecciona el escenario deportivo
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { DiaPage } from '../dia/dia';

@IonicPage()
@Component({
  selector: 'page-escenario',
  templateUrl: 'escenario.html',
})

export class EscenarioPage {

  myForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {

    this.myForm = this.fb.group({
      escenario: ['', [Validators.required]]
    });

  }

  pasarDia(){
    this.navCtrl.push(DiaPage);
  }

  saveData(){
    alert(JSON.stringify(this.myForm.value));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EscenarioPage');
  }

}
