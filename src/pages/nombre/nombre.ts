/**
 * En esta clase se crea el nombre del evento
 */
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EventoPage } from '../evento/evento';
import { InicioPage } from '../inicio/inicio';
import { EscenarioServiceProvider } from '../../providers/escenario-service/escenario-service';
import { Observable } from 'rxjs/Observable';
import { EventoServiceProvider } from '../../providers/evento-service/evento-service';

@IonicPage()
@Component({
  selector: 'page-nombre',
  templateUrl: 'nombre.html',
})

export class NombrePage {

  myForm: FormGroup;
  eventos: Observable<any>;

  deporte = '';
  escenario = '';
  dia = '';
  horario = '';
  participantes = '';
  nombre = '';
  imagen = '';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public fb: FormBuilder,
    public escenarioServiceProvider : EscenarioServiceProvider,
    public eventoServiceProvider: EventoServiceProvider) {

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
  }

  public crearEvento(){
    let administrador = 'villa';
    let participante = ['josh','hassler','rengifo'];
    console.log("desde antes (NOMBRE)")
    console.log(this.imagen[0])
    this.imagen = this.imagen[0];
    this.eventoServiceProvider.crearEvento(this.nombre,administrador,this.escenario,this.dia,participante,this.participantes,this.horario,this.deporte,this.imagen).subscribe();
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

}
