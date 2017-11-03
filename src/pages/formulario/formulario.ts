/**
 * En esta clase se hace el formulario para la suscripción de un nuevo usuario
 */

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service'

// Los datos serán envíados a la página IngresoPage
import { IngresoPage } from '../ingreso/ingreso';

@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})

export class FormularioPage {

  myForm: FormGroup;

  nombre = '';
  primerApellido = '';
  user = '';
  codigo = '';
  contrasena = '';

  constructor(public navCtrl: NavController, 
    public fb: FormBuilder, 
    public navParams: NavParams, 
    public loginServiceProvider:LoginServiceProvider) {

    this.myForm = this.fb.group({

      nombre: ['', [Validators.required]],
      primerApellido: ['', [Validators.required]],
      user: ['', [Validators.required]],
      codigo: ['', [Validators.required]],
      contrasena: ['', [Validators.required]],
      confirmarContrasena: ['', [Validators.required]]

    });

  }

  public registrarUsuario(){
    this.loginServiceProvider.crearUsuario(this.user,this.contrasena,this.codigo,this.nombre,this.primerApellido).subscribe();
  }

  // Se obtiene la información luego de que todo esté validado
  saveData() {
    alert(JSON.stringify(this.myForm.value));
  }

  volver() {
    this.registrarUsuario();
    this.navCtrl.setRoot(IngresoPage, {
      nombre: this.nombre,
      primerApellido: this.primerApellido,
      user: this.user,
      codigo: this.codigo,
      contrasena: this.contrasena
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

}
