import { Component } from '@angular/core';
import * as _ from "lodash";
import { GameService, IScore } from '../services/game.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent {

  scores: IScore[] = [];
  
  constructor(svc: GameService){

  }

  //this.svc.
  //geef scores weer dmv *ngFor

  async ngOnInit()
  {
  }

  // Sort helper method
  // list: the array of objects to be sorted
  // property: the name of the property on which the sorting should be donde
  // ascending: TRUE for ascending (upwards) sort, FALSE for descending (downwards) sort 
  // return value: the sorted array is returned
  private Sort(list: any, property: string, ascending: boolean)
  {
      return _.orderBy(list, property, ascending ? "asc": "desc");
  }
}
