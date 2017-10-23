import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

  //Variables que recibimos

  nombreUsuario='';

  deporte = '';
  escenario = '';
  dia = '';
  horario = '';
  participantes = '';
  nombre = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nombreUsuario = navParams.data;

    //Variables que recibimos
    this.deporte = navParams.get('deporte');
    this.escenario = navParams.get('escenario');
    this.dia = navParams.get('dia');
    this.horario = navParams.get('horario');
    this.participantes = navParams.get('participantes');
    this.nombre = navParams.get('nombre');
  }

}
