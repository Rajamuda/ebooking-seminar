import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeminarSayaPage } from './seminar-saya';

const routes: Routes = [
  {
    path: '',
    component: SeminarSayaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeminarSayaPageRoutingModule { }
