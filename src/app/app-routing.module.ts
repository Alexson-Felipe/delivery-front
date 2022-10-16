import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './modules/home/components/carrinho/carrinho.component';
import { ClienteComponent } from './modules/home/components/cliente/cliente.component';
import { HomesComponent } from './modules/home/components/homes/home.component';
import { ProdutoComponent } from './modules/home/components/produto/produto.component';
import { SobreComponent } from './modules/home/components/sobre/sobre.component';

const routes: Routes = [
  { path: '', component: HomesComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'produto', component: ProdutoComponent },
  { path: 'carrinho', component: CarrinhoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
