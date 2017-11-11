import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';

@IonicPage()
@Component({
  selector: 'page-calificacion',
  templateUrl: 'calificacion.html',
})
export class CalificacionPage {

  integrante = '';
  calificacion = '';
  dia = '';
  integrantes = '';
  id = '';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public usuarioServiceProvider: UsuarioServiceProvider) {

    this.integrante = navParams.get('integrante');
    this.dia = navParams.get('dia');
    this.integrantes = navParams.get('integrantes');
    this.id = navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalificacionPage');
  }

  calificar(integrante, nota, fecha){
    console.log('Estamos en calificar')
    console.log(integrante, nota, fecha);
    this.usuarioServiceProvider.solicitarCalificar(this.id, integrante).subscribe(
      x => {
        console.log(x)
        if(x == 'true'){
          console.log('ENtré a cal');
          this.usuarioServiceProvider.calificarUsuario(integrante, nota).subscribe();
        }
        else{
          console.log('Aún no puedes calificar');
        }
      }
    );
  }

}
