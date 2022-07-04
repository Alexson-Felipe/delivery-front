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

  cadastrar(model: CarrinhoModel): Observable<Carrinho> {
    return this.http.post<Carrinho>(this.url + 'cadastrar/', model);
  }

  alterar(id: string, model: CarrinhoModel): Observable<Carrinho> {
    return this.http.put<Carrinho>(this.url + 'alterar/' + id, model);
  }

  adicionarProduto(id: string, idProduto: string): Observable<Carrinho> {
    console.log('teste');
    return this.http.put<Carrinho>(this.url + 'adicionar-produtos/' + id, {
      idProduto: idProduto,

      //idProdutos: [idProduto],
    });
  }

  pagar(id: string, formaPagamentoEnum: string): Observable<Carrinho> {
    return this.http.put<Carrinho>(this.url + 'pagar/' + id, {
      formaPagamentoEnum: formaPagamentoEnum,
    });
  }

  consultar(): Observable<Carrinho[]> {
    return this.http.get<Carrinho[]>(this.url + 'consultar');
  }

  remover(id: string): Observable<Carrinho> {
    return this.http.delete<Carrinho>(this.url + 'remover/' + id);
  }
}
