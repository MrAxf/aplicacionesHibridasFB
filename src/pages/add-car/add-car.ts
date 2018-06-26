import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Car } from '../../models/car';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseProvider: FirebaseProvider, private formBuilder: FormBuilder) {
    this.car = {
      id: '',
      marca: '',
      modelo: '',
      fabricacion: '',
      potencia: null,
      velocidadMaxima: null
    };
    this.carForm = this.formBuilder.group({
      marca: ['', Validators.required],
      modelo: ['',Validators.required],
      fabricacion: ['', Validators.required],
      potencia: ['', Validators.required],
      velocidadMaxima: ['', Validators.required]
    });
  }

  saveData() {
    console.log(this.car);
    this.firebaseProvider.addCar(this.car)
      .then(() => this.navCtrl.pop())
      .catch(err => console.log(err));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCarPage');
  }
}
