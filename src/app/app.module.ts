import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfilLogadoModule } from './modules/home/components/perfil-logado/perfil-logado.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrinhoModule } from './modules/home/components/carrinho/carrinho.module';
import { ClienteModule } from './modules/home/components/cliente/cliente.module';
import { ItemcarrinhoModule } from './modules/home/components/itemcarrinho/itemcarrinho.module';
import { MenuModule } from './modules/home/components/menu/menu.module';
import { ProdutoModule } from './modules/home/components/produto/produto.module';
import { RodapeModule } from './modules/home/components/rodape/rodape.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MenuModule,
    CarrinhoModule,
    ClienteModule,
    ProdutoModule,
    ItemcarrinhoModule,
    RodapeModule,
    PerfilLogadoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
