import { Produto } from './../domain/produto';
import { ProdutoService } from './../service/produto.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Carrinho } from '../domain/carrinho';
import { Cliente } from '../domain/cliente';
import { CarrinhoModel } from '../model/carrinho-model';
import { ClienteModel } from '../model/cliente-model';
import { CarrinhoService } from '../service/carrinho.service';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent implements OnInit {
  carrinhos: Carrinho[] = [];
  clientes: Cliente[] = [];
  produtos: Produto[] = [];

  form: FormGroup = this.formBuilder.group({
    idCliente: new FormControl('', [Validators.required]),
  });

  formAddProduto: FormGroup = this.formBuilder.group({
    id: new FormControl('', [Validators.required]),
    idProduto: new FormControl('', [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private carrinhoService: CarrinhoService,
    private clienteService: ClienteService,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.consultarClientes();
    this.consultarCarrinhos();
    this.consultarProdutos();
  }

  private consultarClientes(): void {
    this.clienteService.consultar().subscribe((cons) => {
      this.clientes = cons;
    });
  }

  private consultarCarrinhos(): void {
    this.carrinhoService.consultar().subscribe((cons) => {
      this.carrinhos = cons;
    });
  }

  private consultarProdutos(): void {
    this.produtoService.consultar().subscribe((cons) => {
      this.produtos = cons;
    });
  }

  cadastrar(): void {
    if (this.form.valid) {
      //const idCliente = this.form.controls['idCliente'].value;
      const idCliente: ClienteModel = this.form.getRawValue();

      this.carrinhoService.cadastrar(idCliente).subscribe(() => {
        this.consultarCarrinhos();
        this.form.reset();
      });
    }
  }

  mostrarModal(carrinho: Carrinho): void {
    this.formAddProduto.controls['id'].setValue(carrinho.id);
  }

  add(): void {
    if (this.formAddProduto.valid) {
      const idCarrinho = this.formAddProduto.controls['id'].value;
      const idProduto = this.formAddProduto.controls['idProduto'].value;

      this.carrinhoService
        .adicionarProduto(idCarrinho, idProduto)
        .subscribe(() => {
          this.consultarCarrinhos();
          this.formAddProduto.reset(); //VERIFICAR ISSO
        });
    }
  }

  apagar(carrinho: Carrinho): void {}

  pagar(carrinho: Carrinho): void {}
}
