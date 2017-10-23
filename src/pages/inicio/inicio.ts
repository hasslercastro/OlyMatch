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

  loadEventos(){
  return this.eventos = this.eventService.getAllEvents();
  }


}
