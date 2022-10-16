import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ClienteModel } from '../../model/cliente-model';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent implements OnInit {
  clientes: ClienteModel[] = [];

  form: FormGroup = this.formBuilder.group({
    id: new FormControl(null),
    nome: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    cpf: new FormControl(null, [Validators.required, Validators.minLength(11)]),
    //senha: new FormControl(null, [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.carregarCadastrados();
  }

  private carregarCadastrados(): void {
    this.clienteService.consultar().subscribe((domains: ClienteModel[]) => {
      if (domains) {
        this.clientes = domains;
      }
    });
  }

  cadastrar(): void {
    const id = this.form.controls['id'].value;
    const cliente: ClienteModel = this.form.getRawValue();

    if (id) {
      this.clienteService
        .alterar(id, cliente)
        .subscribe((domain: ClienteModel) => {
          if (domain.id) {
            this.carregarCadastrados();
            this.form.reset();
          }
        });
    } else {
      this.clienteService
        .cadastrar(cliente)
        .subscribe((domain: ClienteModel) => {
          if (domain.id) {
            this.clientes.push(domain);
            this.form.reset();
          }
        });
    }
  }

  editar(clienteModel: ClienteModel): void {
    this.form.controls['id'].setValue(clienteModel.id);
    this.form.controls['nome'].setValue(clienteModel.nome);
    this.form.controls['cpf'].setValue(clienteModel.cpf);
    //this.form.controls['senha'].setValue(cliente.senha);
  }

  apagar(clienteModel: ClienteModel): void {
    this.clienteService
      .remover(clienteModel.id)
      .subscribe((domain: ClienteModel) => {
        if (domain.id) {
          this.carregarCadastrados();
        }
      });
  }
}
