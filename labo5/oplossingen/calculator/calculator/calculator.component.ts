import { Component, OnInit } from '@angular/core';
import * as  math from 'mathjs';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  numbers: string[][] = [['1', '2', '3', '+'], ['4', '5', '6', '-'], ['7', '8', '9', '*'], ['.', '0', '=', '/']];
  display: string = "";

  constructor() { }

  ngOnInit() {
  }

  Getal(n: string) {
    if (n != "=")
      this.display += n;
    else
      this.display = math.eval(this.display)
  }

}
