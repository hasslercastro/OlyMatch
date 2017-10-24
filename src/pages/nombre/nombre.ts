/**
 * En esta clase se crea el nombre del evento
 */
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EventoPage } from '../evento/evento';
import { InicioPage } from '../inicio/inicio';

@IonicPage()
@Component({
  selector: 'page-nombre',
  templateUrl: 'nombre.html',
})

export class NombrePage {

  myForm: FormGroup;

  deporte = '';
  escenario = '';
  dia = '';
  horario = '';
  participantes = '';
  nombre = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {

    this.myForm = this.fb.group({
      nombre: ['', [Validators.required]]
    });

    //Variables que recibimos
    this.deporte = navParams.get('deporte');
    this.escenario = navParams.get('escenario');
    this.dia = navParams.get('dia');
    this.horario = navParams.get('horario');
    this.participantes = navParams.get('participantes');

  }

  volverEvento(){
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
    alert(JSON.stringify(this.myForm.value));
  }

}
