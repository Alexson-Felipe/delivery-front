import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignComponent } from './pages/sign/sign.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { HomeLoginComponent } from './pages/home-login/home-login.component';

@NgModule({
  declarations: [SignComponent, RegisterComponent, HomeLoginComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
})
export class AuthModule {}
