import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { CarPage } from '../car/car';
import { AddCarPage } from '../add-car/add-car';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cars: any;

  constructor(public navCtrl: NavController, private firebaseProvider: FirebaseProvider) {
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

}
