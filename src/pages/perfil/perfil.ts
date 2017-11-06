import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { IngresoPage } from '../ingreso/ingreso';
import { Observable } from 'rxjs/Observable';
import { TabsPage } from '../tabs/tabs';
import { ConfiguracionPage } from '../configuracion/configuracion';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  nombreUsuario='';
  usuario = '';

  informacion: Observable<any>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loginServiceProvider: LoginServiceProvider,
               ) {


    this.nombreUsuario=navParams.data;
    this.loadInfoUsuario();

  }

  loadInfoUsuario() {
    console.log('Estamos en loadInfoUsuario');
    console.log(this.nombreUsuario);
    this.informacion = this.loginServiceProvider.getInfoUsuario(this.nombreUsuario);
    this.informacion.subscribe(x => this.usuario = x[0].usuario);

  }

  pasarConfiguracion(){
    this.navCtrl.push(ConfiguracionPage);
  }

}
