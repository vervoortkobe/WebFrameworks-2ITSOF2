import { Module } from '@nestjs/common';
import { GamesController } from './games/games.controller';
import { GenresController } from './genres/genres.controller';
import { GamesService } from './games/games.service';

@Module({
  imports: [],
  controllers: [GamesController, GenresController],
  providers: [GamesService],
})
export class AppModule {}
