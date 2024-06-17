import { Component } from '@angular/core';

@Component({
  selector: 'app-datum-tijd',
  templateUrl: './datum-tijd.component.html',
  styleUrls: ['./datum-tijd.component.css']
})
export class DatumTijdComponent {

  datum: Date;

  constructor() {
    setInterval(() => this.datum = new Date(), 1000)
  }

  get IsMorning()
  {
    //bij de opstart zal de datum nog niet ingesteld zijn, pas na 2 seconden.
    if (this.datum == null) return false;
    return this.datum.getHours() < 12
  }

  get IsEvening()
  {
    if (this.datum == null) return false;
    return this.datum.getHours() >= 18
  }
}
