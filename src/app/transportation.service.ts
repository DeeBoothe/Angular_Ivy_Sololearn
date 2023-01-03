import { Injectable } from '@angular/core';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class TransportationService {
  subaru: Car = {make: 'Subaru', model:'Outback', miles: 58300};
  honda: Car = {make: 'Honda', model: 'Accord', miles: 62345};
  bmw: Car = {make: 'BMW', model: 'X3', miles: 4400};

  cars:Car[] = [this.subaru, this.honda, this.bmw];

  constructor() { }

  getCars(){
    return this.cars;
  }
}
