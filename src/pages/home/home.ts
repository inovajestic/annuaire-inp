import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PersonneServiceProvider } from '../../providers/personne-service/personne-service';

import { PersonneDetailPage } from '../personne-detail/personne-detail';
import { FormPersonnePage } from '../form-personne/form-personne';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  personnes: any;
  constructor(public navCtrl: NavController, private personneService: PersonneServiceProvider) {
    this.personnes = this.personneService.listePersonne();
  }

  recherchePersonne(event) {
    // On réucpère la valeur à rechercher
    let val = event.target.value;

    this.personnes = this.personneService.rechercherPersonne(val);
  }

  afficheDetail(event, personne) {
    this.navCtrl.push(PersonneDetailPage, {
      personne: personne
    });
  }

  enregisterPersonne() {
    this.navCtrl.push(FormPersonnePage);
  }
}
