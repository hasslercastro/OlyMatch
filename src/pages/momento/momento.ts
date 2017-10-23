import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EventoPage } from '../evento/evento';

/**
 * Generated class for the EventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-momento',
  templateUrl: 'momento.html',
})
export class MomentoPage {

  // Variables que enviamos

  fechaEvento='';
  horarioEvento='';
  deporteEvento='';
  lugarEvento='';
  nombreEvento='';
  numeroParticipantesEvento='';
  exigenciaEvento='';
  imagen='assets/img/cancha.png';

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  public crear(){
    this.navCtrl.setRoot(EventoPage,  {fechaEvento:this.fechaEvento, 
                                        horarioEvento:this.horarioEvento,
                                        deporteEvento:this.deporteEvento,
                                        lugarEvento:this.lugarEvento, 
                                        nombreEvento:this.nombreEvento,
                                        numeroParticipantesEvento:this.numeroParticipantesEvento,
                                        exigenciaEvento:this.exigenciaEvento,
                                        imagen:this.imagen
                                        });
  }

  public fecha = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventoPage');
  }

}
