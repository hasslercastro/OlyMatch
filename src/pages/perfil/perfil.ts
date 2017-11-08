import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { IngresoPage } from '../ingreso/ingreso';
import { Observable } from 'rxjs/Observable';
import { TabsPage } from '../tabs/tabs';
import { ConfiguracionPage } from '../configuracion/configuracion';
import { Camera } from 'ionic-native';
import { ImageServiceProvider } from '../../providers/image-service/image-service';
import { Cordova } from 'cordova'

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {
  nombreUsuario='';
  usuario = '';
  private imageSrc: string;
  informacion: Observable<any>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loginServiceProvider: LoginServiceProvider,
              public imageServiceProvider: ImageServiceProvider
               ) {


    this.nombreUsuario=navParams.data;
    this.loadInfoUsuario();

  }

  private openGallery (): void {
    let cameraOptions = {
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: Camera.DestinationType.FILE_URI,
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: Camera.EncodingType.JPEG,
      correctOrientation: true
    }

    Camera.getPicture(cameraOptions)
      .then(file_uri => this.imageSrc = file_uri,
      err => console.log(err));
      //this.updateProfileImage();
  }


  updateProfileImage(){
    this.imageServiceProvider.putProfileImage(this.nombreUsuario,this.imageSrc).subscribe();
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
