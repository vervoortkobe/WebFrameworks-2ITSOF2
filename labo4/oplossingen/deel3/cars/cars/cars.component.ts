import { Component, OnInit } from '@angular/core';
import { CarManufacturer } from "./Manufacturer"

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent  {

  manufacturers: CarManufacturer[] = [];

  constructor() {
    this.manufacturers.push(new CarManufacturer("Ford", "Kuga", "B-Max", "S-Max", "Focus", "Mondeo"));
    this.manufacturers.push(new CarManufacturer("Mercedes", "C-220", "E-250");
    this.manufacturers.push(new CarManufacturer("BMW", "X-3", "X-6", "322"));
   }

}


