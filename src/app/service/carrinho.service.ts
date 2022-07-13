import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrinho } from '../domain/carrinho';
import { CarrinhoModel } from '../model/carrinho-model';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private url = 'http://localhost:8080/carrinho/';

  constructor(private http: HttpClient) {}

  cadastrar(model: CarrinhoModel): Observable<CarrinhoModel> {
    return this.http.post<CarrinhoModel>(this.url + 'cadastrar/', model);
  }

  alterar(id: string, model: CarrinhoModel): Observable<CarrinhoModel> {
    return this.http.put<CarrinhoModel>(this.url + 'alterar/' + id, model);
  }

  adicionarProduto(id: string, idProduto: string): Observable<CarrinhoModel> {
    return this.http.put<CarrinhoModel>(this.url + 'adicionar-produtos/' + id, {
      idProduto: idProduto,

      //idProdutos: [idProduto],
    });
  }

  removerProduto(
    id: string,
    idItemCarrinho: string
  ): Observable<CarrinhoModel> {
    return this.http.put<CarrinhoModel>(this.url + 'remover-produto/' + id, {
      idItemCarrinho: idItemCarrinho,
    });
  }

  pagar(id: string, formaPagamentoEnum: string): Observable<CarrinhoModel> {
    return this.http.put<CarrinhoModel>(this.url + 'pagar/' + id, {
      formaPagamentoEnum: formaPagamentoEnum,
    });
  }

  consultar(): Observable<CarrinhoModel[]> {
    return this.http.get<CarrinhoModel[]>(this.url + 'consultar');
  }

  remover(id: string): Observable<CarrinhoModel> {
    return this.http.delete<CarrinhoModel>(this.url + 'remover/' + id);
  }
}
