import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SeminarSayaPage } from './seminar-saya';
import { SeminarSayaPageRoutingModule } from './seminar-saya-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeminarSayaPageRoutingModule
  ],
  declarations: [
    SeminarSayaPage,
  ]
})
export class SeminarSayaModule { }
