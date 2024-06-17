import { Injectable } from '@angular/core';
import { IPlayer, Level } from './IPlayer';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  player : IPlayer | any = {};

  constructor(private http: HttpClient) {
    this.player.Fullname = "";
    this.player.Username = "";
    this.player.Email = "";
    this.player.Level = Level.Easy
   }

  get CurrentPlayer()
  {
    return this.player;
  }

  SaveScore(score : number)
  {
    let Score : IScore = {
      Score : score,
      Username : this.CurrentPlayer.Username,
      Date : new Date()
    };

    return lastValueFrom(this.http.post("http://localhost:3000/scores", Score));
  }

  GetScores()
  {
    return lastValueFrom(this.http.get<IScore[]>("http://localhost:3000/scores"));
  }

}

export interface IScore
{
  Username: string;
  Score: number;
  Date: Date;
}
