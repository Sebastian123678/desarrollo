import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelosCarrosPage } from './modelos-carros.page';

const routes: Routes = [
  {
    path: '',
    component: ModelosCarrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModelosCarrosPageRoutingModule {}
