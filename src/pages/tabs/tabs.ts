import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CreacionPage } from '../creacion/creacion';
import { PerfilPage } from '../perfil/perfil';
import { InicioPage } from '../inicio/inicio';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  //Variables que recibimos

  nombreUsuario='';

  tab1Root = CreacionPage;
  tab2Root = InicioPage;
  tab3Root = PerfilPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nombreUsuario = navParams.get('nombreUsuario');
  }
}
