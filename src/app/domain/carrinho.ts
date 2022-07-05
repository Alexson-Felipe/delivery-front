import { Cliente } from './cliente';
import { Produto } from './produto';

export interface Carrinho {
  id: string;
  produtos: Produto[];
  cliente: Cliente;
  status: string;
  total: string;
}
