import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { FormularioPage } from '../formulario/formulario';
/**
 * Generated class for the IngresoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ingreso',
  templateUrl: 'ingreso.html',
})
export class IngresoPage {

  //Variables que enviamos

  nombreUsuario='';

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  iniciar(){
    this.navCtrl.setRoot(TabsPage, {nombreUsuario:this.nombreUsuario});
  }

  registrar(){
    this.navCtrl.push(FormularioPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad IngresoPage');
  }

}
