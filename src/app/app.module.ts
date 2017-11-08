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
import { NombrePage } from '../pages/nombre/nombre';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';
import { AcercaPage } from '../pages/acerca/acerca';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EventoSettingsProvider } from '../providers/evento-settings/evento-settings';
import { EventoServiceProvider } from '../providers/evento-service/evento-service';
import { EscenarioSettingsProvider } from '../providers/escenario-settings/escenario-settings';
import { EscenarioServiceProvider } from '../providers/escenario-service/escenario-service';
import { LoginSettingsProvider } from '../providers/login-settings/login-settings';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { ImageServiceProvider } from '../providers/image-service/image-service';
import { ImageSettingsProvider } from '../providers/image-settings/image-settings';
import { UsuarioServiceProvider } from '../providers/usuario-service/usuario-service';
import { UsuarioSettingsProvider } from '../providers/usuario-settings/usuario-settings';

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
    NombrePage,
    ConfiguracionPage,
    AcercaPage
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
    NombrePage,
    ConfiguracionPage,
    AcercaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EventoSettingsProvider,
    EventoServiceProvider,
    EscenarioSettingsProvider,
    EscenarioServiceProvider,
    LoginSettingsProvider,
    LoginServiceProvider,
    ImageServiceProvider,
    ImageSettingsProvider,
    UsuarioServiceProvider,
    UsuarioSettingsProvider
  ]
})
export class AppModule {}
