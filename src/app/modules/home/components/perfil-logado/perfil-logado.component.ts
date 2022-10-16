import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-logado',
  templateUrl: './perfil-logado.component.html',
  styleUrls: ['./perfil-logado.component.scss'],
})
export class PerfilLogadoComponent implements OnInit {
  nome: string = 'Alex';
  pontos: number = 1.698;
  constructor() {}

  ngOnInit(): void {}
}
