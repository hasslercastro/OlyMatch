import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MomentoPage } from '../momento/momento';
import { DeportePage } from '../deporte/deporte';

@Component({
  selector: 'page-evento',
  templateUrl: 'evento.html'
})

export class EventoPage {

  //Variables que enviamos y recibimos

  fechaEvento='';
  horarioEvento='';
  deporteEvento='';
  lugarEvento='';
  nombreEvento='';
  numeroParticipantesEvento='';
  exigenciaEvento='';
  imagen='assets/img/cancha.png';

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.nombreEvento=navParams.data;
    this.fechaEvento=navParams.get('fechaEvento');
    this.horarioEvento=navParams.get('horarioEvento');
    this.deporteEvento=navParams.get('deporteEvento');
    this.lugarEvento=navParams.get('lugarEvento');
    this.nombreEvento=navParams.get('nombreEvento');
    this.numeroParticipantesEvento=navParams.get('numeroParticipantesEvento');
    this.exigenciaEvento=navParams.get('exigenciaEvento');
    this.imagen=navParams.get('imagen');
  
  }

  public cargarPaginaEvento(){
    this.navCtrl.push(DeportePage);
  }
  
}
