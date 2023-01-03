import { Component, VERSION } from '@angular/core';
import { TransportationService } from './transportation.service';
import {Car} from './car';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  title = 'Star Wars';

  colors:string[] =['red', 'blue', 'yellow'];

  speak(){
    const sentence = this.name + this.title;
    return sentence;
  }

  counter = 0;

  addone(){
    this.counter++;
  }

  cars: Car[];

    constructor (private transportationService: TransportationService){
      this.cars = this.transportationService.getCars();
    }



  saySomething(){
    alert('good day.')
  }
}
