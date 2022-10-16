import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClienteComponent } from './cliente.component';

@NgModule({
  declarations: [ClienteComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
})
export class ClienteModule {}
