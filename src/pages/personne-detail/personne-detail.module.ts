import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonneDetailPage } from './personne-detail';

@NgModule({
  declarations: [
    PersonneDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonneDetailPage),
  ],
})
export class PersonneDetailPageModule {}
