import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventoServiceProvider } from '../../providers/evento-service/evento-service';
import { Observable } from 'rxjs/Observable';
import { CalificacionPage } from '../calificacion/calificacion';
import { PerfilPage } from '../perfil/perfil';
import { LoginServiceProvider } from '../../providers/login-service/login-service';


@IonicPage()
@Component({
  selector: 'page-informacion',
  templateUrl: 'informacion.html',
})

export class InformacionPage {

  eventos: Observable<any>;
  perfil: Observable<any>;

  id = '';
  nombreUsuario = '';
  deporte = '';
  escenario = '';
  dia = '';
  horario = '';
  participantes = '';
  nombre = '';
  integrantes = '';
  nombreIntegrante = '';
  apellidoIntegrante = '';
  correoIntegrante = '';
  fotoIntegrante = '';
  mensajeValido = '';
  mensajeError = '';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public eventoServiceProvider: EventoServiceProvider,
    public loginServiceProvider: LoginServiceProvider) {

    this.nombreUsuario = navParams.get('nombreUsuario');
    this.deporte = navParams.get('deporte');
    this.escenario = navParams.get('escenario');
    this.dia = navParams.get('dia');
    this.horario = navParams.get('horario');
    this.participantes = navParams.get('participantes');
    this.nombre = navParams.get('nombre');
    this.integrantes = navParams.get('integrantes');
    this.id = navParams.get('id');

    console.log(this.integrantes);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformacionPage');
  }

  unirParticipante(lugar, fecha, hora) {
    this.perfil = this.loginServiceProvider.getInfoUsuario(this.nombreUsuario);
    this.perfil.subscribe(x => {
    this.nombreUsuario = x[0].usuario,
      this.correoIntegrante = x[0].correo,
      this.nombreIntegrante = x[0].nombre,
      this.apellidoIntegrante = x[0].primerApellido,
      this.fotoIntegrante = x[0].imagen_usuario
      this.getInformacionPerfil()
    });
    // (nombreUsuario, lugar, fecha, hora, foto, nombre, primerApellido)
    console.log(this.correoIntegrante);

  }

  getInformacionPerfil() {
    this.eventoServiceProvider.putParticipante(this.nombreUsuario,
      this.escenario,
      this.dia,
      this.horario,
      this.fotoIntegrante,
      this.nombreIntegrante,
      this.apellidoIntegrante).subscribe(x => {
        console.log('esto es= apellido: ', this.apellidoIntegrante);
        if (x == 'true') {
          this.mensajeValido = 'Te has unido al juego';
        }
        else {
          this.mensajeError = 'Ya estás en el evento o no hay más cupos disponibles';
        }
      })
  }

  pasarCalificacion(integrante) {
    this.navCtrl.push(CalificacionPage, {
      id: this.id,
      integrante: integrante,
      dia: this.dia,
      integrantes: this.integrantes
    })
  }

}
