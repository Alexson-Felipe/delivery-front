import { Produto } from './produto';

export interface ItemCarrinho {
  id: string;
  qtd: string;
  produto: Produto;
}
