import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {

    constructor(private gamesService: GamesService) {

    }

    @Get()
    public games() {
        return this.gamesService.games;
    }

    @Get(":id")
    public gameById(@Param("id", ParseIntPipe) id: number) {
        let game = this.gamesService.findGameById(id);
        if (!game) {
            throw new HttpException("Game not found", HttpStatus.NOT_FOUND);
        }
        return game;
    }

}
