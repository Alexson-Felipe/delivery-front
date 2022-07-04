import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Carrinho } from '../domain/carrinho';
import { Cliente } from '../domain/cliente';
import { ClienteModel } from '../model/cliente-model';
import { CarrinhoService } from '../service/carrinho.service';
import { ClienteService } from '../service/cliente.service';
import { Produto } from './../domain/produto';
import { ProdutoService } from './../service/produto.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent implements OnInit {
  produto: Produto | undefined;
  carrinhos: Carrinho[] = [];
  clientes: Cliente[] = [];
  produtos: Produto[] = [];
  modal: boolean = false;
  modalPagar: boolean = false;

  form: FormGroup = this.formBuilder.group({
    idCliente: new FormControl('', [Validators.required]),
  });

  formPagar: FormGroup = this.formBuilder.group({
    id: new FormControl('', [Validators.required]),
    formaPagamentoEnum: new FormControl('', [Validators.required]),
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

  addMaisProduto(carrinho: Carrinho): void {
    console.log('addMaisproduto');
    this.formAddProduto.controls['id'].setValue(carrinho.id);
    console.log(carrinho.id);
    console.log(carrinho.produtos);
    this.add();
  }

  mostrarModal(carrinho: Carrinho): void {
    this.ativarModal();
    this.formAddProduto.controls['id'].setValue(carrinho.id);
  }

  fecharModal(): void {
    this.modal = false;
    this.formAddProduto.reset();
  }

  ativarModal(): void {
    this.modal = true;
    this.formAddProduto.reset();
  }

  mostrarModalPagar(carrinho: Carrinho): void {
    this.ativarModalPagar();
    this.formPagar.controls['id'].setValue(carrinho.id);
  }

  fecharModalPagar(): void {
    this.modal = false;
    this.formPagar.reset();
  }

  ativarModalPagar(): void {
    this.modalPagar = true;
    this.formPagar.reset();
  }

  add(): void {
    console.log('Entrou antes do if');
    if (this.formAddProduto.valid) {
      console.log('add');
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

  removerUm(): void {}

  apagar(carrinho: Carrinho): void {
    this.carrinhoService.remover(carrinho.id).subscribe((domain: Carrinho) => {
      if (domain.id) {
        this.consultarCarrinhos();
        this.form.reset();
      }
    });
  }

  pagar(): void {
    if (this.formPagar.valid) {
      const idCarrinho = this.formPagar.controls['id'].value;
      const formaPagamentoEnum =
        this.formPagar.controls['formaPagamentoEnum'].value;

      this.carrinhoService
        .pagar(idCarrinho, formaPagamentoEnum)
        .subscribe(() => {
          this.consultarCarrinhos();
          this.formPagar.reset(); //VERIFICAR ISSO
        });
    }
  }
}
