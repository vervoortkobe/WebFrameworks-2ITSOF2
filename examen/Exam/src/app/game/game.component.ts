import { Component } from '@angular/core';
import * as _ from 'lodash';
import { GameService, IScore } from '../services/game.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  ready: boolean = true;
  getal1: number = 0;
  getal2: number = 0;
  vraagNummer: number = 0;
  stopSpel: boolean = false;
  score: number = 0;
  beginTijdVraag = 0;
  _svc: GameService;
  saveScore: IScore | any;

  constructor(svc: GameService) {
    this._svc = svc;

    setTimeout(() => {
      this.ready = false
      this.StartSpel();
    }, 3 * 1000);
  }

  get Ready(): boolean {
    return this.ready;
  }

  StartSpel() {
    this.DoeSpel();
    this.vraagNummer = 1;
    this.beginTijdVraag = Date.now();
  }

  DoeSpel() {
    this.getal1 = _.random(0, 10);
    this.getal2 = _.random(0, 10);
  }

  ngOnInit(): void {
  }

  VolgendeVraag() {
    this.NieuweVraag();
    this.score += (Date.now() - this.beginTijdVraag) * 2 + 1;
  }
  
  //dmv setInterval() naar volgende vraag gaan, duur is afhankelijk van moeilijkheidsgraad

  NieuweVraag() {
    switch(this.vraagNummer) {
      case 1:
      case 2:
      case 3:
      case 4:
        if(!this.stopSpel) this.DoeSpel();
        break;
      case 5:
        this.StopSpel();
        
        break;

      default:
        break;
    }
  }

  StopSpel() {
    this.stopSpel = true;
    this.saveScore.Username = this._svc.CurrentPlayer;
    this.saveScore.Score = this.score;
    this.saveScore.Date = Date.now();
    this._svc.SaveScore(this.saveScore);
  }

}
