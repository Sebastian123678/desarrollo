import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModelosCarrosPageRoutingModule } from './modelos-carros-routing.module';

import { ModelosCarrosPage } from './modelos-carros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModelosCarrosPageRoutingModule
  ],
  declarations: [ModelosCarrosPage]
})
export class ModelosCarrosPageModule {}
