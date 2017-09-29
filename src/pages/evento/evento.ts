import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CreacionPage } from '../creacion/creacion';

/**
 * Generated class for the EventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evento',
  templateUrl: 'evento.html',
})
export class EventoPage {

  // Variables que enviamos

  fechaEvento='';
  horarioEvento='';
  deporteEvento='';
  lugarEvento='';
  nombreEvento='';
  numeroParticipantesEvento='';
  imagen='assets/img/dt.jpg';
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  public volver(){
    this.navCtrl.setRoot(CreacionPage, {fechaEvento:this.fechaEvento, 
                                        horarioEvento:this.horarioEvento,
                                        deporteEvento:this.deporteEvento,
                                        lugarEvento:this.lugarEvento, 
                                        nombreEvento:this.nombreEvento,
                                        numeroParticipantesEvento:this.numeroParticipantesEvento,
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
