import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { ClienteModule } from './cliente/cliente.module';
import { ItemcarrinhoModule } from './itemcarrinho/itemcarrinho.module';
import { MenuModule } from './menu/menu.module';
import { ProdutoModule } from './produto/produto.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
