import { Body, Controller, Get, Post } from '@nestjs/common';
import { ScoreService } from 'src/score/score.service';
import { Score } from 'src/types';

@Controller('scores')
export class ScoresController {
  constructor(private _score: ScoreService) {}

  @Get()
  public getAllScores() {
    return this._score.getAllScores();
  }

  @Post()
  public createScore(@Body() score: Score) {
    return this._score.createScore(score);
  }
}
