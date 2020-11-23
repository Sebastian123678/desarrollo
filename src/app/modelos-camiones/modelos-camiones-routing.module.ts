import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelosCamionesPage } from './modelos-camiones.page';

const routes: Routes = [
  {
    path: '',
    component: ModelosCamionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModelosCamionesPageRoutingModule {}
