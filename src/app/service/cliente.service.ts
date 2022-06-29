import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../domain/cliente';
import { ClienteModel } from '../model/cliente-model';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private url = 'http://localhost:8080/cliente/';

  constructor(private http: HttpClient) {}

  cadastrar(model: ClienteModel): Observable<Cliente> {
    return this.http.post<Cliente>(this.url + 'cadastrar', model);
  }

  alterar(id: string, model: ClienteModel): Observable<Cliente> {
    return this.http.put<Cliente>(this.url + 'alterar/' + id, model);
  }

  consultar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url + 'consultar');
  }

  remover(id: string): Observable<Cliente> {
    return this.http.delete<Cliente>(this.url + 'remover/' + id);
  }
}
