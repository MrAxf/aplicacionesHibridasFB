import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { CarPage } from '../car/car';
import { AddCarPage } from '../add-car/add-car';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cars: any;

  constructor(public navCtrl: NavController, private firebaseProvider: FirebaseProvider, public afAuth: AngularFireAuth) {
    firebaseProvider.getCars()
      .subscribe(data => this.cars = data);
  }

  obtenerDetalle(id) { 
    this.navCtrl.push(CarPage, {"id": id});
  }

  addCar(){
    this.navCtrl.push(AddCarPage);
  }

  deleteCar(id){
    this.firebaseProvider.deleteCar(id);
  }

  login() { 
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() { 
    this.afAuth.auth.signOut();
  }

}
