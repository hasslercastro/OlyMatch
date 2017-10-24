import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { EventoServiceProvider } from '../../providers/evento-service/evento-service'

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {
  //Villa lo necesita
  nombreUsuario='';
  eventos: Observable<any>;
  constructor(public navCtrl: NavController,
    public eventService : EventoServiceProvider) {
      this.loadEventos();
  }

<<<<<<< HEAD
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
=======
  loadEventos(){
  return this.eventos = this.eventService.getAllEvents();
>>>>>>> 2aed30e22a992f89039b6c463f6d26b2e475af72
  }


}
