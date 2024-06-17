import { Component, OnInit } from '@angular/core';
import * as _ from "lodash"

@Component({
  selector: 'app-toets',
  templateUrl: './toets.component.html',
  styleUrls: ['./toets.component.css']
})
export class ToetsComponent {
 
  score : number;
  minScore = 1;
  //als we max. score hier definiëren, dan kunnen we deze gebruiken
  //om de random functie aan te roepen,
  //maar tegelijk ook om weer te geven in de HTML template
  maxScore = 10;

  constructor() {
    setInterval(this.Newscore, 2000)
   }

  Newscore = () => {
      this.score = _.random(this.minScore, this.maxScore);
  }

  BadScore()
  {
      return this.score < 4;
  }

  GoodScore()
  {
    return this.score > 7;
  }

}
