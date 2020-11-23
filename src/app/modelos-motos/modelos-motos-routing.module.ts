import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelosMotosPage } from './modelos-motos.page';

const routes: Routes = [
  {
    path: '',
    component: ModelosMotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModelosMotosPageRoutingModule {}
