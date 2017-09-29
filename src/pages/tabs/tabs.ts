import { Component } from '@angular/core';

import { CreacionPage } from '../creacion/creacion';
import { PerfilPage } from '../perfil/perfil';
import { InicioPage } from '../inicio/inicio';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CreacionPage;
  tab2Root = InicioPage;
  tab3Root = PerfilPage;

  constructor() {

  }
}
