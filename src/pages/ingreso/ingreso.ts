import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { TabsPage } from '../tabs/tabs';
import { FormularioPage } from '../formulario/formulario';
import { PerfilPage } from '../perfil/perfil';

/**
 * Generated class for the IngresoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ingreso',
  templateUrl: 'ingreso.html',
})
export class IngresoPage {

  //Variables que enviamos

  nombreUsuario='';
  contrasena = '';
  mensajeError='';
  usuarioEncontrado;
  msgError='';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loginServiceProvider : LoginServiceProvider) {

      //this.perfilPage.loadInfoUsuario();

  }

  validarUsuario(){
    console.log(this.nombreUsuario)
     this.usuarioEncontrado=this.loginServiceProvider.comprobarUsuario(this.nombreUsuario, this.contrasena);
     this.usuarioEncontrado.subscribe( x => {
        if (x  == 'true'){
          this.iniciar()
        }
        else {
          this.mensajeError = "El usuario o la contraseña son inválidos";
          console.log("contraseña o usuario invalido")
        }
     } 
    
    );

    console.log(this.nombreUsuario)
      

  }

  iniciar(){
   
    this.navCtrl.push(TabsPage,{ nombreUsuario:this.nombreUsuario} );
  }

  registrar(){
    this.navCtrl.push(FormularioPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad IngresoPage');
  }

}
