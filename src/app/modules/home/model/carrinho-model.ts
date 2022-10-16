import { Cliente } from '../components/domain/cliente';
import { ItemCarrinho } from '../components/domain/ItemCarrinho';

export interface CarrinhoModel {
  id: string;
  itens: ItemCarrinho[];
  cliente: Cliente;
  status: string;
  total: string;
}
