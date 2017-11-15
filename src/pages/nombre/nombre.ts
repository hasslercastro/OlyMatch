/**
 * En esta clase se crea el nombre del evento
 */
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EventoPage } from '../evento/evento';
import { InicioPage } from '../inicio/inicio';
import { EscenarioServiceProvider } from '../../providers/escenario-service/escenario-service';
import { Observable } from 'rxjs/Observable';
import { EventoServiceProvider } from '../../providers/evento-service/evento-service';
import { LoginServiceProvider } from '../../providers/login-service/login-service';

@IonicPage()
@Component({
  selector: 'page-nombre',
  templateUrl: 'nombre.html',
})

export class NombrePage {

  myForm: FormGroup;
  eventos: Observable<any>;
  perfil: Observable<any>;

  deporte = '';
  escenario = '';
  dia = '';
  horario = '';
  participantes = '';
  nombre = '';
  imagen = '';

  //Variables del usuario
  nombreUsuario='';
  nombreIntegrante='';
  apellidoIntegrante='';
  fotoIntegrante='';
  codigo='';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public fb: FormBuilder,
    public escenarioServiceProvider : EscenarioServiceProvider,
    public eventoServiceProvider: EventoServiceProvider,
    public toastCtrl: ToastController,
    public loginServiceProvider: LoginServiceProvider) {

    this.myForm = this.fb.group({
      nombre: ['', [Validators.required]]
    });

    //Variables que recibimos
    this.deporte = navParams.get('deporte');
    this.escenario = navParams.get('escenario');
    this.dia = navParams.get('dia');
    this.horario = navParams.get('horario');
    this.imagen = navParams.get('imagen');
    this.participantes = navParams.get('participantes');
    this.nombreUsuario= navParams.get('nombreUsuario');

    console.log('administradorrrrrrrr');
    console.log(this.nombreUsuario);
    
  }

  unirParticipante(lugar, fecha, hora) {
    console.log('debuggiando ando');
    console.log(this.nombreUsuario);
    this.perfil = this.loginServiceProvider.getInfoUsuario(this.nombreUsuario);
    this.perfil.subscribe(x => {
    this.nombreUsuario = x[0].usuario,
      this.nombreIntegrante = x[0].nombre,
      this.apellidoIntegrante = x[0].primerApellido,
      this.fotoIntegrante = x[0].imagen_usuario,
      this.codigo = x[0].codigo,
      this.getInformacionPerfil()
    });
    // (nombreUsuario, lugar, fecha, hora, foto, nombre, primerApellido)
    

  }

  getInformacionPerfil() {
    console.log('Uniendo participante', this.nombreUsuario);
    this.eventoServiceProvider.putParticipante(this.nombreUsuario,
      this.escenario,
      this.dia,
      this.horario,
      this.fotoIntegrante,
      this.nombreIntegrante,
      this.apellidoIntegrante,
      this.codigo).subscribe()
  }

  public crearEvento(){
    let participante = [];
    console.log("desde antes (NOMBRE)")
    console.log(this.imagen[0])
    this.imagen = this.imagen[0];
    this.eventoServiceProvider.crearEvento(this.nombre,this.nombreUsuario,this.escenario,this.dia,participante,this.participantes,this.horario,this.deporte,this.imagen)
    .subscribe(data => {
      this.loadEventos();
      this.showToast('Evento creado');
    });
    this.unirParticipante(this.escenario, this.dia, this.horario);
  }



  public confirmarReserva(){
    console.log("/////////////////////7 ")
    this.escenarioServiceProvider.reservarEscenario(this.escenario,this.dia,this.horario).subscribe();
  }

  public loadEventos() {
    return this.eventos = this.eventoServiceProvider.getAllEvents();
  }

  volverEvento(){
    this.confirmarReserva();
    this.crearEvento();
    this.loadEventos();
    this.navCtrl.setRoot(EventoPage, {deporte:this.deporte,
                                      escenario:this.escenario,
                                      dia:this.dia,
                                      horario:this.horario,
                                      participantes:this.participantes,
                                      nombre:this.nombre});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NombrePage');
  }

  saveData(){
    JSON.stringify(this.myForm.value);
  }

  private showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

}
