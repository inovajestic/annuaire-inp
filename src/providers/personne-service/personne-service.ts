import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class PersonneServiceProvider {
  personnes: any;
  personnesRef: AngularFireObject<any>;

  constructor(private afDB: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.auth.signInAnonymously();
    this.recupererPersonne();
  }

  recupererPersonne() {
    this.personnesRef = this.afDB.object('personnes');
    this.personnes = this.afDB.list('personnes').valueChanges();
  }

  listePersonne() {
    return this.personnes;
  }

  sauvegarder(personne: any) {
    this.afDB.list('personnes').push({
      nom: personne.nom,
      prenom: personne.prenom,
      titre: personne.titre,
      ecole: personne.ecole,
      filiere: personne.filiere,
      telephone: personne.telephone,
      email: personne.email,
      lieu: personne.lieu
    });
  }

  rechercherPersonne(term: string) {
    this.recupererPersonne();

    if(!term.trim()) {
      // Si la valeur à rechercher est nulle, on renvoit la liste des personnes
      return this.personnes;
    }

    this.personnes = this.personnes.filter((personne) => {
      if(personne.nom.toLowerCase().indexOf(term.toLowerCase()) > -1) {
        return personne;
      }
      if(personne.prenom.toLowerCase().indexOf(term.toLowerCase()) > -1) {
        return personne;
      }
      if(personne.titre.toLowerCase().indexOf(term.toLowerCase()) > -1) {
        return personne;
      }
      if(personne.filiere.toLowerCase().indexOf(term.toLowerCase()) > -1) {
        return personne;
      }
      if(personne.telephone.toLowerCase().indexOf(term.toLowerCase()) > -1) {
        return personne;
      }
      if(personne.ecole.toLowerCase().indexOf(term.toLowerCase()) > -1) {
        return personne;
      }
    });
    return this.personnes;
  }
}
