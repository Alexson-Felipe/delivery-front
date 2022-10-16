import { SobreComponent } from './components/sobre/sobre.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { PerfilLogadoComponent } from './components/perfil-logado/perfil-logado.component';
import { ItemcarrinhoComponent } from './components/itemcarrinho/itemcarrinho.component';
import { HomesComponent } from './components/homes/homes.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    LoginComponent,
    MenuComponent,
    CarrinhoComponent,
    ClienteComponent,
    HomesComponent,
    ItemcarrinhoComponent,
    PerfilLogadoComponent,
    ProdutoComponent,
    RodapeComponent,
    SobreComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class HomeModule {}
