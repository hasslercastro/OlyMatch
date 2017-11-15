import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { IngresoPage } from '../ingreso/ingreso';
import { Observable } from 'rxjs/Observable';
import { TabsPage } from '../tabs/tabs';
import { ConfiguracionPage } from '../configuracion/configuracion';
import { Camera } from 'ionic-native';
import { ImageServiceProvider } from '../../providers/image-service/image-service';
import { Cordova } from 'cordova';
import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-4.x';
import { Cloudinary } from 'cloudinary-core';

var uploads = {};

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {
  nombreUsuario = '';
  usuario = '';
  primerApellido = '';
  correo = '';
  fotoPerfil = '';
  apellido = '';
  imagen = '';
  calificacion ='';
  nombreee='';
  private imageSrc: string;
  public base64Image: String;
  informacion: Observable<any>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loginServiceProvider: LoginServiceProvider,
    public imageServiceProvider: ImageServiceProvider
  ) {

    this.nombreUsuario = navParams.data;
    this.loadInfoUsuario();
    console.log('soy la foto en perfil');
    console.log(this.imagen);

  }

  takePic() {

    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imagenData) => {
      console.log(imagenData)

      this.base64Image = 'data:image/jpeg;base64,' + imagenData;


    }, (err) => {
      console.log(err);
    });

  }

  openGallery() {
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetHeight: 1000,
      targetWidth: 1000,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    }).then((imageData) => {
      console.log(imageData, "first one")
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.imageServiceProvider.putProfileImage(this.usuario, this.base64Image).subscribe();
      console.log(this.base64Image, "second one")
    }, (err) => {
      console.log(err);
    });

  }

  // private openGallery(): void {
  //   console.log('Estamos en open gallery')
  //   let cameraOptions = {
  //     sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
  //     destinationType: Camera.DestinationType.FILE_URI,
  //     quality: 100,
  //     targetWidth: 1000,
  //     targetHeight: 1000,
  //     encodingType: Camera.EncodingType.JPEG,
  //     correctOrientation: true
  //   }
  //   console.log('Estamos en GetPicture')
  //   Camera.getPicture(cameraOptions)
  //     .then(file_uri => this.imageSrc = file_uri,
  //     err => console.log(err));
  //   //this.updateProfileImage();
  // }




  // updateProfileImage() {

  //   console.log("esta es la imagen" , this.imageSrc)

  //   // set your env variable CLOUDINARY_URL or set the following configuration
  //   cloudinary.config({
  //     cloud_name: 'jsanch90',
  //     api_key: '791512534712525',
  //     api_secret: 'Pc-W-jb1MGxWcqB8ebHwdV-Rgrw'
  //   });

  //   console.log("** ** ** ** ** ** ** ** ** Uploads ** ** ** ** ** ** ** ** ** **");

  //   // File upload
  //   cloudinary.uploader.upload('pizza.jpg', { tags: 'basic_sample' }, function (err, image) {
  //     console.log();
  //     console.log("** File Upload");
  //     if (err) { console.warn(err); }
  //     console.log("* public_id for the uploaded image is generated by Cloudinary's service.");
  //     console.log("* " + image.public_id);
  //     console.log("* " + image.url);
  //     //waitForAllUploads("pizza",err,image);
  //   });
  //   //this.imageServiceProvider.putProfileImage(this.nombreUsuario,this.imageSrc).subscribe();
  // }



  loadInfoUsuario() {
    console.log('Estamos en loadInfoUsuario');
    console.log(this.nombreUsuario);
    this.informacion = this.loginServiceProvider.getInfoUsuario(this.nombreUsuario);
    this.informacion.subscribe(x => {
      this.nombreee = x[0].nombre;
    this.apellido = x[0].primerApellido;
      this.usuario = x[0].usuario;
      this.imagen = x[0].imagen_usuario;
      if(x[0].calificacion>=0.0 && x[0].calificacion<0.8){
        this.calificacion = 'assets/img/0_estrellas.png';
      }else if(x[0].calificacion>=0.8 && x[0].calificacion<1.8){
        this.calificacion = 'assets/img/1_estrellas.png';
      }else if(x[0].calificacion>=1.8 && x[0].calificacion<2.8){
        this.calificacion = 'assets/img/2_estrellas.png'; 
      }else if(x[0].calificacion>=2.8 && x[0].calificacion<3.7){
        this.calificacion = 'assets/img/3_estrellas.png'; 
      }else if(x[0].calificacion>=3.7 && x[0].calificacion<4.5){
        this.calificacion = 'assets/img/4_estrellas.png';  
      }else if(x[0].calificacion>=4.5 && x[0].calificacion<=5.0){
        this.calificacion = 'assets/img/5_estrellas.png';
      }
    });

  }
  
  getInformacion(){
    return this.nombreUsuario;
  }

  pasarConfiguracion() {
    this.navCtrl.push(ConfiguracionPage);
  }


}
