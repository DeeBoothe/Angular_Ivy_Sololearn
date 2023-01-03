import { Component, VERSION } from '@angular/core';
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

  subaru: Car ={make:"Subaru", model: "Outback", miles: 58262};
  honda: Car ={make:'Honda', model: "Accord", miles:34501};
  bmw: Car ={make:"BMW", model:"X3", miles: 4400};

  cars:Car[]=[this.subaru, this.honda, this.bmw];
}
