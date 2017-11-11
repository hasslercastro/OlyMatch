import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventoServiceProvider } from '../../providers/evento-service/evento-service';
import { Observable } from 'rxjs/Observable';
import { CalificacionPage } from '../calificacion/calificacion';

@IonicPage()
@Component({
  selector: 'page-informacion',
  templateUrl: 'informacion.html',
})

export class InformacionPage {

  eventos: Observable<any>;

  id = '';
  nombreUsuario = '';
  deporte = '';
  escenario = '';
  dia = '';
  horario = '';
  participantes = '';
  nombre = '';
  integrantes = '';
  mensajeValido = '';
  mensajeError = '';

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
    this.id = navParams.get('id');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformacionPage');
  }

  unirParticipante(lugar, fecha, hora){
    this.eventoServiceProvider.putParticipante(this.nombreUsuario, this.escenario, this.dia, this.horario).subscribe(x => {
      console.log("x: ", x);
      if(x == 'true'){
        this.mensajeValido = 'Te has unido al juego';
      }
      else{
        this.mensajeError = 'Ya estás en el evento o no hay más cupos disponibles';
      }
    })
  }

  pasarCalificacion(integrante){
    this.navCtrl.push(CalificacionPage, {
                                        id:this.id,
                                        integrante:integrante,
                                        dia:this.dia,
                                        integrantes:this.integrantes})
  }

}
