import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrfinalPageRoutingModule } from './qrfinal-routing.module';

import { QrfinalPage } from './qrfinal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrfinalPageRoutingModule
  ],
  declarations: [QrfinalPage]
})
export class QrfinalPageModule {}
