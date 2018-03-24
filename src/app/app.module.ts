import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PersonneDetailPage } from '../pages/personne-detail/personne-detail';
import { ConnexionPage } from '../pages/connexion/connexion';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PersonneServiceProvider } from '../providers/personne-service/personne-service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyCsOeU1gpP8gJyPTeOU2nde0qC-vkoK4qc",
  authDomain: "annuaire-inp.firebaseapp.com",
  databaseURL: "https://annuaire-inp.firebaseio.com/",
  storageBucket: "annuaire-inp.appspot.com",
  messagingSenderId: '<your-messaging-sender-id>'
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PersonneDetailPage,
    ConnexionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PersonneDetailPage,
    ConnexionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PersonneServiceProvider
  ]
})
export class AppModule {}
