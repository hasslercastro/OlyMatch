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
<<<<<<< HEAD
  
=======


>>>>>>> c2bfa08da617e9ad63ccf761a6fc1506864c53c2
  deporte = '';
  escenario = '';
  dia = '';
  horario = '';
  participantes = '';
  nombre = '';

<<<<<<< HEAD
  constructor(public navCtrl: NavController, public navParams: NavParams, public eventService : EventoServiceProvider) {
=======
  constructor(public navCtrl: NavController, public navParams: NavParams, public eventService: EventoServiceProvider) {

>>>>>>> c2bfa08da617e9ad63ccf761a6fc1506864c53c2
    this.nombreUsuario = navParams.data;
    this.loadEventos();
    

    //Variables que recibimos
    this.deporte = navParams.get('deporte');
    this.escenario = navParams.get('escenario');
    this.dia = navParams.get('dia');
    this.horario = navParams.get('horario');
    this.participantes = navParams.get('participantes');
    this.nombre = navParams.get('nombre');
<<<<<<< HEAD
=======
    this.loadEventos();
  }
  loadEventos() {
    return this.eventos = this.eventService.getAllEvents();
>>>>>>> c2bfa08da617e9ad63ccf761a6fc1506864c53c2
  }

  loadEventos(){
    return this.eventos = this.eventService.getAllEvents();
  }

}

