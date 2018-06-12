import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovaRequisicaoPage } from './nova-requisicao';

@NgModule({
  declarations: [
    NovaRequisicaoPage,
  ],
  imports: [
    IonicPageModule.forChild(NovaRequisicaoPage),
  ],
})
export class NovaRequisicaoPageModule {}
