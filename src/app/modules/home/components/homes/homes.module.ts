import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomesComponent } from './homes.component';

@NgModule({
  declarations: [HomesComponent],
  imports: [CommonModule],
  exports: [HomesComponent],
})
export class HomesModule {}
