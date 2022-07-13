import { Cliente } from '../domain/cliente';
import { ItemCarrinho } from '../domain/ItemCarrinho';

export interface CarrinhoModel {
  id: string;
  itens: ItemCarrinho[];
  cliente: Cliente;
  status: string;
  total: string;
}
