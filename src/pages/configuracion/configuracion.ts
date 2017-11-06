import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AcercaPage } from '../acerca/acerca';

@IonicPage()
@Component({
  selector: 'page-configuracion',
  templateUrl: 'configuracion.html',
})
export class ConfiguracionPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracionPage');
  }

  salir(){
    const root = this.app.getRootNav();
    root.popToRoot();
  }

  pasarAcerca(){
    this.navCtrl.push(AcercaPage);
  }

}
