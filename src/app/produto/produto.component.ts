import { ProdutoModel } from './../model/produto-model';
import { Produto } from './../domain/produto';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
})
export class ProdutoComponent implements OnInit {
  produtos: ProdutoModel[] = [];
  controlador: boolean = true;

  form: FormGroup = this.formBuilder.group({
    id: new FormControl(null),
    nome: new FormControl('', [Validators.required]),
    preco: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.carregarLista();
  }

  private carregarLista() {
    this.produtoService.consultar().subscribe((domains: ProdutoModel[]) => {
      if (domains) {
        this.produtos = domains;
      }
    });
  }

  cadastrar(): void {
    const id = this.form.controls['id'].value;
    const produto: ProdutoModel = this.form.getRawValue(); // transforma tudo do form em Json

    if (id) {
      this.produtoService
        .alterar(id, produto)
        .subscribe((domain: ProdutoModel) => {
          if (domain.id) {
            this.carregarLista();
            this.form.reset();
          }
        });
    } else {
      this.produtoService
        .cadastrar(produto)
        .subscribe((domain: ProdutoModel) => {
          if (domain.id) {
            this.produtos.push(domain);
            this.form.reset();
          }
        });
    }
  }

  editar(produtoModel: ProdutoModel): void {
    this.form.controls['id'].setValue(produtoModel.id);
    this.form.controls['nome'].setValue(produtoModel.nome);
    this.form.controls['preco'].setValue(produtoModel.preco);
    this.form.controls['tipo'].setValue(produtoModel.tipo);
  }

  apagar(produtoModel: ProdutoModel): void {
    this.produtoService
      .remover(produtoModel.id)
      .subscribe((domain: ProdutoModel) => {
        if (domain.id) {
          this.carregarLista();
          this.form.reset();
        }
      });
  }
}
