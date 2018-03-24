import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PersonneServiceProvider } from '../../providers/personne-service/personne-service';
import { PersonneDetailPage } from '../../pages/personne-detail/personne-detail';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-form-personne',
  templateUrl: 'form-personne.html',
})
export class FormPersonnePage {
  nom: string;
  prenom: string;
  titre: string;
  ecole: string;
  filiere: string;
  telephone: string;
  email: string;
  lieu: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private personneService: PersonneServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPersonnePage');
  }

  sauvegarder() {
    let personne = {
      nom: this.nom,
      prenom: this.prenom,
      titre: this.titre,
      ecole: this.ecole,
      filiere: this.filiere,
      telephone: this.telephone,
      email: this.email,
      lieu: this.lieu
    };
    this.personneService.sauvegarder(personne);
    this.navCtrl.pop();
    this.navCtrl.push(PersonneDetailPage, {
      personne
    });
  }
}
