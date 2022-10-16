import { RodapeModule } from '../rodape/rodape.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu.component';
import { PerfilLogadoModule } from '../perfil-logado/perfil-logado.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, RouterModule, RodapeModule, PerfilLogadoModule],
  exports: [MenuComponent],
})
export class MenuModule {}
