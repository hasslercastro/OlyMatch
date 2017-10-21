/**
 * En esta clase se hace el formulario para la suscripción de un nuevo usuario
 */

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Los datos serán envíados a la página IngresoPage
import { IngresoPage } from '../ingreso/ingreso';

@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})

export class FormularioPage {

  constructor(public navCtrl: NavController, public fb: FormBuilder, public navParams: NavParams) {

  }

  volver(){
    this.navCtrl.setRoot(IngresoPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

}
