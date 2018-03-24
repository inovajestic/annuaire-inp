import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
/**
 * Generated class for the ConnexionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html',
})
export class ConnexionPage {

  nomUtilisateur;
  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(utilisateur => {
      if (!utilisateur) {
        this.nomUtilisateur = null;
        return;
      }
      this.nomUtilisateur = utilisateur.displayName;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnexionPage');
  }

  connexionAvecFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(res => console.log(res));
  }

  connexionAvecGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(res => console.log(res));
  }

  deconnexion() {
    this.afAuth.auth.signOut();
  }

}
