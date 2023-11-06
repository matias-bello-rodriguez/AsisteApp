import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QraprobadoPage } from './qraprobado.page';

const routes: Routes = [
  {
    path: '',
    component: QraprobadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QraprobadoPageRoutingModule {}
