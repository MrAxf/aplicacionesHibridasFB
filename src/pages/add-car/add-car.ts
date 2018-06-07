import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Card } from 'ionic-angular';
import { Car } from '../../models/car';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { FormGroup } from '@angular/forms';

/**
 * Generated class for the AddCarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-car',
  templateUrl: 'add-car.html',
})
export class AddCarPage {

  carForm: FormGroup;
  car: Car;

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseProvider: FirebaseProvider) {
    this.car = {};
  }

  saveData(){
    this.firebaseProvider.addCar(this.car);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCarPage');
  }

  createCarForm(){
    
  }

}
