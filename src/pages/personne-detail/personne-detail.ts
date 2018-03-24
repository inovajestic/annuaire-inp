import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-personne-detail',
  templateUrl: 'personne-detail.html',
})
export class PersonneDetailPage {
  
  personne: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.personne = this.navParams.get('personne');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonneDetailPage');
  }

}
