import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
//import { Observable } from '@firebase/util';
import { Car } from '../../models/car';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {
  car: any; //Observable<Car>
  cars: any;//Observable<Car[]>

  carsCollection: AngularFirestoreCollection<Car>;
  carDoc: AngularFirestoreDocument<Car>;

  constructor(public http: HttpClient, private db: AngularFirestore) {
  }

  getCars(){
    this.carsCollection = this.db.collection('cars');
    this.cars = this.carsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Car;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    return this.cars;
  }

  getCar(id) { 
    this.carDoc = this.db.doc<Car>('cars/'+id);
    this.car = this.carDoc.valueChanges();
    return this.car;
  }

  deleteCar(id){
    this.db.doc<Car>('cars/'+id).delete()
      .then( () => console.log("Objeto borrado"))
      .catch( err => console.error(err));
  }
  addCar(car: Car){
    this.db.doc<Car>('cars').set(car)
    .then( () => console.log("Objeto creado"))
    .catch( err => console.error(err));
  }

}
