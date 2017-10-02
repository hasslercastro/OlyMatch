import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EventoPage } from '../evento/evento';

@Component({
  selector: 'page-creacion',
  templateUrl: 'creacion.html'
})

export class CreacionPage {

  fechaEvento='';
  horarioEvento='';
  deporteEvento='';
  lugarEvento='';
  nombreEvento='';
  numeroParticipantesEvento='';
  imagen='assets/img/cancha.png';

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.fechaEvento=navParams.get('fechaEvento');
    this.horarioEvento=navParams.get('horarioEvento');
    this.deporteEvento=navParams.get('deporteEvento');
    this.lugarEvento=navParams.get('lugarEvento');
    this.nombreEvento=navParams.get('nombreEvento');
    this.numeroParticipantesEvento=navParams.get('numeroParticipantesEvento');
    this.imagen=navParams.get('imagen');
  
  }

  public cargarPaginaEvento(){
    this.navCtrl.push(EventoPage);
  }

}
