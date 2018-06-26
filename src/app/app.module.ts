import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { HttpClientModule } from '@angular/common/http';

import { FirebaseProvider } from '../providers/firebase/firebase';
import { AngularFirestore } from 'angularfire2/firestore';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CarPage } from '../pages/car/car';
import { AddCarPage } from '../pages/add-car/add-car';

export const config = {
  apiKey: "AIzaSyAWvIE3h7LipDW5TNM3rwHV5DNiwga6xXI",
  authDomain: "cars-98281.firebaseapp.com",
  databaseURL: "https://cars-98281.firebaseio.com",
  projectId: "cars-98281",
  storageBucket: "",
  messagingSenderId: "573964245504"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CarPage,
    AddCarPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config, 'cars'), 
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CarPage,
    AddCarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    AngularFirestore,
    AngularFireAuth
  ]
})
export class AppModule {}
