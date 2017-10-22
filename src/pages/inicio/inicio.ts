import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

  //Variables que recibimos

  nombreUsuario='';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nombreUsuario = navParams.data;
  }

}
