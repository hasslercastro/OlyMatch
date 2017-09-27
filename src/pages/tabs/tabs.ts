import { Component } from '@angular/core';

import { CrearPage } from '../crear/crear';
import { PerfilPage } from '../perfil/perfil';
import { InicioPage } from '../inicio/inicio';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CrearPage;
  tab2Root = InicioPage;
  tab3Root = PerfilPage;

  constructor() {

  }
}
