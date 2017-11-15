import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { EventoServiceProvider } from '../../providers/evento-service/evento-service';
import { InformacionPage } from '../informacion/informacion';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

  eventos: Observable<any>;

  id = '';
  nombreUsuario = '';
  deporte = '';
  escenario = '';
  dia = '';
  horario = '';
  participantes = ''; //Número de participantes
  nombre = '';
  integrantes = ''; //Personas
  buscada = '';
  imagen = ''; //Imagen del escenario

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public eventService: EventoServiceProvider,
    public alertCtlr: AlertController,
    public toastCtrl: ToastController) {

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
    console.log("desde buscada ", this.buscada);
    if (this.buscada == '') {
      return this.eventos = this.eventService.getAllEvents();
    } else {
      this.eventos = this.eventService.getSomeEvents(this.buscada);
      console.log(this.eventos)
      return this.eventos;
    }
  }

  pasarInformacion(idEvento,
    nombreUsuarioEvento,
    deporteEvento,
    escenarioEvento,
    diaEvento,
    horarioEvento,
    participantesEvento,
    integrantesEvento,
    nombreEvento,
    imagenEvento) {
    this.navCtrl.push(InformacionPage, {
      id: idEvento,
      nombreUsuario: this.nombreUsuario,
      deporte: deporteEvento,
      escenario: escenarioEvento,
      dia: diaEvento,
      horario: horarioEvento,
      participantes: participantesEvento,
      nombre: nombreEvento,
      integrantes: integrantesEvento,
      imagen: imagenEvento
    });
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

  private showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

}

