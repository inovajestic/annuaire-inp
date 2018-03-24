import { Injectable } from '@angular/core';

import { PERSONNES } from '../../data-model';

@Injectable()
export class PersonneServiceProvider {
  personnes: any;

  constructor() {
    this.personnes = PERSONNES;
  }

  listePersonne() {
    return this.personnes;
  }

  rechercherPersonne(term: string) {
    this.personnes = PERSONNES;
    
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
