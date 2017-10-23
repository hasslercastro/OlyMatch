import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { InicioPage } from '../pages/inicio/inicio';
import { PerfilPage } from '../pages/perfil/perfil';
import { EventoPage } from '../pages/evento/evento';
import { TabsPage } from '../pages/tabs/tabs';
import { MomentoPage } from '../pages/momento/momento';
import { IngresoPage } from '../pages/ingreso/ingreso';
import { FormularioPage } from '../pages/formulario/formulario';
import { DeportePage } from '../pages/deporte/deporte';
import { EscenarioPage } from '../pages/escenario/escenario';
import { DiaPage } from '../pages/dia/dia';
import { HorarioPage } from '../pages/horario/horario';
import { ParticipantesPage } from '../pages/participantes/participantes';
import { NombrePage} from '../pages/nombre/nombre';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EventoSettingsProvider } from '../providers/evento-settings/evento-settings';
import { EventoServiceProvider } from '../providers/evento-service/evento-service';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    PerfilPage,
    EventoPage,
    TabsPage,
    MomentoPage,
    IngresoPage,
    FormularioPage,
    DeportePage,
    EscenarioPage,
    DiaPage,
    HorarioPage,
    ParticipantesPage,
    NombrePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    PerfilPage,
    EventoPage,
    TabsPage,
    MomentoPage,
    IngresoPage,
    FormularioPage,
    DeportePage,
    EscenarioPage,
    DiaPage,
    HorarioPage,
    ParticipantesPage,
    NombrePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EventoSettingsProvider,
    EventoServiceProvider
  ]
})
export class AppModule {}
