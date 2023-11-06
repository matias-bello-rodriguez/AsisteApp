import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrfinalPage } from './qrfinal.page';

const routes: Routes = [
  {
    path: '',
    component: QrfinalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrfinalPageRoutingModule {}
