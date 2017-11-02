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
  nombreUsuario = '';
  eventos: Observable<any>;

  deporte = '';
  escenario = '';
  dia = '';
  horario = '';
  participantes = '';
  nombre = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public eventService: EventoServiceProvider) {

    this.nombreUsuario = navParams.data;
    this.loadEventos();
    
    //Variables que recibimos
    this.deporte = navParams.get('deporte');
    this.escenario = navParams.get('escenario');
    this.dia = navParams.get('dia');
    this.horario = navParams.get('horario');
    this.participantes = navParams.get('participantes');
    this.nombre = navParams.get('nombre');
    this.loadEventos();
  }
  loadEventos() {
    return this.eventos = this.eventService.getAllEvents();
  }

  doRefresh(refresher) {
    this.loadEventos();
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}

