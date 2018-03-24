import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormPersonnePage } from './form-personne';

@NgModule({
  declarations: [
    FormPersonnePage,
  ],
  imports: [
    IonicPageModule.forChild(FormPersonnePage),
  ],
})
export class FormPersonnePageModule {}
