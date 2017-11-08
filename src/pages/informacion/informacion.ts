import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventoServiceProvider } from '../../providers/evento-service/evento-service';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-informacion',
  templateUrl: 'informacion.html',
})

export class InformacionPage {

  eventos: Observable<any>;

  nombreUsuario = '';
  deporte = '';
  escenario = '';
  dia = '';
  horario = '';
  participantes = '';
  nombre = '';
  integrantes = '';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public eventoServiceProvider : EventoServiceProvider) {

    this.nombreUsuario = navParams.get('nombreUsuario');
    this.deporte = navParams.get('deporte');
    this.escenario = navParams.get('escenario');
    this.dia = navParams.get('dia');
    this.horario = navParams.get('horario');
    this.participantes = navParams.get('participantes');
    this.nombre = navParams.get('nombre');
    this.integrantes = navParams.get('integrantes');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformacionPage');
  }

  unirParticipante(lugar, fecha, hora){
    // console.log("unir", this.nombreUsuario,lugar,fecha,hora);
    console.log('PARAMETROS');
    console.log(lugar, fecha, hora);
    console.log('this');
    console.log(this.nombreUsuario, this.escenario, this.dia, this.horario);
    return this.eventoServiceProvider.putParticipante(this.nombreUsuario, this.escenario, this.dia, this.horario).subscribe();
  }

}
