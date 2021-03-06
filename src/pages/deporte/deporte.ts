/**
 * En esta clase se escoge el deporte del evento
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EscenarioPage } from '../escenario/escenario';

@IonicPage()
@Component({
  selector: 'page-deporte',
  templateUrl: 'deporte.html',
})

export class DeportePage {

  myForm: FormGroup;

  deporte='';
  nombreUsuario='';

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {

    this.myForm = this.fb.group({
      
      deporte: ['', [Validators.required]]

    });

    this.nombreUsuario = navParams.get('nombreUsuario');

  }

  pasarEscenario(){
    this.navCtrl.push(EscenarioPage, {deporte:this.deporte, nombreUsuario:this.nombreUsuario});
  }

  saveData(){
    JSON.stringify(this.myForm.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeportePage');
  }

}
