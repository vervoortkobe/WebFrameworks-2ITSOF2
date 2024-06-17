import { Component, OnInit } from '@angular/core';
import * as _ from "lodash"

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {

  locations = ['Anchorage', 'Brussel', 'Osaka', 'Auckland', 'Kaapstad']
  temps: number[] = [5, 1, 10, 12, 18];

  constructor() {
    setInterval(this.Regenerate, 2000)
  }

  //Genereer nieuwe temperaturen
  Regenerate = () =>
  {
    for(let t = 0; t < this.temps.length; t++)
    {
      this.temps[t] = _.random(25);
    }
  }
}
