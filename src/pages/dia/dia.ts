/**
 * En esta clase se selecciona el día del evento
 */
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HorarioPage } from '../horario/horario';
import { EscenarioServiceProvider } from '../../providers/escenario-service/escenario-service';
import { Observable } from 'rxjs/Observable';
//import {Observable} from '@reactivex/rxjs/es6/Observable.js';   

@IonicPage()
@Component({
  selector: 'page-dia',
  templateUrl: 'dia.html',
})

export class DiaPage {
  fechas: Observable<any>;
  myForm: FormGroup;
  imagen : Observable<any>;
  imagenRuta;
  deporte = '';
  escenario = '';
  dia = '';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public fb: FormBuilder,
    public escenarioServiceProvider : EscenarioServiceProvider) {

    this.myForm = this.fb.group({
      dia: ['', [Validators.required]]
    });

    //Variables que recibimos de ngModel

    this.deporte = navParams.get('deporte');
    this.escenario = navParams.get('escenario');
    this.mostrarFechas();
    this.imagen = this.escenarioServiceProvider.traerImagenEscenario(navParams.get('escenario'));
    this.imagen.subscribe(x => this.imagenRuta = x);
    // this.imagen.subscribe(
    //   function (x) { 
    //     //console.log(x[0])
    //     //console.log(typeof(x[0]))
    //     this.imagenRuta = x[0];
    //     //console.log(this.imagenRuta)
    //  },
    //   function (err) { console.log('Error: %s', err); },
    //   function () { console.log('Completed'); });
    console.log(this.imagenRuta);
    console.log(this.imagen);

  }


  public mostrarFechas(){
    this.fechas = this.escenarioServiceProvider.traerFechasPorEscenario(this.escenario);
  }

  pasarHorario(){
    this.navCtrl.push(HorarioPage, {deporte:this.deporte,
                                    escenario:this.escenario,
                                    imagen: this.imagenRuta,
                                    dia:this.dia});
  }

  saveData(){
    JSON.stringify(this.myForm.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiaPage');
  }

}
