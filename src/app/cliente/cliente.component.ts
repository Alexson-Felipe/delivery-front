import { ClienteModel } from './../model/cliente-model';
import { Cliente } from './../domain/cliente';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent implements OnInit {
  clientes: Cliente[] = [];

  form: FormGroup = this.formBuilder.group({
    id: new FormControl(null),
    nome: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    cpf: new FormControl(null, [Validators.required, Validators.minLength(11)]),
    senha: new FormControl(null, [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.carregarCadastrados();
  }

  private carregarCadastrados(): void {
    this.clienteService.consultar().subscribe((domains: Cliente[]) => {
      if (domains) {
        this.clientes = domains;
      }
    });
  }

  cadastrar(): void {
    const id = this.form.controls['id'].value;
    const cliente: ClienteModel = this.form.getRawValue();

    if (id) {
      this.clienteService.alterar(id, cliente).subscribe((domain: Cliente) => {
        if (domain.id) {
          this.carregarCadastrados();
          this.form.reset();
        }
      });
    } else {
      this.clienteService.cadastrar(cliente).subscribe((domain: Cliente) => {
        if (domain.id) {
          this.clientes.push(domain);
          this.form.reset();
        }
      });
    }
  }

  editar(cliente: Cliente): void {
    this.form.controls['id'].setValue(cliente.id);
    this.form.controls['nome'].setValue(cliente.nome);
    this.form.controls['cpf'].setValue(cliente.cpf);
    this.form.controls['senha'].setValue(cliente.senha);
  }

  apagar(cliente: Cliente): void {
    this.clienteService.remover(cliente.id).subscribe((domain: Cliente) => {
      if (domain.id) {
        this.carregarCadastrados();
      }
    });
  }
}
