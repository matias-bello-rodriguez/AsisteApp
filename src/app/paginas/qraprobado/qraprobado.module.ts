import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QraprobadoPageRoutingModule } from './qraprobado-routing.module';

import { QraprobadoPage } from './qraprobado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QraprobadoPageRoutingModule
  ],
  declarations: [QraprobadoPage]
})
export class QraprobadoPageModule {}
