import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { HomeLoginComponent } from './pages/home-login/home-login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SignComponent } from './pages/sign/sign.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [SignComponent, RegisterComponent, HomeLoginComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, SharedModule],
})
export class AuthModule {}
