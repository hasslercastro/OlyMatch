/**
 * En esta clase se crea el nombre del evento
 */
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EventoPage } from '../evento/evento';

@IonicPage()
@Component({
  selector: 'page-nombre',
  templateUrl: 'nombre.html',
})

export class NombrePage {

  myForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {

    this.myForm = this.fb.group({
      nombre: ['', [Validators.required]]
    });

  }

  volverEvento(){
    this.navCtrl.setRoot(EventoPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NombrePage');
  }

  saveData(){
    alert(JSON.stringify(this.myForm.value));
  }

}
