import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EscenarioPage } from './escenario';

@NgModule({
  declarations: [
    EscenarioPage,
  ],
  imports: [
    IonicPageModule.forChild(EscenarioPage),
  ],
})
export class EscenarioPageModule {}
