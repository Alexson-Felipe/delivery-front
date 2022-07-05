import { Cliente } from './cliente';
import { ItemCarrinho } from './ItemCarrinho';

export interface Carrinho {
  id: string;
  itens: ItemCarrinho[];
  cliente: Cliente;
  status: string;
  total: string;
}
