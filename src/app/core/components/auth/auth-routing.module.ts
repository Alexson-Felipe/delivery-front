import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeLoginComponent } from './pages/home-login/home-login.component';

const routes: Routes = [{ path: '', component: HomeLoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
