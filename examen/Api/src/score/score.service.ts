import { Injectable } from '@nestjs/common';
import scores from '../scores.json';
import { Score } from 'src/types';

@Injectable()
export class ScoreService {
  private _score: Score[] = scores;

  public getAllScores(): Score[] {
    return this._score;
  }

  public createScore(score: Score) {
    score.id = (
      Math.max(...this._score.map((p) => parseInt(p.id))) + 1
    ).toString();
    this._score.push(score);
    return score;
  }
}
