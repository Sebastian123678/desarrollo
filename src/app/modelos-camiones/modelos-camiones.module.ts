import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModelosCamionesPageRoutingModule } from './modelos-camiones-routing.module';

import { ModelosCamionesPage } from './modelos-camiones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModelosCamionesPageRoutingModule
  ],
  declarations: [ModelosCamionesPage]
})
export class ModelosCamionesPageModule {}
