import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModelosMotosPageRoutingModule } from './modelos-motos-routing.module';

import { ModelosMotosPage } from './modelos-motos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModelosMotosPageRoutingModule
  ],
  declarations: [ModelosMotosPage]
})
export class ModelosMotosPageModule {}
