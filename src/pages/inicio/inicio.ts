import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { EventoServiceProvider } from '../../providers/evento-service/evento-service';
import { InformacionPage } from '../informacion/informacion';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

  eventos: Observable<any>;

  nombreUsuario = '';
  deporte = '';
  escenario = '';
  dia = '';
  horario = '';
  participantes = ''; //Número de participantes
  nombre = '';
  integrantes = ''; //Personas

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public eventService: EventoServiceProvider) {

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

  pasarInformacion(nombreUsuarioEvento, 
                   deporteEvento, 
                   escenarioEvento, 
                   diaEvento, 
                   horarioEvento, 
                   participantesEvento,
                   integrantesEvento,
                   nombreEvento){
    this.navCtrl.push(InformacionPage, {nombreUsuario:this.nombreUsuario,
                                        deporte:deporteEvento,
                                        escenario:escenarioEvento,
                                        dia:diaEvento,
                                        horario:horarioEvento,
                                        participantes:participantesEvento,
                                        nombre:nombreEvento,
                                        integrantes:integrantesEvento});
  }

  /**
   * @method Unirse a evento desde el apartado inicio -> Desde acá funcionaba.
   */
  // unirParticipante(lugar, fecha, hora){
  //   console.log("unir", this.nombreUsuario,lugar,fecha,hora);
  //   return this.eventService.putParticipante(this.nombreUsuario, lugar, fecha, hora).subscribe();
  // }

  doRefresh(refresher) {
    this.loadEventos();
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}

