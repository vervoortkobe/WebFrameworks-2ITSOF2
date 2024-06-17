import { Module } from '@nestjs/common';
import { ScoreService } from './score/score.service';
import { ScoresController } from './scores/scores.controller';

@Module({
  imports: [],
  controllers: [ScoresController],
  providers: [ScoreService],
})
export class AppModule {}
