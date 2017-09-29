import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { InicioPage } from '../pages/inicio/inicio';
import { PerfilPage } from '../pages/perfil/perfil';
import { CreacionPage } from '../pages/creacion/creacion';
import { TabsPage } from '../pages/tabs/tabs';
import { EventoPage } from '../pages/evento/evento';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    PerfilPage,
    CreacionPage,
    TabsPage,
    EventoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    PerfilPage,
    CreacionPage,
    TabsPage,
    EventoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
